const concat = require('./concatenation_function');

test('Normal Words', () => {
  expect(concat("Hello", "Goodbye")).toBe("HelloGoodbye");
});

test('Giberish', () => {
  expect(concat("fjlsnjalfna","fnoaowneoe")).toBe("fjlsnjalfnafnoaowneoe");
});
