//when deleting a place, delete reviews for that place also

const express = require('express');
const router = express.Router();

const place = require('../models/place');
// const user = require('../models/user');



router.post("/", (req, res) =>{
    const placeData = req.body
    place.create(placeData, (error, createdPlace) =>{
        if (error){
            console.error(error);
            res.status(400).json({
                error: "Error occured. Place not created."
            })
        } else {
            console.log("Place created successfully.");
            res.status(200).json({
                message: "Place was successfully posted.",
                place: createdPlace
            })
        }
    })
})



// router.post('/', (req, res) => {
//     const productData = req.body
//     Product.create(productData, (error, createdProduct) => { // creates a product using the data from our body
//       if (error) {
//         console.error(error);
//         res.status(400).json({ // error handling magic
//           error: 'an error has occurred creating the product'
//         })
//       } else {
//         console.log('successfully created product')
//         User.updateOne({ // updates the user that sold the product 
//           _id: productData.seller // id of the seller from the product info
//         }, {
//           $push: {
//             sold_products: createdProduct._id // pushes the created product's id into the seller's sold_products array
//           }
//         }, (error, updatedUser) => {
//           if (error) {
//             console.error(error);
//             res.status(400).json({ // error handling magic
//               error: 'an error has occurred updating the user'
//             })
//           } else {
//             console.log('successfully created a product and added to the user sold list');
//             res.status(201).json({
//               message: "successfully created product",
//               product: createdProduct // sends back a 201 to indicate that the product was created as well as the information on the product!
//             })
//           }
//         })
//       }
//     })
//   })
  
  router.delete('/:productId/:userId', (req, res) => {
    place.deleteOne({ // delete a product
      _id: req.params.placeId // with the id specified in the request
    }, (error, deletedPlace) => {
      
        if (error) {
        console.error(error); // error handling magic
        res.status(404).json({
          error: 'No place found to delete with that id'
        })

      } else {
        
        
        user.updateOne({ // updates the user

          _id: req.params.userId // with the id specified in the request
        }, {
          $pull: {
            favorites: req.params.placeId // removes the product with the id in the request from the sold_products array
          }
        }, (error, updatedUser) => {
          if (error) {
            console.error(error); // error handling magic
            res.status(404).json({
              error: 'No user found with that id'
            })
          } else {
            console.log('Successfully deleted the place and removed it from user\'s favorites')
            res.status(204) // sends back 204 to indicate that the product was removed!
          }

        })


      }


    })
  })
  
  module.exports = router;