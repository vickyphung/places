const express = require('express');
const router = express.Router();
const review = require('../models/review');
const place = require('../models/place');
const user = require('../models/user');




router.get("/", (req, res)=>{
    review.find((err, allReviews)=>{
        if(err){
            res.status(404).json({message: "Error. No reviews found."})
        } else {
            res.status(200).json({
            reviews: allReviews})
        }
    })
})


router.get("/:placeId", (req, res)=>{
    // const placeReviewed = req.params.placeId
    review.find({place: req.params.placeId}, (err, review)=>{
        if(err){
            res.status(404).json({message: "Could not find reviews for the place with that ID."})
        } else {
            res.status(200).json({reviews: review})
        }
    })
})

router.post('/', (req, res) => {
  // sets the body to a variable
  const reviewData = req.body;
  review.create(reviewData, (error, createdReview) => {
    if (error) {
      res.status(400).json({
        error: 'Error. Could not create review.'
      })
    } else {
        user.updateOne({
            _id: reviewData.user
        }, {
            $push: {
            reviews: createdReview._id 
            // reviews: createdReview.review
            }
        }, (error, updatedUser) => {
            if (error) {
                console.error(error);
                res.status(404).json({ 
                    error: 'No user to add review to.'
                });
            } else {
                place.updateOne({ 
                    _id: reviewData.place
                },
                
               { 
                $push: {
                    reviews: {
                        review: createdReview.review,
                        user: createdReview.user
                    }

                }
               },

                (error, updatedReview) => {
                    if (error) {
                        console.error("Review not appended to place");
                        res.status(400).json({ 
                            error: 'Review and place not updated.'
                        });
                    } else {
                        console.log('Successfully created review and added it to place data');
                        res.status(201).json({
                            message: 'Successfully created review!',
                            review: createdReview
                        });
                    }
                }
                );
            }
        });
    }
  })
});

router.delete("/clear", (req, res)=>{
    review.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})

router.put("/:id", (req, res)=>{
    const id = req.params.id
    const updatedReview = req.body

    review.findByIdAndUpdate(id, updatedReview, {new: true},(err, updatedReview)=>{
        if(err){
            res.status(404).json({message: "Review not updated."})
        } else {
            res.status(202).json({message: "Review updated.",
            place: updatedReview})
        }
    })
})
module.exports = router;