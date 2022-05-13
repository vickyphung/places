const express = require('express');
const router = express.Router();
const place = require('../models/place');
const user = require('../models/user');

const seedUsers =
 [
        {
            "name": "Fatty",
            "email": "fatty@gmail.com"
        },
        {
            "name": "Lil' Bear",
            "email": "lilbear@gmail.com"
        },
        {
            "name": "Snuggles",
            "email": "snuggles@gmail.com"
        },
        {
            "name": "Scruffy",
            "email": "scruffy@gmail.com"
        },
        {
            "name": "Lavender",
            "email": "lavender@gmail.com"
        },
        {
            "name": "Honey",
            "email": "honey@gmail.com"
        },
        {
            "name": "Pinky",
            "email": "pinky@gmail.com"
        },
        {
            "name": "Bear",
            "email": "bear@gmail.com"
        }, 
        {
            "name": "Vicky",
            "email": "vickyphung@gmail.com"
        }
    ]




    router.get("/all/users", (req, res)=>{
        user.insertMany(seedUsers, (err, allUsers)=>{
            if(err){
                res.status(400).json({message: err.message})
            }else{
                res.status(201).json(allUsers)
            }
        })
    })



const seedPlaces = [
        {
            "name": "Khalil Gibran Memorial",
            "location": {
                "street": "3100 Massachusetts Ave NW",
                "city": "Washington",
                "state": "DC",
                "zip": 20008
            },
            "tags": [
                "memorial",
                "sculpture",
                "bronze"
            ]
        },
        {
            "name": "The George Washington Masonic National Memorial",
            "location": {
                "street": "101 Callahan Dr",
                "city": "Alexandria",
                "state": "VA",
                "zip": 22301
            },
            "tags": [
                "memorial",
                "architecture",
                "masonic",
                "temple"
            ]
        },
        {
            "name": "Torpedo Factory",
            "location": {
                "street": "105 N Union St",
                "city": "Alexandria",
                "state": "VA",
                "zip": 22312
            },
            "tags": [
                "art",
                "gallery"
            ]
        },
        {
            "name": "Green Spring Gardens",
            "location": {
                "street": "4603 Green Spring Rd",
                "city": "Alexandria",
                "state": "VA",
                "zip": 22312
            },
            "tags": [
                "garden",
                "park",
                "nature"
            ]
        },
        {
            "name": "Hirshorn Museum and Sculpture Garden",
            "location": {
                "street": "Independence Ave SW & 7th St SW",
                "city": "Washington",
                "state": "DC",
                "zip": 20560
            },
            "tags": [
                "art",
                "museum",
                "gallery",
                "sculpture"
            ]
        },
        {
            "name": "Kennedy Center",
            "location": {
                "street": "2700 F St NW",
                "city": "Washington",
                "state": "DC",
                "zip": 20566
            },
            "tags": [
                "performing arts",
                "art",
                "architecture",
                "theater"
            ]
        },
        {
            "name": "Arboretum",
            "location": {
                "street": "3501 New York Ave NE",
                "city": "Washington",
                "state": "DC",
                "zip": 20002
            },
            "tags": [
                "trees",
                "nature",
                "garden"
            ]
        },
        {
            "name": "Culture House DC",
            "location": {
                "street": "700 Delaware Ave SW",
                "city": "Washington",
                "state": "DC",
                "zip": 20024
            },
            "tags": [
                "art",
                "exhibition",
                "cool building"
            ]
        },
        {
            "name": "ARTECHOUSE DC",
            "location": {
                "street": "1238 Maryland Ave SW",
                "city": "Washington",
                "state": "DC",
                "zip": 20024
            },
            "tags": [
                "art",
                "projection",
                "bar"
            ]            
        },
        {
            "name": "McKee-Beshers Wildlife Management Area",
            "location": {
                "street": "18600 River Rd",
                "city": "Poolesville",
                "state": "MD",
                "zip": 20837
            },
            "tags": [
                "nature",
                "garden",
                "sunflowers"
            ]
        },
        {
            "name": "Glenstone Museum",
            "location": {
                "street": "12100 Glen Road",
                "city": "Potomac",
                "state": "MD"
            },
            "tags": [
                "contemporary art",
                "museum",
                "art",
                "architecture"
            ]
        },
        {
            "name": "Charles E. Beatley, Jr. Central Library Reading Garden",
            "location": {
                "street": "5005 Duke St",
                "city": "Alexandria",
                "state": "VA",
                "zip": 22304
            },
            "tags": [
                "trees",
                "reading nook",
                "garden",
                "library"
            ]
        }
    ]

    router.get("/all/places", (req, res)=>{
        place.insertMany(seedPlaces, (err, allPlaces)=>{
            if(err){
                res.status(400).json({message: err.message})
            }else{
                res.status(201).json(allPlaces)
            }
        })
    })


    module.exports = router;