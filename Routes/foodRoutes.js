const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController.js');

router.post('/add', foodController.addFoodOrder);
router.get('/', foodController.getFoodOrders);
router.delete('/:id', foodController.deleteFoodOrder);

module.exports = router;
