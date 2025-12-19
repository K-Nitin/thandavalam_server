const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const ticketRoutes = require('./routes/ticketRoutes');
const foodRoutes = require('./routes/foodRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/tickets', ticketRoutes);
app.use('/api/food', foodRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
