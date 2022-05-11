const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: {type:String, required: true, unique: true},
  
  posts: [ { type: Schema.Types.ObjectId, ref: 'Place' } ],

  favorites: [ { type: Schema.Types.ObjectId, ref: 'Place' } ],

  itinerary: [ { type: Schema.Types.ObjectId, ref: 'Place' } ],

  reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ] 


})

const User = mongoose.model('User', userSchema);

module.exports = User;
