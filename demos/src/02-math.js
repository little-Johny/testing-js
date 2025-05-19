/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-continue */
function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function findThePrime(array) {
    const primeNumbers = [];

    for (const number of array) {
        if (number <= 1) continue;
        if (typeof number !== 'number' || isNaN(number)) continue;

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(number);
        }
    }

    return primeNumbers;
}

module.exports = {
    sum, multiply, divide, findThePrime,
};
