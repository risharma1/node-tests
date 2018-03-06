const request= require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server',()=>{
  describe('GET /',()=>{
    //using mocha and its async testmechanism 'done'
    //passing in the actual express object
    //chained calls starting with get request with URL
    it('should return hello world response',(done)=>{
      request(app)
      .get('/')
      .expect(404)//test for status code
      .expect({
        error: 'Page not found!',
        type: 'help page'
      })//test for body
      .expect((res)=>{
        //for more complex and flexible operations and validations on returned response object
        expect(res.body).toInclude({type:'help page'});//expect validation
      })
      .end(done);
      /**
      a callback method to be fired when supertest has done its job,
      here the control will be transferred to mocha
      */
    });
  });
  describe('GET /Users',()=>{
    it('should return array of users',(done)=>{
      //ROUTE 2
      request(app)
      .get('/users')
      .expect(200)//test for status code
      .expect((res)=>{
        //expecting an arrays of users in response object
        expect(res.body).toInclude({name:'eminem',age:40});//expect validation
      })
      .end(done);
    });
  });

});
