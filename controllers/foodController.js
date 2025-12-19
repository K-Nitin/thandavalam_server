const FoodOrder = require('../models/FoodOrder.js');

exports.addFoodOrder = async (req, res) => {
    try {
        const newOrder = new FoodOrder(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFoodOrders = async (req, res) => {
    try {
        const orders = await FoodOrder.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFoodOrder = async (req, res) => {
    try {
        const deletedOrder = await FoodOrder.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Food order deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


