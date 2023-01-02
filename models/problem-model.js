const { Schema, model } = require('mongoose');

const ProblemSchema = new Schema({
    photos: { type: Array, default: [] },
    commentToPhoto: { type: String, default: '' },
    place: { type: String, }
})
module.exports = { ProblemModel: model('Problem', ProblemSchema), ProblemSchema }