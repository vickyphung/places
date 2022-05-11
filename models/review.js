const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  user: { type: String },
// user: [ { type: Schema.Types.ObjectId, ref: 'User' } ],

  place: { type: Schema.Types.ObjectId, ref: 'Place'},
  review: { type: String }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;