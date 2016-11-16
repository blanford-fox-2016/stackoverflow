'use strict'
const passport = require('passport')
const Question = require('../models/models.api.questions')

const seeder = require('../config/seeder.api.questions')

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Question's Controller
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let showAllQuestion = (req, res) => {
  Question
    .find({}, (err, all_data) => {
      if(err) res.status(400).json({'error': 'Error: ${err}'})
      if(!all_data) res.status(404).json({'message': 'Failed to show all questions'})
      console.log(all_data);
      res.status(200).json(all_data)
    }).sort({_id: -1})
}

let addQuestion = (req, res) => {
  console.log(`add question`);
  // console.log(req.body.content);
  Question.create({
    // questionId : 1,
    title: req.body.title,
    content: req.body.content,
    author : req.body.author,
    comment : [],
    votes : []
  }, (err, new_data) => {
    console.log(new_data);
    if(err) res.status(400).json({'error': err})
    if(!new_data) res.status(404).json({'message': 'Failed to add question'})

    res.status(200).json(new_data)
  })

}

let showQuestion = (req, res) => {
  Question.findOne({
    questionId : req.params.questid
  }, (err, show_one_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!show_one_data) res.status(404).json({'message': 'Failed to show question'})

    res.status(200).json(show_one_data)
  })
}

let editQuestion = (req, res) => {
  console.log(`edit question`);
  console.log(req.body);
  Question.findOneAndUpdate({
    questionId : req.params.questid
  }, req.body, {
    new : true
  }, (err, edited_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!edited_data) res.status(404).json({'message': 'Failed to edit question'})

    res.status(200).json(edited_data)
  })
}

let deleteQuestion = (req, res) => {
  Question.findOneAndRemove({
    questionId : req.params.questid
  }, (err, deleted_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!deleted_data) res.status(404).json({'message': 'Failed to delete question'})

    res.status(200).json(deleted_data)
  })
}

/*
  * seeder array with mongoose-increment not fixed
*/
let seedQuestion = (req, res) => {
  // console.log('aaa',seeder);
  Question.create({
    title : "title seed",
    content : "content seed"
  }, (err, seeder_data) => {
    console.log('aaa', seeder_data)
    if(err) res.status(400).json({'error': err})
    if(!seeder_data) res.status(404).json({'message': 'Failed to seed'})

    res.status(200).json(seeder_data)
  })
}

let deleteAllQuestion = (req, res) => {
  Question.remove({}, (err, removed_all) => {
    if(err) res.status(400).json({'error': err})
    if(!removed_all) res.status(404).json({'message': 'Failed to remove all data'})

    res.status(200).json(removed_all)
  })
  // Question.resetSequence()
  // Question.db.db.dropCollection('questions', (err) => {console.log(err);})
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Comment's Controller
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let addComment = (req, res) => {
  Question.findOne({
    questionId : req.params.questid
  }, (err, one_data) => {
    console.log(one_data.comment.length);

    Question.findOneAndUpdate({
      questionId : req.params.questid
    }, {
      $push : {
        comment : {
          commentId : one_data.comment.length+1,
          content : req.body.content,
          author: req.body.author
        }
      }
    }, {
      new: true
    }, (err, new_comment) => {
      if (err) {
        console.log(err);
        res.json(err)
      }else{
          console.log(new_comment);
          res.json(new_comment.comment[new_comment.comment.length-1])
      }
    })
  })
}

let editComment = (req, res) => {
  Question.findOneAndUpdate({
    "questionId" : req.params.questid,
    "comment.commentId" : req.params.commentid
  }, {
    // $set : {
    //   comment : {
    //     commentId : req.params.commentid,
    //     content : req.body.content
    //   }
    //   // "comment.content" : req.body.content
    // }
    'comment.$.content' : req.body.content
  }, {
    new: true
  },(err, new_comment) => {
    if (err) {
      console.log(err);
      res.json(err)
    }else{
      for (var i = 0; i < new_comment.comment.length; i++) {
        if(new_comment.comment[i].commentId === Number(req.params.commentid)){
          console.log(new_comment.comment[i]);
          res.status(200).json(new_comment.comment[i])
        }
      }
    }
  })
}

let deleteComment = (req, res) => {
  Question.findOneAndUpdate({
    "questionId" : req.params.questid,
    "comment.commentId" : req.params.commentid
  }, {
    $pull : {
      comment : {
        commentId : req.params.commentid
      }
    }
  }, {
    new: true
  }, (err, deleted_data) => {
    if (err) {
      console.log(err);
      res.json(err)
    }else{
        console.log(deleted_data);
        res.json({message : "deleted", id: req.params.commentid})
    }
  })
}

let showComment = (req, res) => {
  Question.findOne({
    "questionId" : req.params.questid
  }, (err, get_one_data) => {
    // console.log(get_one_data.comment);
    // console.log(typeof req.params.commentid);
    for (var i = 0; i < get_one_data.comment.length; i++) {
      // console.log(typeof get_one_data.comment[i].commentId);
      if(get_one_data.comment[i].commentId === Number(req.params.commentid)){
        console.log(get_one_data.comment[i]);
        res.status(200).json(get_one_data.comment[i])
      }
    }
  })
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Vote's Controller
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let addVote = (req, res) => {
  console.log(req.params.questid);
  Question.findOne({
    questionId : req.params.questid
  }, (err, one_data) => {
    // console.log(one_data.votes.length);
    Question.findOneAndUpdate({
      questionId : req.params.questid
    }, {
      $push : {
        votes : one_data.votes.length+1
      }
    }, {
      new: true
    }, (err, new_vote) => {
      if (err) {
        console.log(err);
        res.json(err)
      }else{
          console.log(new_vote);
          res.json(new_vote)
      }
    })
  })
}

let deleteVote = (req, res) => {
  Question.findOne({
    questionId : req.params.questid
  }, (err, one_data) => {
    Question.findOneAndUpdate({
      "questionId" : req.params.questid
    }, {
      $pull : {
        votes : one_data.votes.length
      }
    }, {
      new: true
    }, (err, deleted_data) => {
      if (err) {
        console.log(err);
        res.json(err)
      }else{
          console.log(deleted_data);
          res.json(deleted_data)
      }
    })
  })
}

let getCountVote = (req, res) => {
  Question.findOne({
    questionId : req.params.questid
  }, (err, one_data) => {
    res.json({vote_total: one_data.votes.length})
  })
}

module.exports = {
  showAllQuestion,
  addQuestion,
  showQuestion,
  editQuestion,
  deleteQuestion,
  seedQuestion,
  deleteAllQuestion,
  addComment,
  editComment,
  deleteComment,
  showComment,
  addVote,
  deleteVote,
  getCountVote
}
/*
addVote : addVote,
deleteVote: deleteVote
*/
