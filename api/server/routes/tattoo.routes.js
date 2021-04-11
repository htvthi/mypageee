const express = require('express')
const router = express.Router()
const tC =   require('../db/controllers/tattoos.controller');
// Retrieve all
router.get('/t', tC.findAll);
// Create a new employee
router.post('/', tC.create);
// Retrieve a single pic with id
router.get('/:id', tC.findById);
// Update a pic with id
router.put('/:id', tC.update);
// Delete a pic with id
router.delete('/:id', tC.delete);

module.exports = router
