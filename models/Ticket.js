const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    pnr: { type: String, required: true },
    trainName: { type: String, required: true },
    trainNumber: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    journeyDate: { type: String, required: true },
    passengerName: { type: String, required: true },
    seatNumber: { type: String, required: true },
    bookingStatus: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
