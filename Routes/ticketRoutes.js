const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/add', ticketController.addTicket);
router.get('/', ticketController.getTickets);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;
