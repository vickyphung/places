//when deleting a place, delete reviews for that place also

const express = require('express');
const router = express.Router();

const place = require('../models/place');
const review = require('../models/review');
const user = require('../models/user');
// const review = require('../models/review');

router.get("/", (req, res)=>{
    place.find((err, allPlaces)=>{
        if(err){
            res.status(404).json({message: "Error. No place data found."})
        } else {
            res.status(200).json({message: "places to go in the DMV",
            placesList: allPlaces})
        }
    })
})

router.get("/name/:name", (req, res)=>{
    const name = req.params.name
    place.findOne({name: name,}, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find place with that name."})
        } else {
            res.status(200).json(place)
        }
    })
})



router.get("/tags/:tag", (req, res)=>{

    place.find({tags: req.params.tag}, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find places within that city."})
        } else {
            res.status(200).json({places: place})
        }
    })
})

router.get("/city/:city", (req, res)=>{
const city = req.params.city
place.find({
    
    "location.city": city

}, (err, place)=>{
    if(err){
        res.status(404).json({message: "Could not find places within that city."})
    } else {
        res.status(200).json({places: place})
    }
})
})


router.get("/state/:state", (req, res)=>{
    const state = req.params.state
    place.find({
        
        "location.state": state
    
    }, (err, place)=>{
        if(err){
            res.status(404).json({message: "Could not find places within that state."})
        } else {
            res.status(200).json({places: place})
        }
    })
    })
    



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



router.delete('/:placeId', (req, res) => {
    place.deleteOne({ 
        _id: req.params.placeId 
    }, (error, deletedPlace) => {
        if (error) {
            console.error("Could not find place to delete."); 
            res.status(404).json({
                error: 'No place found to delete with that id'
            })
        } else {      
            user.updateMany({
                $in: {
                    _id: deletedPlace.favorites
                }
            }, {
                $pull: {
                favorites: req.params.placeId
                }
            }, (error, updatedUser) => {
                if (error) {
                    console.error('Error. No places to delete in user favorites.');
                    res.status(404).json({
                    error: 'Error. No places to delete in user favorites.'
                    })
                }
                

                else {
                    review.deleteMany ({
                        place: req.params.placeId
                    }, (error, deletedReview) => {
                        if (error) {
                            console.error("Could not find review to delete."); 
                            res.status(404).json({
                                error: 'No review found to delete with that id'
                            })
                        } else {
                            console.log('Successfully deleted the place, removed it from user\'s favorites, and deleted all reviews about the place.');
                            res.status(204).json ({
                                message: "Place and place data deleted."
                            })
                        }
                    }
                    )
                }                
                
                
                // else {
                //     console.log('Successfully deleted the place and removed it from user\'s favorites');
                //     res.status(204).json ({
                //         message: "Place and place data deleted."
                //     })
                // }
            })
        }
    }
    )
})

  router.delete("/clear", (req, res)=>{
    place.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED ALL PLACES."})
        }
    })
})

router.put("/:id", (req, res)=>{
    const id = req.params.id
    const updatedPlace = req.body

    place.findByIdAndUpdate(id, updatedPlace, {new: true},(err, updatedPlace)=>{
        if(err){
            res.status(404).json({message: "Place not updated."})
        } else {
            res.status(202).json({message: "Place updated.",
            place: updatedPlace})
        }
    })
})

  module.exports = router;