const express = require('express');
const passport = require('passport');
const subjectctrl = require('../controllers/subject.controller');
const route = express.Router();

route.get('/', passport.authenticate('jwt', {session: false}), subjectctrl.getSubjects);
route.get('/:_id', subjectctrl.getSubject);
route.post('/', subjectctrl.Addsubject);
route.post('/:_id', subjectctrl.Addtest);
route.get('/test/:_id', subjectctrl.getTest);
route.put('/:_id', subjectctrl.updateProm);
route.delete('/:_id', subjectctrl.deleteTest);
route.delete('/subject/:_id', subjectctrl.deleteSubject);

module.exports = route; 