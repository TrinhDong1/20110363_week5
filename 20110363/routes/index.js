const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getPosts);
router.get('/create', postController.getCreatePost);
router.post('/create', postController.createPost);

module.exports = router;
