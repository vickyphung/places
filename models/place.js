
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const placeSchema = new Schema({
  name: { type: String, required: true },

  // street_address: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zip_code:{ type: Number, required: false },

  location: [ { type: String, required: true } ],
  hours: { type: String, required: true },
  category: [ { type: String, required: true } ],

  posted_by: { type: Schema.Types.ObjectId, ref: 'User' },
  reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ],
  favorite_users: [ { type: Schema.Types.ObjectId, ref: 'User' } ]

})

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
