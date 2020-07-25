//
// https://jestjs.io/docs/en/next/mock-functions#mocking-modules
//
const axios = require('axios');

class Users {
    static all() {
        return axios.get('/users.json').then(resp => resp.data);
    }
}

module.exports = Users;