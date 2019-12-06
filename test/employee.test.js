let mongoose = require("mongoose");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server').app;
let should = chai.should();


chai.use(chaiHttp);

describe('Employees', () => {
    it('should return all employees', done => {
        chai.request(server)
            .get('/emp')
            .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBob29sYS5jb20iLCJpYXQiOjE1NzUzNTk0MTgsImV4cCI6MTYwNjg5NTQxOH0.2-gQ08gvUQvwV2odCWb2ds6Se7VAYj1qVioeqA5-a8I')
            .then(data => {
                data.should.be.a('array');
            });
    });
});