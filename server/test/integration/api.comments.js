const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'

let new_comment = {
  comment     : [{
      commentId : 1,
      content   : "It's asynchronous",
      author    : 1
  }]
}

/*
  * only edit content's comment
*/
let edit_comment = {
  comment     : [{
      commentId : 1,
      content   : "It's asynchronous, so the performance is very good",
      author    : 1
  }]
}

/*
  * will test POST /api/questions/:questid/comments/
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new comment in 1 question with questionId: 1 into database', function(){
  it('it should add new comment in 1 question with questionId: 1', function(done){
    chai.request(url)
      .post('/api/questions/1/comments/')
      .send(new_comment)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.comment.should.equal(new_comment)
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
describe('Updated a specific comment based on commentId', function(){
  it('it should update a specific comment', function(done){
    chai.request(url)
      .put('/api/questions/1/comments/1')
      .send(edit_comment)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.comment.should.equal(edit_comment)
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
      .delete('/api/questions/1/comments/1')
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.comment.should.equal(edit_comment)
        done()
      })
  })
})
