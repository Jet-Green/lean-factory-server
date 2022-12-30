const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    // phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    roles: { type: [String], ref: "Role" },
    toFix: { type: Array },
    company: { type: String, required: true, default: "0", ref: "Company" },
})

module.exports = model('User', UserSchema);