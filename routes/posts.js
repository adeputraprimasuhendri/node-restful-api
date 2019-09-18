const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET DATA
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});

//CREATE DATA
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.json({ message: error });
    }
});

//GET DATA DETAIL
router.get('/:postID', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postID)
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});

//DELETE DATA
router.delete('/:postID', async (req, res) => {
    try {
        const postRemove = await Post.remove({ _id: req.params.postID });
        res.json(postRemove);
    } catch (error) {
        res.json({ message: error });
    }
});

//UPDATE DATA
router.patch('/:postID', async (req, res) => {
    try {
        const postUpdate = await Post.updateOne({ _id: req.params.postID }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        });
        res.json(postUpdate);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;