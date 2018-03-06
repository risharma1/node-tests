//a dummy async db method being calle dform module to be tested
module.exports.saveUser = (user)=>{
  console.log(`User with email: ${user.email} registered successfully.`);
};
