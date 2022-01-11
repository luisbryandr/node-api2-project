// implement your posts router here

const express = require('express');
const Posts = require('./posts-model');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET request')
})




module.exports = router;
