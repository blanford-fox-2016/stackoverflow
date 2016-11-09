var chai = require('chai')
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);


describe('Testing users', function() {

  /* testing get all users */
  describe('#getAllUsers()', function() {

    it('testing get all data user from database', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .get('/api/users')
      .end(function(err, res) {
        
        // expect(res).to.have.status(123);
        console.log(res.body);

        done(); // <= Call done to signal callback end
      });
    });
  }); // end testing get all data questions

  /* testing create new users function */
  describe('#addNewUser()', function() {

    it('testing insert data question to database', function(done) { // <= Pass in done callback
      chai.request('http://localhost:3000')
      .post('/api/users')
      .send({ username: "ananda 8", password : "admin", email: "admin@gmail.com", address: "jakarta utara" })
      .end(function(err, res) {

        // expect(res).to.have.status(123);
        console.log(res.body);

        done(); // <= Call done to signal callback end
      });
    }) ;

  }); // end add new user

  /*  */

}); // end of describe
