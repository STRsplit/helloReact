var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(4568, function(){
  console.log('Express server is up on 4568');
})