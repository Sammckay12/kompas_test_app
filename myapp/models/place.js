var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema ({

  name: String,
  address: String,
  city: String,
  category: String,
  rating: Number,
  opening_times: String,
  latitude: Number,
  longitude: Number,
  image: String

})

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;
