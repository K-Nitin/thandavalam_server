const express = require('express');
const cors = require('cors');
const connectDB = require('./Db/connectDB.js');
const ticketRoutes = require('./Routes/ticketRoutes.js');
const foodRoutes = require('./Routes/foodRoutes.js');

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
