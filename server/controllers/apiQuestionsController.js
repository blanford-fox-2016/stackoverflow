const Questions = require('../models/Questions');
const slug = require('slug');

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
    author: req.body.author,
    slug: slug(req.body.title).toLowerCase()
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
    author: req.body.author,
    slug: slug(req.body.title).toLowerCase()
  }, (err, updated) => {
    if (err) {
      console.log(err);
    } else {
      res.json(updated);
    }
  })
}

let deleteById = (req, res, next) => {
  Questions.remove({
    _id: req.params.id
  }, (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deleted);
    }
  })
}

module.exports = {
  getAll: getAll,
  getOneBySlug: getOneBySlug,
  addNew: addNew,
  updateById: updateById,
  deleteById: deleteById
}
