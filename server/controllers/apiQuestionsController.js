const Questions = require('./models/Questions');

let getAll = (req, res, next) => {
  Questions.find({},
  (err, questions) => {
    if (err) {
      console.log(err);
    } else {
      res.json(questions);
    }
  })
}

let getOneBySlug = (req, res, next) => {
  Questions.findOne({
    slug: req.params.slug
  },
  (err, question) => {
    if (err) {
      console.log(err);
    } else {
      res.json(question);
    }
  })
}

let addNew = (req, res, next) => {
  Questions.create({
    title: req.body.title,
    content: req.body.content,
    answers: req.body.answers,
    up: req.body.up,
    down: req.body.down,
    author: req.body.author
  }, (err, question) => {
    if (err) {
      console.log(err);
    } else{
      res.json(question);
    }
  })
}

let updateById = (req, res, next) => {
  Questions.update({
    _id: req.params.id
  }, {
    title: req.body.title,
    content: req.body.content,
    answers: req.body.answers,
    up: req.body.up,
    down: req.body.down,
    author: req.body.author
  }, (err, updated) => {
    if (err) {
      console.log(err);
    } else {
      res.json(question);
    }
  })
}

let deleteById = (req, res, next) => {
  Questions.remove({
    _id: req.params.id
  } (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deleted);
    }
  })
}
