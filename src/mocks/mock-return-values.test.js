//
// https://jestjs.io/docs/en/next/mock-functions#mock-return-values
//

test('example 1', () => {
    const myMock = jest.fn();
    
    // console.log(myMock());
    // > undefined
    expect(myMock()).toBeUndefined();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    
    // console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);

});

test('example 2', () => {
    
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    
    const result = [11, 12].filter(num => filterTestFn(num));
    
    // console.log(result);
    // > [11]
    // https://stackoverflow.com/questions/56839801/jest-js-error-received-serializes-to-the-same-string
    expect(result).not.toBe([11]);
    expect(result).toEqual([11]);
    expect(result).toStrictEqual([11]);

    // console.log(filterTestFn.mock.calls);
    // > [ [11], [12] ]
    expect(filterTestFn.mock.calls).toEqual([ [11], [12] ]);

});