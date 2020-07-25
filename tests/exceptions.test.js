//
// https://jestjs.io/docs/en/using-matchers#exceptions
//
const verifyRequest = require('../src/exceptions');

function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow("you are using the wrong JDK");
    expect(compileAndroidCode).toThrow(/JDK/);
});

test("foo", () => {

    expect(() => verifyRequest(undefined)).toThrow();

    const request = {}
    expect(() => verifyRequest(request)).toThrow();

    request.location = true;
    expect(() => verifyRequest(request)).toThrow();

    request.phone = undefined;
    expect(() => verifyRequest(request)).toThrow();

    request.phone = false;
    expect(() => verifyRequest(request)).toThrow();

    request.phone = "";
    expect(() => verifyRequest(request)).toThrow();

    request.location = true;
    request.phone = true;
    expect(verifyRequest(request)).toBe(true);

});



