const utils = require('./utils');
/**
mocha syntax for initializing a test
('description', function)
*/
it('should test addition of numbers',()=>{
  var res = utils.add(11,22);
  if(res!=33){
    throw new Error(`Expected: 33 Got: ${res}`);
  }
});

it('should test squaring of numbers',()=>{
  var res = utils.square(11);
  if(res!=121){
    throw new Error(`Expected: 121 Got: ${res}`);
  }
});
