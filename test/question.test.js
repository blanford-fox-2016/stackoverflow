'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const expect = chai.expect
const urlApi = 'http://localhost:3000/api'
chai.use(chaiHttp);


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
                console.log(res.body);
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


describe('Route update article', function() {
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
