'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const expect = chai.expect
const urlApi = 'http://localhost:3000/api'
chai.use(chaiHttp);

const global_id = 12

describe('Route Seeding Question', function() {
    it('expect to return question details', function(done) {

        let newAuthor = faker.name.firstName()
        let newTitle = faker.internet.domainName()
        let newContent = `${faker.lorem.sentences()} ???`

        chai.request(urlApi)
            .post('/question')
            .send({
                author: newAuthor,
                title: newTitle,
                content: newContent
            })
            .end(function(req, res) {
                expect(res.body.author).to.be.equal(newAuthor)
                expect(res.body.title).to.be.equal(newTitle)
                expect(res.body.content).to.be.equal(newContent)
                expect(res.body.message).to.be.equal(`New Question has been made by ${newAuthor}`)
                done()
            })
    })
})



describe('Route get Question', function() {
    it('expect to return list of Question', function(done) {
            chai.request(urlApi)
                .get('/question')
                .end(function(err, res) {
                    expect(res.body.message).to.be.equal(`This is all list of question`)
                    done()
                }) // chai
        }) // it
})


describe('Route update Question', function() {
        let putId = 15
        let newAuthor = faker.name.firstName()
        let newTitle = faker.internet.domainName()
        let newContent = `${faker.lorem.sentences()} ???`
        it('expect to return new updated Question', function(done) {
            chai.request(urlApi)
                .put(`/question/${putId}`)
                .send({
                    author: newAuthor,
                    title: newTitle,
                    content: newContent
                })
                .end(function(err, res) {
                    expect(res.body.author).to.be.equal(newAuthor)
                    expect(res.body.title).to.be.equal(newTitle)
                    expect(res.body.content).to.be.equal(newContent)
                    expect(res.body.message).to.be.equal(`Question title updated to ${newTitle}`)
                    done()
                })
        })
    })
    //
describe('Route delete article', function() {
    let delId = 15
    it('expect to return delete message', function(done) {
        chai.request(urlApi)
            .delete(`/question/${delId}`)
            .end(function(err, res) {
                expect(res.body.message).to.be.equal(`Question has been deleted`)
                done()
            })
    })
})
