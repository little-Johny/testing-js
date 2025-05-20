const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for book endpoints', () => {
    let app = null;
    let server = null;
    let database = null;
    let mongoClient = null;

    beforeAll(async () => {
        app = createApp();
        server = app.listen(0); // Puerto dinámico
        mongoClient = new MongoClient(MONGO_URI);
        await mongoClient.connect();
        database = mongoClient.db(DB_NAME);
    });

    describe('Test for [GET] /api/v1/books', () => {
        test('should return books', async () => {
            // Arrange
            const seedData = await database.collection('books').insertMany([
                { name: 'Book 1', year: 1999, author: 'Johny' },
                { name: 'Book 2', year: 1989, author: 'Johnycito' },
            ]);

            // Act + Assert
            const response = await request(app)
                .get('/api/v1/books')
                .expect(200);

            expect(response.body.length).toEqual(seedData.insertedCount);
        });
    });

    afterAll(async () => {
        await database.dropDatabase();
        await mongoClient.close();// Cierra conexión a Mongo
        await server.close();// Cierra el servidor
    });
});
