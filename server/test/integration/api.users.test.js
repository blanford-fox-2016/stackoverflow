const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'

/*
  * will test POST /api/users/login
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the new content value that sent (POST)
*/


/*
  * will test POST /api/users
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe.skip('Add a new user into database', function(){
  it('it should add new user', function(done){
    chai.request(url)
      .post('/api/users')
      .send({
        "userId"   : 123,
        "username" : "admin", // username is unique
        "password" : "admin"
        // add article put here
      })
      .end(function(err, res){
        console.log(res.body);
        res.should.be.json
        res.should.have.status(200)
        res.body.username.should.equal("admin")
        done()
      })
  })
})

/*
  * will test PUT /api/users/:id
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
describe.skip('Updated a specific user based on id', function(){
  it('it should update a specific user', function(done){
    chai.request(url)
      .put('/api/users/' + 1)
      .send({
        "username" : "admin123"
      })
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.username.should.equal("admin123")
        // res.body.password.should.equal("admin123")
        done()
      })
  })
})

/*
  * will test DELETE /api/users
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe.skip('Deleted a specific user based on id', function(){
  it('it should delete a specific user', function(done){
    chai.request(url)
      .delete('/api/users/' + 1)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.userId.should.equal(1)
        done()
      })
  })
})
