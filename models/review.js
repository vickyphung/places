const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  // user: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  place: { type: Schema.Types.ObjectId, ref: 'place'},
  review: { type: String }
})

const review = mongoose.model('review', reviewSchema);

module.exports = review;