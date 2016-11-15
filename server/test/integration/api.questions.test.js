const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

// const Question = require('..../models/models.api.questions')

const url = 'http://localhost:3000'

let add_data = {
  title       : "URGENT !",
  content     : "Why you choose node.js rather than PHP?",
  comment     : [],
  votes   : []
}

/*
  * only edit content's question
*/
let edit_data = {
  title       : "URGENT !",
  content     : "Why you choose node.js rather than JSP?"
}


/*
  * will test POST /api/questions
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new question into database', function(){
  it('it should add new question', function(done){
    chai.request(url)
      .post('/api/questions')
      .send(add_data)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        // res.body.questionId.should.equal('1')
        res.body.content.should.equal(add_data.content)
        res.body.comment.length.should.equal(0)
        res.body.votes.length.should.equal(0)
        done()
      })
  })
})

/*
  * will test GET /api/questions/
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the select data (GET)
*/
describe('Select all questions with comments', function(){
  it('it should select all questions with comments', function(done){
    chai.request(url)
      .get('/api/questions')
      .end(function(err, res){
        console.log(res.body);
        // res.should.be.json
        // res.should.have.status(200)
        // res.body.questionId.should.equal(1)
        // res.body.content.should.equal(add_data.content)
        // res.body.comment.length.should.equal(0)
        // res.body.votes.length.should.equal(0)
        done()
      })
  })
})

/*
  * will test GET /api/questions/:questid
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the select data (GET)
*/
describe('Select 1 question with comments', function(){
  it('it should select 1 question with comments', function(done){
    chai.request(url)
      .get('/api/questions/1')
      .end(function(err, res){
        console.log(res.body);
        res.should.be.json
        res.should.have.status(200)
        res.body.questionId.should.equal(1)
        res.body.content.should.equal(add_data.content)
        res.body.comment.length.should.equal(0)
        res.body.votes.length.should.equal(0)
        done()
      })
  })
})

/*
  * will test PUT /api/questions/:questid
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
describe('Updated a specific question based on questionId', function(){
  it('it should update a specific question', function(done){
    chai.request(url)
      .put('/api/questions/1')
      .send(edit_data)
      .end(function(err, res){
        console.log(res.body);
        res.should.be.json
        res.body.questionId.should.equal(1)
        res.body.content.should.equal(edit_data.content)
        res.body.comment.length.should.equal(0)
        res.body.votes.length.should.equal(0)
        done()
      })
  })
})

/*
  * will test DELETE /api/questions
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe('Deleted a specific question based on questionId', function(){
  it('it should delete a specific question', function(done){
    chai.request(url)
      .delete('/api/questions/' + 1)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.questionId.should.equal(1)
        res.body.content.should.equal(edit_data.content)
        res.body.comment.length.should.equal(0)
        res.body.votes.length.should.equal(0)
        done()
      })
  })
})
