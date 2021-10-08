// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('Scissors', 'Paper');
    expect.equal(actual, expected);
});

test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('Paper', 'Rock');
    expect.equal(actual, expected);
});

test('testing if user wins', (expect) => {
    const expected = true;
    const actual = didUserWin('Rock', 'Scissors');
    expect.equal(actual, expected);
});

test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('Scissors', 'Rock');
    expect.equal(actual, expected);
});

test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('Rock', 'Paper');
    expect.equal(actual, expected);
});

test('testing if user looses', (expect) => {
    const expected = false;
    const actual = didUserWin('Paper', 'Scissors');
    expect.equal(actual, expected);
});

test('testing if user draws', (expect) => {
    const expected = 'Tie!';
    const actual = didUserWin('Paper', 'Paper');
    expect.equal(actual, expected);
});

test('testing if user draws', (expect) => {
    const expected = 'Tie!';
    const actual = didUserWin('Scissors', 'Scissors');
    expect.equal(actual, expected);
});

test('testing if user draws', (expect) => {
    const expected = 'Tie!';
    const actual = didUserWin('Rock', 'Rock');
    expect.equal(actual, expected);
});
