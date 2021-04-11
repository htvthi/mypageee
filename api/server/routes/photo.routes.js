const express = require('express')
const router = express.Router()
const pC =   require('../db/controllers/photos.controller');
// Retrieve all
router.get('/', pC.findAll);
// Create a new
router.post('/', pC.create);
// Retrieve a single pic with id
router.get('/:id', pC.findById);
// Update a pic with id
router.put('/:id', pC.update);
// Delete a pic with id
router.delete('/:id', pC.delete);

module.exports = router
