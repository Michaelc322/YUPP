const RestaurantModel = require('../models/Restaurant');


// Register endpoint
const createRestaurant = async(req, res) => {
    try{
        const { restuarantName, cuisine, priceLevel, latitude, longitude, address } = req.body;

        return res.json(user)
    }
    catch(error){
        console.log(error);
        return res.json({
            error: 'An error occurred during registration'
        });
    }
}


// export functions

module.exports = {
    createRestaurant,
}