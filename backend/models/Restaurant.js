const mongoose = require('mongoose');
const {Schema} = mongoose;

const restaurantSchema = new Schema({

    restaurantName: String,
    cuisine: String,
    priceLevel: String,
    latitude: Number,
    longitude: Number,
    address: String,
    activeDeals: Array,

})

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = RestaurantModel;