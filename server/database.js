const mongoose = require('mongoose');

const URI = 'mongodb://localhost/subjectmanager';

mongoose.connect(URI)
    .then(res => {
        console.log('Database is connected');
    })
    .catch(err => {
        console.log(err);
    })

module.exports = mongoose;