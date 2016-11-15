const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'

const Question = require('../../models/models.api.questions')

let new_comment = {
      content   : "It's asynchronous"
}

/*
  * only edit content's comment
*/
let edit_comment = {
      content   : "It's asynchronous"
}

before(function(done){
  chai.request(url)
    .post('/api/questions/seed')
    .end(function(err, seed){
      done()
    })
})

/*
  * will test POST /api/questions/:questid/comments/
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new comment in 1 question', function(){
  it('it should add new comment in 1 question', function(done){
    chai.request(url)
      .post('/api/questions/103/comments/')
      .send(new_comment)
      .end(function(err, res){
        console.log(res.body.comment.length);
        res.should.be.json
        res.should.have.status(200)
        // res.body.comment[res.body.comment.length-1].content.should.equal(new_comment.content)
        done()
      })
  })
})

/*
  * will test PUT /api/questions/:questid/comments/:commentid
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
describe.skip('Updated a specific comment based on commentId', function(){
  it('it should update a specific comment', function(done){
    chai.request(url)
      .put('/api/questions/103/comments/3')
      .send(edit_comment)
      .end(function(err, res){
        console.log(res.body.comment);
        res.should.be.json
        res.should.have.status(200)
        res.body.comment[res.body.comment.length-1].content.should.equal(edit_comment.content)
        done()
      })
  })
})

/*
  * will test DELETE /api/questions/:questid/comments/:commentid
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe('Deleted a specific comment based on commentId', function(){
  it('it should delete a specific comment', function(done){
    chai.request(url)
      .delete('/api/questions/103/comments/4')
      .end(function(err, res){
        console.log(res.body);
        res.should.be.json
        res.should.have.status(200)
        res.body.message.should.equal("deleted")
        done()
      })
  })
})
