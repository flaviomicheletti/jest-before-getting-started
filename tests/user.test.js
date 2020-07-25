//
// https://jestjs.io/docs/en/tutorial-async
//
jest.mock('../src/request');

const user = require('../src/user');

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data =>
        // console.log(data)
        expect(data).toEqual('Mark')
    )
});
