'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

//Test script for get article lists
describe('user list', function() {
  it('should return the respond json which contains the list of users from database', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/user')
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})


//Test script for get article lists
describe('user list', function() {
  it('should return the respond json which contains the list of users from database', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/user')
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

//get single article by slug
describe('get single user by username', function() {
  let username = 'tamatamvan';
  it('should return a single article based on slug', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/user/'+username)
    .end(function (err, res) {
      res.should.be.json;
      res.should.have.status(200);
      res.body.username.should.equal('tamatamvan');
      done();
    })
  })
})
