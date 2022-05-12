const express = require('express');
const router = express.Router();
const user = require('../models/user');
const place = require('../models/place')

router.get("/allusers", (req, res)=>{
    user.find((err, allUsers)=>{
        if(err){
            res.status(404).json({message: "Error. No user data found."})
        } else {
            res.status(200).json({
            usersList: allUsers})
        }
    })
})

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
                        _id: foundUser.favorites
                        }
                    }, {
                    $pull: {
                        favorite_users: foundUser._id 
                    }
                    }, (error, updatedPlace) => {
                        if (error) {
                            console.error("Error. Not ablt to remove user from places favorite_users list."); 
                            res.status(404).json({
                                error: "User not removed from favorite_user lists."
                            })
                        } else {
                            user.deleteOne({ // deletes one user
                                _id: req.params.id 
                            }, (error, outputA) => {
                                if (error) {
                                    console.error(error); 
                                    res.status(404).json({
                                        error: 'No user to delete found.'
                                    })
                                } else {
                                    console.log('user ded');
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


router.delete("/clear", (req, res)=>{
    user.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: "pft couldn't even delete everything"})
        }else{
            res.status(204).json({message: "ERRETHING HAS BEEN DELETED"})
        }
    })
})

router.put('/favorite/:userId/:placeId', (req, res) => {
    user.updateOne({ 
        _id: req.params.userId 
    }, {
        $push: {
        favorites: req.params.placeId
        }
    }, (error, updatedUser) => {
        if (error) {
            console.error(error);
            res.status(404).json({ 
                error: 'No user to add favorite to.'
            });
        } else {
            place.updateOne({
                _id: req.params.placeId
            }, {
                $push: {
                favorite_users: req.params.userId
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

router.put("/update/:id", (req, res)=>{
    const id = req.params.id
    const updatedUser = req.body

    user.findByIdAndUpdate(id, updatedUser, {new: true},(err, updatedUser)=>{
        if(err){
            res.status(404).json({message: "User not updated."})
        } else {
            res.status(202).json({message: "User updated.",
            place: updatedUser})
        }
    })
})


module.exports = router;