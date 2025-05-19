const BooksService = require('./books.service');

const fakeBooks = [
    {
        _id: 1,
        name: 'Harry Potter',
    },
    {
        _id: 2,
        name: 'El club de las 5 AM',
    },
];

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
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            const books = await service.getBooks({});
            console.log(books);
            // Assert
            expect(books.length).toEqual(2);
            expect(mockGetAll).toHaveBeenCalled();
            expect(mockGetAll).toHaveBeenCalledWith('books', {}); // collection, query
            expect(mockGetAll).toHaveBeenCalledTimes(1);
        });
    });
});
