const mongoose = require('mongoose');
const { Schema } = mongoose;
const Subject = mongoose.model('Subject');

const TestSchema = new Schema({
    name: { type: String, required: true },
    percent: { type: String, require: false },
    note: { type: String, required: true },
    subject: { type: Schema.ObjectId, ref: "Subject"}
});

module.exports = mongoose.model('Test', TestSchema);