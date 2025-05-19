const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
})));

describe('Test for BooksService', () => {
    let service;
    beforeEach(() => {
        service = new BooksService();
        jest.clearAllMocks();
    });

    describe('test for getBooks', () => {
        test('should return a list book', async () => {
            // Arrange
            const fakeBooks = generateManyBooks(20);
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            const books = await service.getBooks({});
            console.log(books);
            // Assert
            expect(books.length).toEqual(20);
            expect(mockGetAll).toHaveBeenCalled();
            expect(mockGetAll).toHaveBeenCalledWith('books', {}); // collection, query
            expect(mockGetAll).toHaveBeenCalledTimes(1);
        });

        test('should return a book by name', async () => {
            // Arrange
            const fakeBooks = generateManyBooks(5);
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            const books = await service.getBooks({});
            console.log('Libros', books);
            // Assert
            expect(books[0].name).toEqual(fakeBooks[0].name);
        });
    });
});
