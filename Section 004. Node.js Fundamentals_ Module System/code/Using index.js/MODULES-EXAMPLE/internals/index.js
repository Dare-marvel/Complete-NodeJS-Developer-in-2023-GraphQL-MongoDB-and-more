// Method 1

// const request = require('./request');
// const response = require('./response');

// module.exports = {
//     REQUEST_TIMEOUT : request.REQUEST_TIMEOUT,
//     send: request.send,
//     read: response.read,

// };

// Method 2 

module.exports = {
    ...require('./request'),
    ...require('./response'),
}