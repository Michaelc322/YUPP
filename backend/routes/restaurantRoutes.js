const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createRestaurant, displayRestaurants } = require('../controllers/restaurantController');


// middleware

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.post('/createRestaurant', createRestaurant);
router.get('/api/restaurants', displayRestaurants);



module.exports = router;