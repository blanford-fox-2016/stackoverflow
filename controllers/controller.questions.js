var questions = require('../models/model.qustAndComment')

module.exports = {
  // add questions
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
  // get all questions
  getAllQuestion : function(req, res, next){
    questions.find({}, function(err, data){
      if (err) return handleError(err);
      // return data
      res.json(data);
    });
  },
  // delete

}
