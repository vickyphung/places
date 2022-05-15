
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

// const placeSchema = new Schema({
//   name: { type: String, required: true, unique: true },

//   // street_address: { type: String, required: true },
//   // city: { type: String, required: true },
//   // state: { type: String, required: true },
//   // zip_code:{ type: Number, required: false },

//   location: [ { type: String, required: true } ],
//   hours: { type: String, required: false },
//   category: [ { type: String, required: true } ],

// //   reviews: [ { type: Schema.Types.ObjectId, ref: 'review', required: false } ],
//   reviews: [ { type: String, ref: 'review', required: false } ],
//   favorite_users: [ { type: Schema.Types.ObjectId, ref: 'user', required: false } ]

// })



const locationSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip:{ type: Number, required: false }
},
{
  _id: false
});


const placeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: {
    type: locationSchema,
    required: true,
  },
  hours: { type: String, required: false },
  tags: [ { type: String, required: true } ],

//   reviews: [ { type: Schema.Types.ObjectId, ref: 'review', required: false } ],
  reviews: [ {
    review: { type: String, ref: 'review', required: false }, 
    user: { type: Schema.Types.ObjectId, ref: 'review', required: false },
    id: { type: Schema.Types.ObjectId, ref: 'review' }
  } ],
  favorites:  { type: Number, default: 0, required: false, unique: true } ,
  favorite_users: [ { type: Schema.Types.ObjectId, ref: 'user', unique: true, required: false } ]

})






const location = mongoose.model('location', locationSchema)
const place = mongoose.model('place', placeSchema);

module.exports = place, location;



