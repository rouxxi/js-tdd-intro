//import assert
const assert = require('assert');

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');
assert.strictEqual(capitalizeFirstLetters(''), '');