'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const slug = require('slug');
chai.use(chaiHttp);
const should = chai.should();
// const article = require('../models/questions');

describe('post new question', function() {
  it('should store a new question to the database, and return the data back', function(done) {
    chai.request('http://localhost:3000')
      .post('/api/question')
      .send({
        title: 'Tanya Dong',
        content: 'Saya boleh tanya ga?',
        author: 'orang_tamvan',
        answers: [],
        up: [],
        down: [],
        // slug: 'tanya-dong',
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.title.should.equal('Tanya Dong');
        res.body.content.should.equal('Saya boleh tanya ga?');
        res.body.author.should.equal('orang_tamvan');
        res.body.slug.should.equal('tanya-dong');
        done();
      })
  })
})

describe('get all questions', function() {
  it('should return the respond json which contains the list of questions from database', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/question')
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

describe('get one question based on by slug', function() {
  let slug = 'tanya-dong';
  it('should return the right question based on slug', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/question/' + slug)
      .end(function (err, res) {
        res.should.be.json;
        res.should.have.status(200);
        done();
      })
  })
})

describe('find by slug, get the id, then update', function() {
  let slug = 'tanya-dong';
  it('should return status ok 1, nModified 1, modified 1', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/question/'+slug)
      .end(function (err, res) {
        console.log(res.body._id);
        chai.request('http://localhost:3000')
          .put('/api/question/'+res.body._id)
          .send({
            title: 'Tanya Dong 123',
            content: 'Saya boleh tanya ga? 123',
            author: 'orang_tamvan',
            answers: [],
            up: [],
            down: [],
            // slug: 'tanya-dong-123',
            createdAt: new Date(),
            updatedAt: new Date()
          })
          .end(function (err, res){
            res.should.be.json;
            res.should.have.status(200);
            res.body.ok.should.equal(1);
            res.body.nModified.should.equal(1);
            res.body.n.should.equal(1);
            done();
          });

      })
  })
})

describe('find by slug, get the id, then delete', function() {
  let slug = 'tanya-dong-123';
  it('should return status ok 1, n 1', function(done) {
    chai.request('http://localhost:3000')
      .get('/api/question/'+slug)
      .end(function (err, res) {
        chai.request('http://localhost:3000')
          .delete('/api/question/'+res.body._id)
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
