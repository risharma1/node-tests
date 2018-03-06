const utils = require('./utils');

const expect = require('expect');

//to define a block of test functions to be grouped for easy readability of reports output

describe('Utils',()=>{
  describe('#add',()=>{
    /**
    mocha syntax for initializing a test
    ('description', function)
    */
    it('should test addition of numbers',()=>{
      var res = utils.add(11,22);
      expect(res).toBe(33).toBeA('number');
    });
    /**
    The done parameter to be included in declaration when async calls are made.
    For such calls test reports are sent only when done() is called.
    */
    it('should test asynchronous addition',(done)=>{
      utils.asyncAdd(3,4,(res)=>{
        //expect(res).toBe(8);//Fails
        expect(res).toBe(7);//passes
        done();//if commented a timeout will be sent afetr 2000ms
      })
    });
  });
  describe('#square',()=>{
    it('should test squaring of numbers',()=>{
      var res = utils.square(11);
      expect(res).toBe(121).toBeA('number');
    });
    it('should test asynchronous squaring',(done)=>{
      utils.asyncSquare(3,(res)=>{
        //expect(res).toBe(8);//Fails
        expect(res).toBe(9);//passes
        done();//if commented a timeout will be sent afetr 2000ms
      })
    });
  });
});



it('should test that the firstName and lastName properties have been set for user object',()=>{
  var fullName = 'Rishabh Sharma';
  var user = utils.setName({
    age: 25,
    location: 'Faridabad'
  }, fullName);

  expect(user).toBeA('object').toInclude({
    firstName:'Rishabh',
    lastName:'Sharma'
  });

});

it('should test some other validations',()=>{
  expect({
    name:'rishabh',
    age:25,
    sex:'male'
  }).toInclude({name:'rishabh',age:25});
});
