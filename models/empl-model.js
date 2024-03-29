const { Schema, model } = require('mongoose');

const EmplSchema = new Schema({
    email: { type: String, default: '' },
    isConfirmed: { type: Boolean, default: false },
    roles: { type: Array, default: ['default_user'] },
    emplName: String,
    places: { type: Array, default: null },
    problemType: { type: Array, default: [] },
    user: { type: Object, default: null },
    reportsToFix: { type: [], default: [] },
    hierarchy: { type: Object, default: null },
})

module.exports = {
    EmplModel: model('Employee', EmplSchema),
    EmplSchema: EmplSchema,
}