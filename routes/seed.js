// const express = require('express');
// const router = express.Router();

// {
//     "message": "places to chill and enjoy in the DMV.",
//     "placesList": [
//         {
//             "_id": "627c06909fb8e045bef563fa",
//             "name": "The George Washington Masonic National Memorial",
//             "location": [
//                 "101 Callahan Dr",
//                 "Alexandria",
//                 "VA",
//                 "22301"
//             ],
//             "category": [
//                 "memorial",
//                 "architecture",
//                 "masonic",
//                 "temple",
//                 "art"
//             ],
//             "reviews": [],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c06989fb8e045bef563fc",
//             "name": "Torpedo Factory",
//             "location": [
//                 "105 N Union St",
//                 "Alexandria",
//                 "VA",
//                 "22312"
//             ],
//             "category": [
//                 "art",
//                 "gallery"
//             ],
//             "reviews": [],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c06a19fb8e045bef563fe",
//             "name": "Hirshorn",
//             "location": [
//                 "Independence Ave SW & 7th St SW",
//                 "Washington",
//                 "DC",
//                 "20560"
//             ],
//             "category": [
//                 "art",
//                 "museum",
//                 "gallery",
//                 "sculpture"
//             ],
//             "reviews": [
//                 "My favorite museum!"
//             ],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c06d19fb8e045bef56400",
//             "name": "Green Spring Gardens",
//             "location": [
//                 "Independence Ave SW & 7th St SW",
//                 "Alexandria",
//                 "DC",
//                 "20560"
//             ],
//             "category": [
//                 "art",
//                 "museum",
//                 "gallery",
//                 "sculpture"
//             ],
//             "reviews": [
//                 "Super pretty!",
//                 "I like peeing on flowers here. Uh-ooooh. Don't tell.",
//                 "I met a baby goose here."
//             ],
//             "favorite_users": [
//                 "627c05e49fb8e045bef563f1",
//                 "627c05dc9fb8e045bef563ef"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c4ce96a10eb9fb233b470",
//             "name": "Kennedy Center",
//             "location": [
//                 "2700 F St NW",
//                 "Washington",
//                 "DC",
//                 "20566"
//             ],
//             "category": [
//                 "performing arts",
//                 "art",
//                 "architecture",
//                 "theater"
//             ],
//             "reviews": [],
//             "favorite_users": [
//                 "627c05dc9fb8e045bef563ef"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c4da96a10eb9fb233b474",
//             "name": "Glenstone",
//             "location": [
//                 "12100 Glen Road.",
//                 "Potomac",
//                 "MD"
//             ],
//             "category": [
//                 "contemporary art",
//                 "museum",
//                 "art",
//                 "architecture"
//             ],
//             "reviews": [],
//             "favorite_users": [
//                 "627c05dc9fb8e045bef563ef",
//                 "627c06039fb8e045bef563f7"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c4e256a10eb9fb233b476",
//             "name": "Arboretum ",
//             "location": [
//                 "3501 New York Ave NE.",
//                 "Washington",
//                 "DC",
//                 "20002"
//             ],
//             "category": [
//                 "trees",
//                 "nature",
//                 "garden"
//             ],
//             "reviews": [
//                 "Theres a japanese garden in here! And you can drive through the arboretum.",
//                 "Lotta trees."
//             ],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c4e9e6a10eb9fb233b478",
//             "name": "Culture House DC ",
//             "location": [
//                 "700 Delaware Ave SW",
//                 "Washington",
//                 "DC",
//                 "20024"
//             ],
//             "category": [
//                 "art",
//                 "exhibition",
//                 "cool building"
//             ],
//             "reviews": [
//                 "looks super cool, they painted it all wild. building used to be a church. "
//             ],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c4f5e6a10eb9fb233b47a",
//             "name": "Charles E. Beatley, Jr. Central Library Reading Garden",
//             "location": [
//                 "5005 Duke St",
//                 "Alexandria",
//                 "VA",
//                 "22304"
//             ],
//             "category": [
//                 "trees",
//                 "reading nook",
//                 "garden",
//                 "library"
//             ],
//             "reviews": [],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c5b3ae44b5fe1c8d79a7b",
//             "name": "ARTECHOUSE DC",
//             "location": [
//                 "1238 Maryland Ave SW",
//                 "Washington",
//                 "DC",
//                 "20024"
//             ],
//             "category": [
//                 "art",
//                 "technology",
//                 "bar"
//             ],
//             "reviews": [
//                 "chill in rooms immersed by projections. rotating exhibits. theres a cocktail bar."
//             ],
//             "favorite_users": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c5e4f08127459d6a3844f",
//             "name": "McKee-Beshers Wildlife Management Area",
//             "location": [
//                 "18600 River Rd",
//                 "Poolesville",
//                 "MD",
//                 "20837"
//             ],
//             "category": [
//                 "nature",
//                 "sunflowers"
//             ],
//             "reviews": [
//                 "sunflowers sunflowers sunflowers SUNFLOWERS!!!!!!!! "
//             ],
//             "favorite_users": [
//                 "627c05cf9fb8e045bef563ed"
//             ],
//             "__v": 0
//         }
//     ]
// }




// {
//     "usersList": [
//         {
//             "_id": "627c05cf9fb8e045bef563ed",
//             "name": "Vicky",
//             "email": "vickyphung@gmail.com",
//             "favorites": [],
//             "reviews": [
//                 "627c4aa11397cbaf37769ae3",
//                 "627c4b606a10eb9fb233b45c"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c05dc9fb8e045bef563ef",
//             "name": "Bear",
//             "email": "bear@gmail.com",
//             "favorites": [],
//             "reviews": [
//                 "627c4ba56a10eb9fb233b460"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c05e49fb8e045bef563f1",
//             "name": "Pinky",
//             "email": "pinky@gmail.com",
//             "favorites": [],
//             "reviews": [
//                 "627c4bde6a10eb9fb233b464"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "627c05ed9fb8e045bef563f3",
//             "name": "Honey",
//             "email": "honey@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c05f99fb8e045bef563f5",
//             "name": "Lavender",
//             "email": "lavender@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c06039fb8e045bef563f7",
//             "name": "Scruffy",
//             "email": "scruffy@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c4bfc6a10eb9fb233b469",
//             "name": "Snuggles",
//             "email": "snuggles@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c4c116a10eb9fb233b46b",
//             "name": "Lil' Bear",
//             "email": "lilbear@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         },
//         {
//             "_id": "627c4c1c6a10eb9fb233b46d",
//             "name": "Fatty",
//             "email": "fatty@gmail.com",
//             "favorites": [],
//             "reviews": [],
//             "__v": 0
//         }
//     ]
// }




// server.get("/seed", (req, res)=>{
//     pokemon.insertMany(seedPokemon, (err, allPokemon)=>{
//         if(err){
//             res.status(400).json({message: err.message})
//         }else{
//             res.status(201).json(allPokemon)
//         }
//     })
// })


// module.exports = router;