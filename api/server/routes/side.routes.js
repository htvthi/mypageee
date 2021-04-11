const express = require('express')
const router = express.Router()
const sC =   require('../db/controllers/sidebar.controller');
// Retrieve all
router.get('/', sC.findAll);
// Create a new
router.post('/', sC.create);
// Update a pic with id
router.put('/:id', sC.update);
// Delete a pic with id
router.delete('/:id', sC.delete);

module.exports = router
