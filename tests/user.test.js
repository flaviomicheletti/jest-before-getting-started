//
// https://jestjs.io/docs/en/tutorial-async
//
jest.mock('../src/request');

const user = require('../src/user');

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark')
    )
});

it('works with resolves', () => {
    expect.assertions(1);
    return expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// async/await can be used.
it('works with async/await', async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toEqual('Mark');
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(user.getUserName(5)).resolves.toEqual('Paul');
});


// Testing for async errors using Promise.catch.
it('tests error with promises', () => {
    expect.assertions(1);
    return user.getUserName(2).catch(e =>
        expect(e).toEqual({
            error: 'User with 2 not found.',
        }),
    );
});

// Or using async/await.
it('tests error with async/await', async () => {
    expect.assertions(1);
    try {
        await user.getUserName(1);
    } catch (e) {
        expect(e).toEqual({
            error: 'User with 1 not found.',
        });
    }
});
