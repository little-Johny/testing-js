const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello World, I`m the api of testing course!');
    });

    routerApi(app);
    return app;
};

module.exports = createApp;
