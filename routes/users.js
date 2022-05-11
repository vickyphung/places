
//deleting a user deletes all place data

const express = require('express');
const router = express.Router();
const user = require('../models/user');
const place = require('../models/place')

//Create User
router.post('/', (req, res) => {
    const userData = req.body
    user.create(userData, (error, createdUser) => {
      if (error) {
        console.error(error);
        res.status(400).json({
          error: 'Error occured. User not created.'
        })
      } else {
        console.log('User created successfully.');
        res.status(201).json({
          message: 'Success! User has been created.',
          user: createdUser
        })
      }
    })
  })
  
//Delete User + User from Places favorite_users list.

router.delete('/:id', (req, res) => {
        user.findOne({ 
            _id: req.params.id 
            }, (error, foundUser) => {
                if (error) {
                    console.error(error)
                    res.status(404).json({ 
                        error: "User not found."
                    })
                } else {
                    place.updateMany({
                        $in: {
                        _id: foundUser.favorites // only the products with _ids found within the User's favorites list
                        }
                    }, {
                    $pull: {
                        favorite_users: foundUser._id // pulls the User's _id out of the favorite_users list
                    }
                    }, (error, updatedProduct) => {
                        if (error) {
                            console.error(error); // error handling magic
                            res.status(404).json({
                                error: "User not removed from place's favorite_user lists."
                            })
                        } else {
                            user.deleteOne({ // deletes one user
                                _id: req.params.id // only the user we want to delete
                            }, (error, resultB) => {
                                if (error) {
                                    console.error(error); 
                                    res.status(404).json({
                                        error: 'No user to delete found.'
                                    })
                                } else {
                                    console.log('Successfully deleted user and user data from places.');
                                    res.status(204).json({
                                    message: "User deleted."
                                    }); 
                                }
                            }
                            )
                        }
                    }
                    )
                }
            }
        )
    })

router.put('/favorite/:userId/:placeId', (req, res) => {
    user.updateOne({ // we are updating one user
        _id: req.params.userId // only the user that is adding the favorite
    }, {
        $push: {
        favorites: req.params.placeId // pushing the objectId of the product they are favoriting into their favorites list
        }
    }, (error, updatedUser) => {
        if (error) {
            console.error(error);
            res.status(404).json({ 
                error: 'No user to add favorite to.'
            });
        } else {
            place.updateOne({ // updating one product
            _id: req.params.placeId // only the product that is being added as a favorite
        }, {
            $push: {
            favorite_users: req.params.userId // pushing the objectId of the user that is doing the favoriting into their list of favorite users
            }
        }, (error, updatedPlace) => {
        if (error) {
            console.error(error); 
            res.status(404).json({
                error: 'Could not update the favorites of place.'
            })
        } else {
            res.status(202).json({
                message: 'Successfully updated the user and place favorite lists.'
            })
        }
        })
        }
    })
})








module.exports = router;