const { Schema, model } = require('mongoose');

const EmplSchema = new Schema({
    email: { type: String, required: true, unique: true },
    isConfirmed: { type: Boolean, default: false },
    user: { type: Object, default: null, ref: 'User' }
})
module.exports = model('Employee', EmplSchema);