var express = require('express');
var router = express.Router();
var
var wB = require('../whitebird');
var User = ('../models/user');

router.post('/create', function(req, res, next) {

  User.createAsync({ name: req.body.username, password: req.body.password, provider: 'local' })
    .then( user => res.send({id: user.id, name: user.name}))
    .catch( err => next(err) );
})

module.exports = router;
