const Post = require('../models/Post');

const posts = [];

// Hiển thị danh sách bài viết
exports.getPosts = (req, res) => {
  res.render('index', { posts });
};

// Hiển thị trang tạo bài viết
exports.getCreatePost = (req, res) => {
  res.render('create-post');
};

// Xử lý tạo bài viết
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const postId = posts.length + 1;
  const post = new Post(postId, title, content);
  posts.push(post);
  res.redirect('/');
};

// Hiển thị chi tiết bài viết và các comments
exports.getPostDetail = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  res.render('post', { post });
};

// Xử lý thêm comment vào bài viết
exports.addComment = (req, res) => {
  const postId = parseInt(req.params.id);
  const { comment } = req.body;
  const post = posts.find((p) => p.id === postId);
  post.comments.push(comment);
  res.redirect(`/post/${postId}`);
};

// Xóa bài viết
exports.deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  res.redirect('/');
};

// Hiển thị trang sửa bài viết
exports.getEditPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  res.render('edit-post', { post });
};

// Xử lý sửa bài viết
exports.editPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.title = title;
    post.content = content;
  }
  res.redirect('/');
};
