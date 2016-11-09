var chai = require('chai')
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);


describe('Testing questions', function() {
  // testing question function
  describe('#addQuestion()', function() {

    it('testing insert data question to database', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .post('/api/questions')
      .send({ title: 'tutorial stackoverflow', content: 'stackoverflow is a good idea' })
      .end(function(err, res) {

        // expect(res).to.have.status(123);
        console.log(res.body);

        done();                               // <= Call done to signal callback end
      });
    }) ;

  }); // end testing question function

  // testing get all data questions
  describe('#getAllQuestion()', function() {

    it('testing get all data questions from database', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .get('/api/questions')
      .end(function(err, res) {
        // expect(res).to.have.status(123);
        console.log(res.body);

        done();                               // <= Call done to signal callback end
      });
    });
  }); // end testing get all data questions

  // testing delete data questions
  describe('#getAllQuestion()', function() {

    it('testing get all data questions from database', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .get('/api/questions')
      .send({ id : "5822ef1ef3e20d75cf3ac2e2" })
      .end(function(err, res) {
        // expect(res).to.have.status(123);
        console.log(res.body);

        done();                               // <= Call done to signal callback end
      });
    });
  }); // end testing delete data questions



});
