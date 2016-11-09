'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

//Test script for get user lists
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

//get single article by username
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

describe('edit user', function() {
  let username = 'tamatamvan';
  it("should update user's data with a new one based on id", function(done) {
    chai.request('http://localhost:3000')
      .get('/api/user/'+username)
      .end(function (err, res) {
        chai.request('http://localhost:3000')
          .put('/api/user/'+res.body._id)
          .send({
            name: 'Septian Adhi Tama',
            email: 'tama@tamatamvan.web.id',
            username: 'tamatamvan123'
          })
          .end(function (err, res) {
            res.should.be.json;
            res.should.have.status(200);
            res.body.ok.should.equal(1);
            res.body.nModified.should.equal(1);
            res.body.n.should.equal(1);
            done();
          })
      })
  })
})

describe('delete user', function(){
  let username = 'tamatamvan123'
  it('should delete user data and return status ok 1, n 1', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/user/'+username)
      .end(function (err, res) {
        chai.request('http://localhost:3000')
          .delete('/api/user/'+res.body._id)
          .end(function (err, res){
            res.should.be.json;
            res.should.have.status(200);
            res.body.ok.should.equal(1);
            res.body.n.should.equal(1);
            done();
          })
      })
  })
})
