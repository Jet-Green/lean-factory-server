const { Schema, model } = require('mongoose');

const ProblemSchema = new Schema({
    photos: { type: Array, required: true, default: [] },
    commentToPhoto: { type: String, required: true, default: '' },
    place: { type: String, required: true }
})
module.exports = model('Problem', ProblemSchema);