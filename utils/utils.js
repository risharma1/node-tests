//single expression arrow function
module.exports.add = (a,b)=>a+b;
module.exports.square = (a)=>a*a;
module.exports.setName = (user, fullName) => {
  user.firstName= fullName.split(' ')[0];
  user.lastName= fullName.split(' ')[1];
  return user;
};
module.exports.asyncSquare = (a,callback)=>{
setTimeout(()=>{
    callback(a*a);
  },1000); //2000 is upper limit of test timed out in mocha as per the video tutorial
};
module.exports.asyncAdd = (a,b,callback)=>{
  setTimeout(()=>{
    callback(a+b);
  },1000); //2000 is upper limit of test timed out in mocha as per the video tutorial
};
