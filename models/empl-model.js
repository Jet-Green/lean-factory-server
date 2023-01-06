const { Schema, model } = require('mongoose');
const { ProblemSchema } = require('./problem-model')
const { ProblemTypeSchema } = require('./problem-type-model')

const EmplSchema = new Schema({
    email: { type: String, default: '' },
    isConfirmed: { type: Boolean, default: false },
    roles: { type: Array, default: ['default_user'] },
    emplName: String,
    place: { type: String, default: null },
    problemType: { type: [ProblemTypeSchema], default: [] },
    user: { type: Object, default: null },
    reportsToFix: { type: [ProblemSchema], default: [] }
})

module.exports = {
    EmplModel: model('Employee', EmplSchema),
    EmplSchema
}