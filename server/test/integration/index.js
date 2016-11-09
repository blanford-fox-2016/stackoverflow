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
            .get('api/user/seed')
            .end(function (err, res) {
                console.log("User seeded")
                done()
            })
    })

    afterEach(function (done) {
        chai.request(app)
            .delete('api/user')
            .end(function (err, res) {
                console.log("All user deleted")
                done()
            })
    })

    describe("Test if get all users working", function () {
        this.timeout(10000)

        it("Expect to return all list of users", function (done) {
            chai.request(app)
                .get('/api/user')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].name).to.equal('name a')
                    done()
                })
        })
    })

    describe("Test if register user working", function () {
        this.timeout(10000)

        it("Expect to return user that has been created", function (done) {
            chai.request(app)
                .post('/api/register')
                .send({
                    userId: 99,
                    name: 'name create',
                    username: 'username create',
                    password: 'passwordcreate',
                    email: 'create@gmail.com'
                })
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].userId).to.equal(99)
                    expect(res.body[0].name).to.equal('name create')
                    expect(res.body[0].username).to.equal('name username')
                    expect(res.body[0].email).to.equal('name email')
                    done()
                })
        })
    })

    describe("Test if delete user working", function () {
        this.timeout(10000)

        it("Expect to return true if delete user working", function (done) {
            chai.request(app)
                .delete('/api/user/:userId')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].name).to.equal('name a')
                    done()
                })
        })
    })

    describe("Test if update user working", function () {
        this.timeout(10000)

        it("Expect to return user that has been updated", function (done) {
            chai.request(app)
                .put('/api/user/:userId')
                .send({
                    userId: 99,
                    name: 'name update',
                    username: 'username update',
                    password: 'passwordupdate',
                    email: 'update@gmail.com'
                })
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].userId).to.equal(99)
                    expect(res.body[0].name).to.equal('name update')
                    expect(res.body[0].username).to.equal('name update')
                    expect(res.body[0].email).to.equal('name update')
                    done()
                })
        })
    })
})

//TESTIN FOR QUESTION
describe("Test for Question", function () {
    //SET UP BEFORE TESTING QUESTION
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
        this.timeout(10000)

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

    describe("Test if create question working", function () {
        this.timeout(10000)

        it("Expect to return question that has been created", function (done) {
            chai.request(app)
                .post('/api/question')
                .send({
                    questionId: 88,
                    title: 'title create',
                    content: 'content create',
                    votes: [],
                    answer: []
                })
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].questionId).to.equal(88)
                    expect(res.body[0].title).to.equal('title create')
                    expect(res.body[0].content).to.equal('content create')
                    done()
                })
        })
    })

    describe("Test if delete question working", function () {
        this.timeout(10000)

        it("Expect to return true if delete question working", function (done) {
            chai.request(app)
                .delete('/api/question/:questionId')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].name).to.equal('title a')
                    done()
                })
        })
    })

    describe("Test if update question working", function () {
        this.timeout(10000)

        it("Expect to return question that has been updated", function (done) {
            chai.request(app)
                .put('/api/question/:questionId')
                .send({
                    questionId: 88,
                    title: 'title update',
                    content: 'content update',
                    votes: [],
                    answer: []
                })
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].questionId).to.equal(88)
                    expect(res.body[0].title).to.equal('title update')
                    expect(res.body[0].content).to.equal('content update')
                    done()
                })
        })
    })
})