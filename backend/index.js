const express = require('express');
const dotenv = require('dotenv');
const {mongoose} = require('mongoose');
const cors = require('cors');



dotenv.config();
const app = express();


const options = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization', 'Set-Cookie'],
    credentials: true,
    
};

app.use(cors(options));

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database connection failed', err));



// middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', require('./routes/restaurantRoutes'));
app.use('/', require('./routes/authRoutes'));




const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));