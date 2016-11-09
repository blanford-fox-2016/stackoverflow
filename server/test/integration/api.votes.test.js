const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'

let new_vote = [1, 2, 3]

/*
  * only edit vote
*/
let delete_vote = [1, 2]
/*
  * will test POST /api/questions/:questid/votes/
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new vote in 1 question with questionId: 1 into database', function(){
  it('it should add new vote in 1 question with questionId: 1', function(done){
    chai.request(url)
      .post('/api/questions/1/votes/')
      .send(new_vote)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.votes.should.equal(new_vote)
        done()
      })
  })
})


/*
  * will test DELETE /api/questions/:questid/votes/
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe('Deleted a specific comment based on commentId', function(){
  it('it should delete a specific comment', function(done){
    chai.request(url)
      .delete('/api/questions/1/votes/')
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.votes.should.equal(delete_vote)
        done()
      })
  })
})
