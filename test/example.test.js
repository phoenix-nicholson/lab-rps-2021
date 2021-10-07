// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('scissor', 'paper');
    expect.equal(actual, expected);
});
test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});
test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});
test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);
});
test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});
test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});
test('testing if user draws', (expect) => {
    const expected = 'ties';
    const actual = didUserWin('paper', 'paper');
    expect.equal(actual, expected);
});
test('testing if user draws', (expect) => {
    const expected = 'ties';
    const actual = didUserWin('scissors', 'scissors');
    expect.equal(actual, expected);
});
test('testing if user draws', (expect) => {
    const expected = 'ties';
    const actual = didUserWin('paper', 'paper');
    expect.equal(actual, expected);
});
