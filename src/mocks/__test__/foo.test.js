//
// Example 02 - Mock Implementations
//

// test.js
const foo = require('../foo');

jest.mock('../foo'); // this happens automatically with automocking

test('mock', () => {
    // const myMockFn = jest.fn(cb => cb(null, true));

    expect(foo()).toBe(undefined);

    // foo is a mock function
    foo.mockImplementation(() => 42);
    // foo();
    // > 42
    expect(foo()).toBe(42);

});