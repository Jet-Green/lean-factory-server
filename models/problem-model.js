const { Schema, model } = require('mongoose');

const ProblemSchema = new Schema({
    photos: { type: Array, default: [] },
    commentToPhoto: { type: String, default: '' },
    place: Object,
    sentToFix: { type: Boolean, default: false },
    dateStart: String
})
module.exports = { ProblemModel: model('Problem', ProblemSchema), ProblemSchema }