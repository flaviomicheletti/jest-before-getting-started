//
// https://jestjs.io/docs/en/tutorial-async
//
const request = require('./request');
// const request = require('../tests/__mocks__/request');

module.exports = {
    getUserName: function (userID) {
        // return request;
        return request('/users/' + userID).then(user => user.name);
    }
}
