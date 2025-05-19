const {
    sum, multiply, divide, findThePrime,
} = require('./02-math');

test('add 1 + 3 should be 4', () => {
    const rta = sum(1, 3);
    expect(rta).toBe(4);
});

test('9 x 2 should be 18', () => {
    const rta = multiply(9, 2);
    expect(rta).toBe(18);
});

test('12 / 3 should be 4', () => {
    const rta = divide(12, 3);
    expect(rta).toBe(4);

    // Podemos tener varios escenarios de prueba en nuestros test
    const rta2 = divide(5, 2);
    expect(rta2).toBe(2.5);
});

test('can`t divide by 0', () => {
    const rta = divide(10, 0);
    expect(rta).toBeNull();
});

test('Should return prime numbers from the array', () => {
    const rta = findThePrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(rta).toEqual([2, 3, 5, 7]);
});

test('Can`t use the letters', () => {
    const rta = findThePrime([2, 's', 7, 'w']);
    expect(rta).toEqual([2, 7]);
});
