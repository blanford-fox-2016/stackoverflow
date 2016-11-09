const app = require('../../app')

//REQUIRE MODELS
const User = require('../../models/user')
const Question = require('../../models/question')

//REQUIRE CHAI AND MOCHA
const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

//START TESTING

//TESTING FOR USER
describe("Test for User", function () {
    //SET UP BEFORE TESTING USER
    beforeEach(function (done) {
        chai.request(app)
            .get('/api/user/seed')
            .end(function (err, res) {
                console.log("User seeded")
                done()
            })
    })

    afterEach(function (done) {
        chai.request(app)
            .delete('/api/user')
            .end(function (err, res) {
                console.log("All user deleted")
                done()
            })
    })

    describe("Test if get all users working", function () {

        it("Expect to return all list of users", function (done) {
            chai.request(app)
                .get('/api/user')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].name).to.equal('name xyz')
                    done()
                })
        })
    })

    describe("Test if register user working", function () {

        it("Expect to return user that has been created", function (done) {
            chai.request(app)
                .post('/api/user/register')
                .send({
                    name: 'name create',
                    username: 'usernamecreate',
                    password: 'passwordcreate',
                    email: 'create@gmail.com'
                })
                .end(function (err, res) {
                    User.findOne({
                        username: res.body.username
                    }, function (err, data) {
                        expect(res).to.have.status(200)
                        expect(res.body.userId).to.equal(data.userId)
                        expect(res.body.name).to.equal(data.name)
                        expect(res.body.username).to.equal(data.username)
                        expect(res.body.email).to.equal(data.email)
                        done()
                    })
                })
        })
    })

    describe("Test if delete user working", function () {

        it("Expect to return true if delete user working", function (done) {

            User.findOne({}, {}, { sort: { 'userId' : -1 } }, function (err, data) {
                chai.request(app)
                    .delete(`/api/user/${data.userId}`)
                    .end(function (err, res) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(data.name)
                        done()
                    })
            })
        })
    })

    describe("Test if update user working", function () {

        it("Expect to return user that has been updated", function (done) {

            let input = {
                name: 'name update',
                username: 'username update',
                password: 'passwordupdate',
                email: 'update@gmail.com'
            }

            User.findOne({}, {}, { sort: { 'userId' : -1 } }, function (err, data) {
                chai.request(app)
                    .put(`/api/user/${data.userId}`)
                    .send(input)
                    .end(function (err, res) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(input.name)
                        expect(res.body.username).to.equal(input.username)
                        expect(res.body.email).to.equal(input.email)
                        done()
                    })
            })
        })
    })
})

//TESTING FOR QUESTION
describe("Test for Question", function () {
//     //SET UP BEFORE TESTING QUESTION
    beforeEach(function (done) {
        chai.request(app)
            .get('api/question/seed')
            .end(function (err, res) {
                console.log("Question seeded")
                done()
            })
    })

    afterEach(function (done) {
        chai.request(app)
            .delete('api/question')
            .end(function (err, res) {
                console.log("All question deleted")
                done()
            })
    })

    describe("Test if get all question working", function () {

        it("Expect to return all list of question", function (done) {
            chai.request(app)
                .get('/api/question')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].title).to.equal('title a')
                    done()
                })
        })
    })

//     describe("Test if create question working", function () {
//
//         it("Expect to return question that has been created", function (done) {
//             chai.request(app)
//                 .post('/api/question')
//                 .send({
//                     questionId: 88,
//                     title: 'title create',
//                     content: 'content create',
//                     votes: [],
//                     answer: []
//                 })
//                 .end(function (err, res) {
//                     expect(res).to.have.status(200)
//                     expect(res.body[0].questionId).to.equal(88)
//                     expect(res.body[0].title).to.equal('title create')
//                     expect(res.body[0].content).to.equal('content create')
//                     done()
//                 })
//         })
//     })
//
//     describe("Test if delete question working", function () {
//
//         it("Expect to return true if delete question working", function (done) {
//             chai.request(app)
//                 .delete('/api/question/:questionId')
//                 .end(function (err, res) {
//                     expect(res).to.have.status(200)
//                     expect(res.body[0].name).to.equal('title a')
//                     done()
//                 })
//         })
//     })
//
//     describe("Test if update question working", function () {
//
//         it("Expect to return question that has been updated", function (done) {
//             chai.request(app)
//                 .put('/api/question/:questionId')
//                 .send({
//                     questionId: 88,
//                     title: 'title update',
//                     content: 'content update',
//                     votes: [],
//                     answer: []
//                 })
//                 .end(function (err, res) {
//                     expect(res).to.have.status(200)
//                     expect(res.body[0].questionId).to.equal(88)
//                     expect(res.body[0].title).to.equal('title update')
//                     expect(res.body[0].content).to.equal('content update')
//                     done()
//                 })
//         })
//     })
})

