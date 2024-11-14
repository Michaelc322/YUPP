const express = require('express');
const dotenv = require('dotenv');
const {mongoose} = require('mongoose');

dotenv.config();
const app = express();


// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database connection failed', err));




// middleware
app.use('/', require('./routes/restaurantRoutes'));



const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));