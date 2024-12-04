const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');

// dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('DB connection error:', error));

// Routes
app.use('/',(req,res)=>{
    res.json({
        status:'API Is Working',
        code:200
    })
})
app.use('/books', bookRoutes);
app.use('/members', memberRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
