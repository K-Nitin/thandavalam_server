const mongoose = require('mongoose');

const foodOrderSchema = new mongoose.Schema({
    pnr: { type: String, required: true },
    trainNumber: { type: String, required: true },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    station: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FoodOrder', foodOrderSchema);
