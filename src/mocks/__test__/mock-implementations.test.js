//
// https://jestjs.io/docs/en/next/mock-functions#mock-implementations
//

describe("Mock Implementations", () => {

    test('example 01', () => {
        const myMockFn = jest.fn(cb => cb(null, true));

        myMockFn((err, val) => {
            // console.log(val);
            // > true
            expect(val).toBe(true);
        })

    });

    //
    // example 2 see foo.test.js
    //

    test('example 03', () => {
        const myMockFn = jest.fn()
            .mockImplementationOnce(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, false));

        myMockFn((err, val) => expect(val).toBe(true));
        // > true

        myMockFn((err, val) => expect(val).toBe(false));
        // > false
    });

    test('example 04', () => {
        const myMockFn = jest
            .fn(() => 'default')
            .mockImplementationOnce(() => 'first call')
            .mockImplementationOnce(() => 'second call');

        //console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
        // > 'first call', 'second call', 'default', 'default'

        expect(myMockFn()).toBe("first call");
        expect(myMockFn()).toBe("second call");
        expect(myMockFn()).toBe("default");
        expect(myMockFn()).toBe("default");
    });

    test('example 05', () => {

        const myObj = {
            myMethod: jest.fn().mockReturnThis(),
        };

        // is the same as

        const otherObj = {
            myMethod: jest.fn(function () {
                return this;
            }),
        };

        // TODO: serializes to the same string
        // expect(myObj).toMatchObject(otherObj);
    });


});
