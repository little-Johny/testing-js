const request = require('supertest');

const mockGetAll = jest.fn();
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
})));

describe('Test for book endpoints', () => {
    let app = null;
    let server = null;

    beforeAll(() => {
        app = createApp();
        server = app.listen(3001);
    });

    describe('Test for [GET] /api/v1/books', () => {
        test('should return books', () => {
            // Arrange
            const fakeBooks = generateManyBooks(3);
            mockGetAll.mockResolvedValue(fakeBooks);

            // Act
            return request(app)
                .get('/api/v1/books').expect(200)
                .then(({ body }) => {
                    console.log(body);
                    // Assert
                    expect(body.length).toEqual(3);
                });
        });
    });

    afterAll(async () => {
        await server.close();
    });
});
