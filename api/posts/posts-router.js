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

router.post('/', (req,res) => {
    const { title , contents } = req.body;
    if(!title || !contents ) {
        res.status(400).json({ message: "Please provide title and contents for the post" })
    }else {
        Posts.insert({title, contents})
            .then(({id}) => {
                return Posts.findById(id)
            }).then(fullPost =>   {
                res.status(201).json(fullPost) 
            }).catch(err => {
                res.status(500).json({
                    message: "There was an error while saving the post to the database",
                    error: err.message
                })
            })
    }

})




module.exports = router;
