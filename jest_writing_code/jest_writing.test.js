// const {default :TestRunner} = require('jest-runner');
const addfive = require('./jest');

test('return the number plus 5',() => {
    expect(addfive(1)).toBe(6);
})
