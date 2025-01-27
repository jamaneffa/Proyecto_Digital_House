const express = require('express');
const router = express.Router();

// Controller
const apiProductsController = require('../../controllers/api/productsController');

// Routes
router.get('/', apiProductsController.index);
router.get('/categories', apiProductsController.category);
router.get("/lastproduct", apiProductsController.lastProduct);
router.get('/:id', apiProductsController.detail);

module.exports = router;