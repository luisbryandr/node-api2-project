// implement your server here
// require your posts router and connect it here
const express = require('express');
const postRouter = require('../api/posts/posts-router')

const server = express();

server.use(express.json());

server.use('/api/posts', postRouter);

server.use('*', (req, res) => {
    res.send(`
    <h1>Posts DataBase API</h1>
    <p>Welcome to the default page of API </p>`)
})

module.exports = server;