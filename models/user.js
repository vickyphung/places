const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: {type:String, required: true, unique: true},
  
  favorites: [ { type: Schema.Types.ObjectId, ref: 'place', unique: true } ],

  reviews: [ { type: Schema.Types.ObjectId, ref: 'review' } ] 

})

const user = mongoose.model('user', userSchema);

module.exports = user;
