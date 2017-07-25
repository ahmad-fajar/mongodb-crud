'use strict'

const router = require('express').Router();
const booksCtrl = require('../controller/booksCtrl');

// create
router.post('/', booksCtrl.insert)

// read
router.get('/', booksCtrl.findAll)
router.get('/:id', booksCtrl.findById)

// update
router.put('/:id', booksCtrl.update)

// delete
router.delete('/:id', booksCtrl.delete)


module.exports = router;