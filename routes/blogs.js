var express = require('express');
var router = express.Router();
var wB = require('../whitebird');
var Blog = wB.promisifyAll(require('../models/blog'));

router.get('/', function(req, res, next) {
  Blog.allAsync()
    .then(function(blogs) {
      res.send({data: blogs })
    })
    .catch(function(err) {
      next(err);
    })
});

router.post('/create', function(req, res, next) {
  var blog = {
    title: req.body.title,
    content: req.body.content
  };

  Blog.createAsync(blog)
    .then(function(blog) {
      res.send({data: blog})
    })
    .catch(function(err) {
      next(err);
    })
});

router.get('/:id', function (req, res, next) {
  Blog.getAsync({id: req.params.id})
    .then(function(blog) {
      res.send({data: blog});
    })
    .catch(function(err) {
      next(err);
    });
});

module.exports = router;
