'use strict'

const Question = require('../models/models.question.js');
const mocha = require('mocha')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const chaiHttp = require('chai-http')
const should = chai.should()
const mongoose = require('mongoose');
let server = "http://localhost:3000"
chai.use(chaiHttp)




/*
clear data base
add new dataa base
*/

describe('testing endpoint question ', function() {
  // this.timeout(5000);
  before(function(){
    Question.remove({},function(err){});
  })

  it('create new question ', function(done) {
    chai.request(server)
    .post('/api/question')
    .send({
      questionId:12,
      question:"asalaja",
      title:"coba"
    })
    .end(function(err, res) {
      console.log(res.body);
      res.body.should.have.property('_id')
      res.body.title.should.equal('coba')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('show all question ', function(done) {
    chai.request(server)
    .get('/api/question')
    .end(function(err, res) {
      console.log(res.body[0]);
      res.body[0].should.have.property('_id')
      res.body[0].title.should.equal('apa')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('update question ', function(done) {
    chai.request(server)
    .put('/api/question/12')
    .send({
      title:"coba aja",
      question:"asalaja deh"
    })
    .end(function(err, res) {
      console.log(res.body[0]);
      res.body.should.have.property('_id')
      res.body.title.should.equal('coba')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('delete question ', function(done) {
    chai.request(server)
    .delete('/api/delete/12')
    .end(function(err, res) {
      console.log(res.body[0]);
      res.body.should.have.property('_id')
      res.body.title.should.property('userId')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })



})
