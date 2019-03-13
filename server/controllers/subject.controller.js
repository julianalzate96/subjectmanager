const Subject = require('../models/subject');
const Test = require('../models/test')
const subjectctrl = {};

subjectctrl.getSubjects = async (req, res) => {
    const subjects = await Subject.find();
    res.json(subjects);
}

subjectctrl.getSubject = async (req, res) => {
    const subject = await Subject.findById(req.params._id);
    res.json(subject);
}

subjectctrl.Addsubject = async (req, res) => {
    const subject = new Subject();
    subject.name = req.body.name;
    subject.teacher = req.body.teacher;
    subject.credits = req.body.credits;
    subject.prom = "0";
    await subject.save();
    res.json({
        status: 'Subject added'
    })
}

subjectctrl.Addtest = async (req, res) => {
    const test = new Test();
    test.name = req.body.name;
    test.percent = req.body.percent;
    test.note = req.body.note;
    test.subject = req.params._id;
    await test.save();
    res.json({status: 'test Saved'})
}

subjectctrl.getTest = async (req, res) => {
    const tests = await Test.find({subject: req.params._id});
    res.json(tests);
}

subjectctrl.updateProm = async (req, res) => {
    await Subject.findOneAndUpdate({ _id: req.params._id }, { $set: { prom: req.body.prom }});
    res.json({status: 'Prom Updated'});
}

subjectctrl.deleteTest = async (req, res) => {
    await Test.findByIdAndDelete(req.params._id);
    res.json({
        status: 'Test Deleted'
    })   
}

subjectctrl.deleteSubject = async (req, res) => {
    await Test.findOneAndDelete({ subject: req.params._id});
    await Subject.findByIdAndDelete(req.params._id);
    res.json({
        status: 'Subject Deleted'
    })   
}

module.exports = subjectctrl; 