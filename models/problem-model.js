const { Schema, model } = require('mongoose');

const ProblemSchema = new Schema({
    photos: { type: Array, default: [] },
    commentToPhoto: { type: String, default: '' },
    placeId: String,
    // dates of start and end, last status, userId
    actions: { type: [], default: [] },
})
module.exports = { ProblemModel: model('Problem', ProblemSchema), ProblemSchema }