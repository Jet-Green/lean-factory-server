const { Schema, model } = require('mongoose');

const ProblemTypeSchema = new Schema({
    type: String,
    emplName: String,
    empl: { type: Object, default: null },
})
module.exports = {
    ProblemTypeModel: model('ProblemType', ProblemTypeSchema),
    ProblemTypeSchema
}