const { Schema, model } = require('mongoose');
const { EmplSchema } = require('./empl-model')

const PlaceSchema = new Schema({
    empl: { type: Object, default: null },
    emplName: { type: String },
    place: { type: String }
})

module.exports = {
    PlaceModel: model('Place', PlaceSchema),
    PlaceSchema
}