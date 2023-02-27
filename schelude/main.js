const schedule = require('node-schedule');

const { ProblemModel } = require('../models/problem-model.js')
const CompanyModel = require('../models/company-model.js')
const { EmplModel } = require('../models/empl-model.js')

module.exports = function setupScheludes() {
    // ADD CHECKING PROBLEMS
    const checkProblemsJob = schedule.scheduleJob('1 * * * * *', async () => { // run every hour at minute 1
        let allProblems = await ProblemModel.find({})

        for (let PROBLEM of allProblems) {
            let lastAction = PROBLEM.actions[PROBLEM.actions.length - 1]
            let emplWithTrueHierarchy;
            // -1 потому что там уже есть один нужный нам статус
            let depth = -1

            switch (lastAction.status) {
                case 'created':
                    for (let a of PROBLEM.actions) {
                        if (a.status == 'created') {
                            if (!emplWithTrueHierarchy) emplWithTrueHierarchy = a.respEmpl
                            depth++;
                        }
                    }

                    if ((Date.now() - (lastAction.date / 1000 / 60 / 60).toFixed(0)) >= 0) {
                        let firstRespEmpl = await EmplModel.findById(emplWithTrueHierarchy)
                        let nextRespEmpl = firstRespEmpl != null ? firstRespEmpl.hierarchy?.up[depth]?._id : null

                        // найти ответсвенного в иерархии компании и присвоить его id в respEmpl
                        if (nextRespEmpl) {
                            PROBLEM.actions.push({ status: 'created', respEmpl: nextRespEmpl, date: Date.now() })
                            await EmplModel.findOneAndUpdate({ _id: nextRespEmpl }, { $push: { reportsToFix: PROBLEM._id } })
                            await PROBLEM.save()
                        }
                    }
                    break;
                case 'sent_to_fix':
                    for (let a of PROBLEM.actions) {
                        if (a.status == 'sent_to_fix') {
                            if (!emplWithTrueHierarchy) emplWithTrueHierarchy = a.respEmpl
                            depth++;
                        }
                    }

                    if ((Date.now() - (lastAction.date / 1000 / 60 / 60).toFixed(0)) >= 0) {
                        let firstRespEmpl = await EmplModel.findById(emplWithTrueHierarchy)
                        let nextRespEmpl = firstRespEmpl != null ? firstRespEmpl.hierarchy?.up[depth]?._id : null

                        if (nextRespEmpl) {
                            PROBLEM.actions.push({ status: 'sent_to_fix', respEmpl: nextRespEmpl, date: Date.now() })
                            await EmplModel.findOneAndUpdate({ _id: nextRespEmpl }, { $push: { reportsToFix: PROBLEM._id } })
                            await PROBLEM.save()
                        }
                    }
                    break;
            }
        }
    });
}