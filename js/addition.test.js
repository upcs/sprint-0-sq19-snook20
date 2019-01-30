//unit test help came from https://jestjs.io/docs/en/getting-started.html

const sum = require('./functions');

test('adds 0 + -22 to equal -22', () => {
  expect(sum(0, -22)).toBe(-22);
});

test('adds -77 + 96 to equal 19', () => {
  expect(sum(-77, 96)).toBe(19);
});
