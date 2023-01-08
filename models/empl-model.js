const { Schema, model } = require('mongoose');
const { ProblemSchema } = require('./problem-model')

const EmplSchema = new Schema({
    email: { type: String, default: '' },
    isConfirmed: { type: Boolean, default: false },
    roles: { type: Array, default: ['default_user'] },
    emplName: String,
    place: { type: Array, default: null },
    problemType: { type: Array, default: [] },
    user: { type: Object, default: null },
    reportsToFix: { type: [ProblemSchema], default: [] }
})

module.exports = {
    EmplModel: model('Employee', EmplSchema),
    EmplSchema: EmplSchema,
}