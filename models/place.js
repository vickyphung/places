
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const placeSchema = new Schema({
  name: { type: String, required: true },

  // street_address: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zip_code:{ type: Number, required: false },

  location: [ { type: String, required: true } ],
  hours: { type: String, required: false },
  category: [ { type: String, required: true } ],

  posted_by: { type: Schema.Types.ObjectId, ref: 'user' },
  reviews: [ { type: Schema.Types.ObjectId, ref: 'review' } ],
  comments: [ { type: String, ref: 'review' } ],
  favorite_users: [ { type: Schema.Types.ObjectId, ref: 'user' } ]

})

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
