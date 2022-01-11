const express = require('express');
const router = express.Router();
const Posts = require('./posts-model');

router.get('/', (req, res) => {
    Posts
        .find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    message: "The posts information could not be retrieved",
                    error: err.message
                })
        })
})

router.get('/:id', (req, res) => {
    Posts
        .findById(req.params.id)
        .then(post => {
            if (!post) {
                res
                    .status(404)
                    .json({ message: "The post with the specified ID does not exist" })
            } else {
                res.json(post)
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    message: "The post information could not be retrieved",
                    error: err.message
                })
        })
})





module.exports = router;
