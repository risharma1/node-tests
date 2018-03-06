const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
//gives getter and setter to module for runtime replacement of objects

describe('App',()=>{
  //dummy object to replace original db object in app
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('should call the db saveUser correctly',()=>{
    var email = '123@abc.com';
    var password = 'secret';
    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    });
  });
});
