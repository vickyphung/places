const express = require('express');
const router = express.Router();
const review = require('../models/review');
const place = require('../models/place');

router.post('/', (req, res) => {

  // sets the body to a variable
  const reviewData = req.body;
  review.create(reviewData, (error, createdReview) => {
    if (error) {
    //   console.error(error.errors.rating.kind);
    //     if (error.errors.rating.kind === 'max') {
    //         console.log('too high')
    //         res.status(400).json ({
    //             type: 'max',
    //             error: `Your value of ${error.errors.rating.value} exceeds the max allowed!`
    //         })
    //     }

      res.status(400).json({ // error handling magic
        error: 'Error. Could not create review.'
      })

    } else {
      place.updateOne({ // updates the product with the id in the body
        _id: reviewData.place
     }, 
     
     {
        reviews: createdReview._id
     }, 
     
     {
        comments: createdReview.review
     },  
        (error, updatedReview) => {
        if (error) {
          console.error("Review not appended to place");
          res.status(400).json({ 
            error: 'Review and place not updated.'
          })
        } else {
          console.log('Successfully created review and added it to place data');
          res.status(201).json({
            message: 'Successfully created review!',
            review: createdReview
          });
        }
      });
    }
  });
});

module.exports = router;