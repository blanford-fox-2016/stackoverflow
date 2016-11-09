var questions = require('../models/model.qustAndComment')

module.exports = {
  /* add questions */
  addQuestion : function(req, res, next){

    var newQuestions = new questions({
      title : req.body.title,
      content : req.body.content
      // asker : req.body.asker
    });

    // save
    newQuestions.save(function (err, data) {
      if (err) return handleError(err);
      // return data
      res.json(data);
    })
  },
  /* get all questions */
  getAllQuestion : function(req, res, next){
    questions.find({}, function(err, data){
      if (err) return handleError(err);
      // return data
      res.json(data);
    });
  },
  /* delete question */
  deleteQuestion : function(req, res, next){
    // console.log("body ",req.body);
    questions.remove({ _id: req.body.id }, function (err, question) {
      if (err) return handleError(err);
      // removed!
      res.json(question)
    });
  },
  /* edit question */
  updateQuestion : function(req, res, next){
    // console.log("body ",req.body);
    questions.findOneAndUpdate(
        { _id: req.body.id },
        { title: req.body.title, content: req.body.content },
      function(err, question) {
        if (err) throw err;
        // we have the updated user returned to us
        res.json(question)
    });
  },
  /* find one question and comment */
  findOneQuestion : function(req, res, next){
    questions.find({ _id: req.body.id }, function(err, user) {
      if (err) throw err;

      // object of the user
      console.log(user);
    });
  }

}
