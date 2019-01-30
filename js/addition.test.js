//Riley Snook
//1-29-19

//unit test help came from https://jestjs.io/docs/en/getting-started.html

const sum = require('./functions');

test('adds 4 + 2 to equal 6', () => {
  expect(sum(4, 2)).toBe(3);
});
