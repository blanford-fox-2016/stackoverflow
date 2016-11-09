'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const slug = require('slug');
chai.use(chaiHttp);
const should = chai.should();
const article = require('../models/articles');

describe('post new question', function() {
  it('should store a new question to the database, and return the data back', function(done) {
    chai.request('http://localhost:3000')
      .post('/api/question')
      .send({
        title: 'Tanya Dong',
        content: 'Saya boleh tanya ga?',
        author: 'orang_tamvan'
        answers: [],
        up: [],
        down: [],
        slug: slug(this.title).toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .end( function (err, res) {
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
