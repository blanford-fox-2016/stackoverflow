'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect
const urlApi = 'http://localhost:3000/api'
chai.use(chaiHttp);

// CRUD ROUTE TEST

// const userSchema = new mongoose.Schema({
//     userId: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(email) {
//                 return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
//             },
//             message: 'Wrong email format'
//         }
//     },
//     question: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'question'
//     }],
//     answer: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'answer'
//     }]
// }, {
//     timestamps: true
// })



// router.post('/register', user_controller.registerProcess)
// router.post('/login', passport.authenticate('local'), user_controller.loginProcess)
//
// router.get('/user/seed', user_controller.seedUser)
// router.get('/user', user_controller.getAllUser)
// router.get('/user/:id', user_controller.getUser)
// router.put('/user/:id', user_controller.updateUser)
// router.delete('/user/:id', user_controller.removeUser)
// router.delete('/user', user_controller.removeAllUser)


// REGISTER NEW USER
describe('Route post Register new User', function() {
    let newName
    let newUsername
    let newPassword
    it('expect to return new User Credentials', function(done) {
        chai.request(urlApi)
            .post('/register')
            .send({
                name: newName,
                username: newUsername,
                password: newPassword,
                email: newEmail
            })
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body[0].name).to.be.equal(newName)
                expect(res.body[0].username).to.be.equal(newUsername)
                expect(res.body[0].email).to.be.equal(newEmail)
                done()
            })
    })
})



describe.skip('Old Route Register User', function() {
    it('expect to return new User Credentials', function(done) {
            chai.request(urlApi)
                .get('/article')
                .end(function(err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(res.body[0].content).to.be.equal("nodejs mastery")
                    done()
                }) // chai
        }) // it
})


describe.skip('Route get article', function() {
    it('expect to return list of articles', function(done) {
            chai.request(urlApi)
                .get('/article')
                .end(function(err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(res.body[0].content).to.be.equal("nodejs mastery")
                    done()
                }) // chai
        }) // it
})

describe.skip('Route post article', function() {
    let newTitle = 'express mastery'
    let newContent = 'express mastery adalah .....'
    it('expect to return json of new user and status 200', function(done) {
        chai.request(urlApi)
            .post('/article')
            .send({
                title: newTitle,
                content: newContent
            })
            .end(function(req, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.title).to.be.equal(newTitle)
                done()
            })
    })
})

describe.skip('Route put article', function() {
        let putId = `58204381145c6e5893590e77`
        let newTitle = `NodeJs Mastery`
        let newContent = `NodeJs adalah .....`
        it('expect to return json of ok:1 and status 200', function(done) {
            chai.request(urlApi)
                .put(`/article/${putId}`)
                .send({
                    title: newTitle,
                    content: newContent
                })
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body.ok).to.be.equal(1)
                    done()
                })
        })
    })
    //
describe.skip('Route delete article', function() {
    let delId = `5820492f467df265eb89c878`
    it('expect to return json of n:1 and status 200', function(done) {
        chai.request(urlApi)
            .delete(`/article/${delId}`)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.n).to.be.equal(1)
                done()
            })
    })
})


describe.skip('Route Login Process', function() {
    let newUsername = `aaaa`
    let newPassword = `aaaa`
    it('expect username from login = username from database', function(done) {
        chai.request(urlApi)
            .post('/login')
            .send({
                username: newUsername,
                password: newPassword
            })
            .end(function(req, res) {
                expect(res.body.username).to.be.equal(newUsername)
                done()
            })
    })
})
