const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/:id', postController.getPostDetail);
router.post('/:id/comment', postController.addComment);
router.get('/:id/delete', postController.deletePost);
router.get('/:id/edit', postController.getEditPost);
router.post('/:id/edit', postController.editPost);

module.exports = router;
