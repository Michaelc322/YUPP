const { error } = require('console');
const RestaurantModel = require('../models/Restaurant');


const createRestaurant = async(req, res) => {
    try{
        const { restaurantName, cuisine, priceLevel, latitude, longitude, address, activeDeals } = req.body;


        if (restaurantName === '' || cuisine === '' || priceLevel === '' || latitude === '' || longitude === '' || address === '' || activeDeals === '') {
            return res.json({
                error: 'All fields are required'
            });
        }

        const exist = await RestaurantModel.findOne({restaurantName})
        if(exist){
            return res.json({
                error: 'A restaurant with this name already exists'
            })
        }

        const restaurant = await RestaurantModel.create({
            restaurantName,
            cuisine,
            priceLevel,
            latitude,
            longitude,
            address,
            activeDeals
        })


        return res.json(restaurant);
    }
    catch(error){
        console.log(error)
        return res.json({
            error: 'An error occurred during creation of restaurant'
        });
    }
}

const displayRestaurants = async(req, res) => {
    console.log('displayRestaurants')
    try{
        const restaurants = await RestaurantModel.find({});
        return res.json(restaurants);
    }
    catch(error){
        return res.json({
            error: 'An error occurred during retrieval of restaurants'
        });
    }
}


// export functions

module.exports = {
    createRestaurant,
    displayRestaurants
}