require('dotenv').config();

const apiClient = require('../src/index')
const assert = require('assert')
const expect = require('chai').expect

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

apiClient.protocol = API_PROTOCOL;
apiClient.host = API_HOST;
apiClient.port = API_PORT;

describe('Testing API client', () => {

    const eventA = 68
    const eventB = 184

    it('should recieve events data', done => {
        apiClient.getEvents()
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                done()
            })
            .catch(done)
    })

    it('should recieve selected event 68', done => {
        apiClient.getEvent(eventA)
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                expect(res.data.event.id).to.be.equal('68')
                done()
            })
            .catch(done)
    })

    it('should recieve selected event 184', done => {
        apiClient.getEvent(eventB)
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')
                expect(res.data.event.id).to.be.equal('184')
                done()
            })
            .catch(done)
    })

})