require('dotenv').config();

const api_client = require('../src/index')
const assert = require('assert')
const expect = require('chai').expect

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

api_client.protocol = API_PROTOCOL;
api_client.host = API_HOST;
api_client.port = API_PORT;

describe('Testing API client', () => {

    const eventA = 68
    const eventB = 184

    it('should recieve events data', done => {
        api_client.getEvents()
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                done()
            })
            .catch(done)
    })

    it('should recieve selected event 68', done => {
        api_client.getEvent(eventA)
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                expect(res.data.event.id).to.be.equal('68')
                done()
            })
            .catch(done)
    })

    it('should recieve selected event 184', done => {
        api_client.getEvent(eventB)
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                expect(res.data.event.id).to.be.equal('184')
                done()
            })
            .catch(done)
    })

})