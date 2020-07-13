//
// https://jestjs.io/docs/en/next/mock-functions#custom-matchers
//

const mockFunc = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42');

const arg1 = 100;

describe("Custom Matchers", () => {

    test('The mock function was called at least once', () => {
        mockFunc()
        expect(mockFunc).toHaveBeenCalled();
    });

    test('The mock function was called at least once with the specified args', () => {

        mockFunc(arg1)
        expect(mockFunc).toHaveBeenCalledWith(arg1);
    });

    test('All calls and the name of the mock is written as a snapshot', () => {
        expect(mockFunc).toMatchSnapshot();
    });

    test('The mock function was called at least once', () => {
        expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
    });

    test('The mock function was called at least once with the specified args', () => {
        expect(mockFunc.mock.calls).toContainEqual([arg1]);
    });

    test('The last call to the mock function was called with the specified args', () => {
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1]);
    });

    test('The first arg of the last call to the mock function was `42', () => {
        // (note that there is no sugar helper for this specific of an assertion)        
        expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(100);
    });

    test('A snapshot will check that a mock was invoked the same number of times,', () => {
        // ...in the same order, with the same arguments.
        // It will also assert on the name        
        expect(mockFunc.mock.calls).toEqual([[], [100]]);
        expect(mockFunc.getMockName()).toBe('add42');
    });


});