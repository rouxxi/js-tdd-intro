const capitalizeFirstLetters = (input) => {
    if (input.length > 0 || input === null) {
        const words = input.split(' ');
        const upper = words.map((word) => word.replace(word[0], word[0].toUpperCase()));
        const result = upper.join(' ');
        return result;
    } else {
        return ''
    }
}

//import assert
const assert = require('assert');

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');
assert.strictEqual(capitalizeFirstLetters(''), '');