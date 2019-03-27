'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
    let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
}
return words.join(' ').trim();
};

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("str test"), "Str Test");
assert.strictEqual(jadenCase("hello world"), "Hello World");
assert.strictEqual(jadenCase("seb"), "Seb");
// End of tests */
