const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'

let add_data = {
  "content" : "How are you today?",
  "answer"  : {
    "userId"    : 123213123123,
    "content" : "I'm fine"
  },
  "votes" : [{
    "userId" : 123213123123
  },{
    "userid" : 100000
  }]
}

/*
  * only edit content's question
*/
let edit_data = {
  "content" : "How are you today?",
  "answer"  : {
    "userId"    : 123213123123,
    "content" : "I'm not fine :("
  },
  "votes" : [{
    "userId" : 123213123123
  },{
    "userid" : 100000
  }]
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
        res.body.should.equal(add_data)
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
        res.should.be.json
        res.should.have.status(200)
        res.body.should.equal(add_data)
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
        res.should.be.json
        res.should.have.status(200)
        res.body.should.equal(edit_data)
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
        done()
      })
  })
})
