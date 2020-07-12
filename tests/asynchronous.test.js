//
// https://jestjs.io/docs/en/asynchronous
//

//
function fetchData(cb) {
    cb('peanut butter');
}

// Don't do this!
test('the data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});


test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });
  