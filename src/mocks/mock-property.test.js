//
// https://jestjs.io/docs/en/mock-functions#mock-property
//

test('mock property', () => {
    const myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();
    
    //console.log(myMock.mock.instances);
    // > [ <a>, <b> ]

    expect(myMock.mock.instances.length).toBe(2);
    expect(myMock.mock.instances[0]).toBeInstanceOf(myMock); // constructor: mockConstructor
    expect(myMock.mock.instances[1]).toBeInstanceOf(Object); // constructor: Object

});
