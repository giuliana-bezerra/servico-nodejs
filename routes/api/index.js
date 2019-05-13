const usuario = require('./usuario');
const router = require('express').Router();

router.use('/usuario', usuario);

module.exports = router;