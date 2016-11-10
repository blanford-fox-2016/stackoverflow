'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();


describe('register a new user', function() {
  let mydob = new Date("1998-09-09")
  mydob.toISOString()
  it('should store a new user data to database and return a session', function(done) {
    chai.request('http://localhost:3000')
      .post('/auth/register')
      .send({
        name: 'Septian Adhi Tama',
        email: 'tama@tamatamvan.web.id',
        username: 'tamatamvan',
        password: 'tamatamvan',
        dob: mydob
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        // console.log(res);
        res.body.name.should.equal('Septian Adhi Tama');
        res.body.email.should.equal('tama@tamatamvan.web.id');
        res.body.username.should.equal('tamatamvan');
        done();
      })
  })
})

describe('user login', function() {
  it('should authenticate user, send a jwt if username and password correct according to database', function(done) {
    chai.request('http://localhost:3000')
      .post('/auth/login')
      .send({
        username: 'tamatamvan',
        password: 'tamatamvan'
      })
      .end(function(err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.name.should.equal('Septian Adhi Tama');
        res.body.email.should.equal('tama@tamatamvan.web.id');
        res.body.username.should.equal('tamatamvan');
        done();
      })
  })
})
