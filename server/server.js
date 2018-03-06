const express = require('express');

var app = express();

app.get('/',(req, res)=>{
  //res.status(200).send('hello world!');
  res.status(404).send({
    error: 'Page not found!',
    type: 'help page'
  });
});
app.get('/users',(req, res)=>{
  res.send([
    {name:'timbaland', age:10},
    {name:'eminem', age:40},
    {name:'jon', age:30},
    {name:'mathew', age:25},
    {name:'nickel', age:12}
  ]);
});

app.listen(3000,()=>{
  console.log('Server started at port 3000.');
});
module.exports.app = app;
