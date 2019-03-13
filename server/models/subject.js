const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true },
    teacher: { type: String, require: false },
    credits: { type: String, required: true },
    prom: { type: String, required: true }
});

module.exports = mongoose.model('Subject', SubjectSchema);