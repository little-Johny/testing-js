// marchers o asserts
test('test Object ', () => {
    const data = { name: 'Johny' };
    data.lastname = 'Molano';
    expect(data).toEqual({ name: 'Johny', lastname: 'Molano' });
});

test('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined(); // undefined es diferente a null asi que esta prueba pasara
    expect(data).not.toBeUndefined(); // se puede usar la negacion
});

test('booleans', () => {
    expect(true).toEqual(true);
    expect(false).toEqual(false);

    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(false).toBeFalsy();
});

test('strings', () => {
    expect('Stitch').toMatch(/titc/); // para saber si el string contiene la palabra dentor de toMatch
});

test('list / arrays', () => {
    const numbers = [1, 2, 3, 4];
    expect(numbers).toContain(3);
});
