const RestaurantModel = require('../models/Restaurant');


// Register endpoint
const createRestaurant = async(req, res) => {
    try{
        const { restaurantName, cuisine, priceLevel, lat, lng, address, activeDeals } = req.body;

        const restaurant = await RestaurantModel.create({
            restaurantName,
            cuisine,
            priceLevel,
            lat,
            lng,
            address,
            activeDeals
        })

        return res.json(restaurant, "Restaurant created successfully");
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