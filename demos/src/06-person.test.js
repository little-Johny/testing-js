const Person = require('./06-person');

describe('Test for Person class', () => {
    let person;
    // Arrange
    beforeEach(() => {
        person = new Person('Johny', 30, 1.7);
    });

    test('should return down', () => {
        // AAA
        // Arrange / Given
        // Act / When
        // Assert / Then
        person.weight = 40;

        // Act
        const imc = person.calcIMC();
        // Assert
        expect(imc).toBe('down');
    });

    test('should return normal', () => {
        person.weight = 60;
        const imc = person.calcIMC();
        expect(imc).toBe('normal');
    });
});
