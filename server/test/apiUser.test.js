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
