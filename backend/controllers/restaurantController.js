const RestaurantModel = require('../models/Restaurant');


const createRestaurant = async(req, res) => {
    try{

        const { restaurantName, cuisine, priceLevel, lat, lng, address, activeDeals } = req.body;

        if (restaurantName === '' || cuisine === '' || priceLevel === '' || lat === '' || lng === '' || address === '' || activeDeals === '') {
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
            lat,
            lng,
            address,
            activeDeals
        })

        return res.json(restaurant);
    }
    catch(error){
        return res.json({
            error: 'An error occurred during creation of restaurant'
        });
    }
}


// export functions

module.exports = {
    createRestaurant,
}