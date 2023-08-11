const request = require('./request');

request.send = function(){
  console.log('custom send function');
}
