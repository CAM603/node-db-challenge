const express = require('express');

const projectsRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());

server.use('/api', projectsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hello from the Node DB Sprint Challenge</h1>')
});

module.exports = server;