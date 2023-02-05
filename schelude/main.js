const schedule = require('node-schedule');

const { ProblemModel } = require('../models/problem-model.js')
const CompanyModel = require('../models/company-model.js')

module.exports = function setupScheludes() {
    // ADD CHECKING PROBLEMS
    const checkProblemsJob = schedule.scheduleJob('1 * * * *', async () => { // run every hour at minute 1
        let allProblems = await ProblemModel.find({})
        let COMPANY = await CompanyModel.findOne({ identifier: '0' })

        for (let PROBLEM of allProblems) {
            let lastAction = PROBLEM.actions[PROBLEM.actions.length - 1]
            switch (lastAction.status) {
                case 'created':
                    if ((Date.now() - (lastAction.date / 1000 / 60 / 60).toFixed(0)) >= 24) {
                        // найти ответсвенного в иерархии компании и присвоить его id в respEmpl
                    }
            }
        }
    });
}