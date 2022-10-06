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
    


    // {
    //     "_id": "631d55fdb384b45bb745eff6",
    //     "name": " Arboretum",
    //     "location": {
    //         "street": "3501 New York Ave NE",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20002
    //     },
    //     "tags": [
    //         "Trees, Park, Garden"
    //     ],
    // },
    // {
    //     "_id": "632141a0f0a0a4aa1027135a",
    //     "name": "Aaa Demo Place",
    //     "location": {
    //         "street": "123 bear road",
    //         "city": "City",
    //         "state": "DC",
    //         "zip": 12345
    //     },
    //     "tags": [
    //         "tag, place, demo, test"
    //     ],
    // },
    // {
    //     "_id": "632fc6bde9435e32dfb31a53",
    //     "name": "Aaa Demo To Test Functions",
    //     "location": {
    //         "street": "1234 Street Address",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 12345
    //     },
    //     "tags": [
    //         "test review, test like, test edit, test delete"
    //     ],
    // },
    // {
    //     "_id": "631d578ab384b45bb745f016",
    //     "name": "American Visionary Art Museum",
    //     "location": {
    //         "street": "800 Key Hwy",
    //         "city": "Baltimore",
    //         "state": "MD",
    //         "zip": 21230
    //     },
    //     "tags": [
    //         "Art, Museum"
    //     ],
    // },
    // {
    //     "_id": "632b8b948c73d303d3e96221",
    //     "name": "Artechouse",
    //     "location": {
    //         "street": "1238 Maryland Ave SW",
    //         "city": "Washington",
    //         "state": "DC"
    //     },
    //     "tags": [
    //         "Art"
    //     ],
    // },
    // {
    //     "_id": "631d5986b384b45bb745f02a",
    //     "name": "Asian Art Museum",
    //     "location": {
    //         "street": "1050 Independence Ave SW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20560
    //     },
    //     "tags": [
    //         "Art, Asian"
    //     ],
    // },
    // {
    //     "_id": "631d572ab384b45bb745f00e",
    //     "name": "Burke Lake Park",
    //     "location": {
    //         "street": "7315 Ox Rd",
    //         "city": "Fairfax County",
    //         "state": "VA",
    //         "zip": 22039
    //     },
    //     "tags": [
    //         "Lake, Park"
    //     ],
    // },
    // {
    //     "_id": "631d58a8b384b45bb745f01a",
    //     "name": "Charles E. Beatley, Jr. Central Library",
    //     "location": {
    //         "street": "5005 Duke St",
    //         "city": "Alexandria",
    //         "state": "VA",
    //         "zip": 22304
    //     },
    //     "tags": [
    //         "Outside Reading Room"
    //     ],
    // },
    // {
    //     "_id": "632248bf789aa84e61c4cf1a",
    //     "name": "Culture House DC",
    //     "location": {
    //         "street": "700 Delaware Ave SW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20024
    //     },
    //     "tags": [
    //         "art",
    //         "exhibition",
    //         "cool building"
    //     ],
    // },
    // {
    //     "_id": "631d43c3a07f52f9b05d59c8",
    //     "name": "Dumbarton Oaks Museum and Garden",
    //     "location": {
    //         "street": "1703 32nd St NW",
    //         "city": "Washington",
    //         "state": "DC"
    //     },
    //     "tags": [
    //         "Museum, Garden"
    //     ],
    // },
    // {
    //     "_id": "631d55d4b384b45bb745eff4",
    //     "name": "Dupont Underground",
    //     "location": {
    //         "street": "19 Dupont Cir NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20036
    //     },
    //     "tags": [
    //         "Art, Subway"
    //     ],
    // },
    // {
    //     "_id": "631d4309a07f52f9b05d59bc",
    //     "name": "GW Parkway Scenic Overlook",
    //     "location": {
    //         "street": "George Washington Pkwy Arlington",
    //         "city": "VA",
    //         "state": "US"
    //     },
    //     "tags": [
    //         "Drive, Scenic, Overlook"
    //     ],
    // },
    // {
    //     "_id": "631d5282b384b45bb745efc9",
    //     "name": "George Peabody Library",
    //     "location": {
    //         "street": "17 E Mt Vernon Pl",
    //         "city": "Baltimore",
    //         "state": "MD",
    //         "zip": 21202
    //     },
    //     "tags": [
    //         "Stunning, Library"
    //     ],
    // },
    // {
    //     "_id": "6326a7b18c94bdc686f1c983",
    //     "name": "George Washington Masonic National Memorial",
    //     "location": {
    //         "street": "101 Callahan Dr",
    //         "city": "Alexandria",
    //         "state": "VA"
    //     },
    //     "tags": [
    //         "Masonic"
    //     ],
    // },
    // {
    //     "_id": "631d54b5b384b45bb745efec",
    //     "name": "Georgetown Waterfront Park",
    //     "location": {
    //         "street": "3303 Water St NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20007
    //     },
    //     "tags": [
    //         "Park, Waterfront, Shops"
    //     ],
    // },
    // {
    //     "_id": "63192ad06d01f7e091199e87",
    //     "name": "Green Spring Gardens",
    //     "location": {
    //         "street": "4603 Green Spring Rd",
    //         "city": "Fairfax County",
    //         "state": "VA"
    //     },
    //     "tags": [
    //         "Garden"
    //     ],
    // },
    // {
    //     "_id": "632e700beb56f1c7f68869fa",
    //     "name": "Hillwood Estates and Gardens",
    //     "location": {
    //         "street": "4155 Linnean Ave NW",
    //         "city": "Washington",
    //         "state": "DC"
    //     },
    //     "tags": [
    //         "Garden"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d2ec75c41ad950a4f4892",
    //     "name": "Hirshorn Museum",
    //     "location": {
    //         "street": "7th St SW Southwest Washington",
    //         "city": "DC",
    //         "state": "US"
    //     },
    //     "tags": [
    //         "Museum, Art"
    //     ],
    // },
    // {
    //     "_id": "631d5902b384b45bb745f022",
    //     "name": "Kenilworth Park & Aquatic Gardens",
    //     "location": {
    //         "street": "1550 Anacostia Ave NE",
    //         "city": "DC",
    //         "state": "US",
    //         "zip": 2028
    //     },
    //     "tags": [
    //         "Park, Garden"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "632248cf789aa84e61c4cf1c",
    //     "name": "Kennedy Center",
    //     "location": {
    //         "street": "2700 F St NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20566
    //     },
    //     "tags": [
    //         "performing arts",
    //         "art",
    //         "architecture",
    //         "theater"
    //     ],
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "632248e7789aa84e61c4cf20",
    //     "name": "Khalil Gibran Memorial",
    //     "location": {
    //         "street": "3100 Massachusetts Ave NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20008
    //     },
    //     "tags": [
    //         "memorial",
    //         "sculpture",
    //         "bronze"
    //     ],
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d58d2b384b45bb745f01e",
    //     "name": "Lake Accotink Park",
    //     "location": {
    //         "street": "7500 Accotink Park Rd",
    //         "city": "Fairfax County",
    //         "state": "VA",
    //         "zip": 22150
    //     },
    //     "tags": [
    //         "Park, Nature"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "632232b9836d4896fdbe57b4",
    //     "name": "Lake Fairfax",
    //     "location": {
    //         "street": "1400 Lake Fairfax Drive",
    //         "city": "Reston",
    //         "state": "VA",
    //         "zip": 20190
    //     },
    //     "tags": [
    //         "Park, Lake, Fishing, Skatepark"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 0,
    //     "favorite_users": [],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d4393a07f52f9b05d59c4",
    //     "name": "MGM National Harbor",
    //     "location": {
    //         "street": "101 MGM National Ave",
    //         "city": "Oxon Hill",
    //         "state": "Prince George's County"
    //     },
    //     "tags": [
    //         "Casino"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "632246f5789aa84e61c4cf18",
    //     "name": "McKee-Beshers Wildlife Management Area",
    //     "location": {
    //         "street": "18600 River Rd",
    //         "city": "Poolesville",
    //         "state": "MD",
    //         "zip": 20837
    //     },
    //     "tags": [
    //         "nature",
    //         "garden",
    //         "sunflowers"
    //     ],
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d5a96b384b45bb745f038",
    //     "name": "Mosaic District",
    //     "location": {
    //         "street": "2910 District Ave",
    //         "city": "Fairfax County",
    //         "state": "VA",
    //         "zip": 22031
    //     },
    //     "tags": [
    //         "Shops, Movies, Food, Chill"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d5962b384b45bb745f024",
    //     "name": "Museum of Asian Art",
    //     "location": {
    //         "street": "1050 Independence Ave SW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20560
    //     },
    //     "tags": [
    //         "Asian, Art, Museum"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "6320c4a73c25c5b71903be43",
    //     "name": "National Air and Space Museum",
    //     "location": {
    //         "street": "600 Independence Ave SW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20560
    //     },
    //     "tags": [
    //         "Museum"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d56b6b384b45bb745f00a",
    //     "name": "National Cathedral",
    //     "location": {
    //         "street": "3101 Wisconsin Ave NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20016
    //     },
    //     "tags": [
    //         "Church, Architecture"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 0,
    //     "favorite_users": [],
    //     "__v": 0
    // },
    // {
    //     "_id": "632241b1456151cd92f06adf",
    //     "name": "National Gallery of Art",
    //     "location": {
    //         "street": "Constitution Ave. NW Northwest Washington",
    //         "city": "DC",
    //         "state": "US"
    //     },
    //     "tags": [
    //         "Art, Gallery"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "63214667f0a0a4aa10271371",
    //     "name": "Old Rag Mountain",
    //     "location": {
    //         "street": "Old Rag Mountain Madison County",
    //         "city": "US",
    //         "state": "22743"
    //     },
    //     "tags": [
    //         "Mountain"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 0,
    //     "favorite_users": [],
    //     "__v": 0
    // },
    // {
    //     "_id": "6320c5843c25c5b71903be55",
    //     "name": "Old Town Alexandria Waterfront",
    //     "location": {
    //         "street": "1 Prince St",
    //         "city": "Alexandria",
    //         "state": "VA",
    //         "zip": 22314
    //     },
    //     "tags": [
    //         "Waterfront"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d5a14b384b45bb745f030",
    //     "name": "Phillips Collection",
    //     "location": {
    //         "street": "1600 21st St NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20009
    //     },
    //     "tags": [
    //         "Art"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d59b9b384b45bb745f02e",
    //     "name": "Rock Creek Park",
    //     "location": {
    //         "street": "5200 Glover Rd NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20008
    //     },
    //     "tags": [
    //         "Park, Trail"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d51bab384b45bb745efb7",
    //     "name": "Smithsonian National Museum of Natural History",
    //     "location": {
    //         "street": "10th St. & Constitution Ave. NW",
    //         "city": "Washington",
    //         "state": "DC",
    //         "zip": 20560
    //     },
    //     "tags": [
    //         "Museum, Art"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "632248dd789aa84e61c4cf1e",
    //     "name": "The George Washington Masonic National Memorial",
    //     "location": {
    //         "street": "101 Callahan Dr",
    //         "city": "Alexandria",
    //         "state": "VA",
    //         "zip": 22301
    //     },
    //     "tags": [
    //         "memorial",
    //         "architecture",
    //         "masonic",
    //         "temple"
    //     ],
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d434ca07f52f9b05d59c0",
    //     "name": "Thomas Jefferson Memorial",
    //     "location": {
    //         "street": "16 E Basin Dr SW",
    //         "city": "Washington",
    //         "state": "DC"
    //     },
    //     "tags": [
    //         "Statue, Memorial"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d432aa07f52f9b05d59be",
    //     "name": "Torpedo Factory Art Center",
    //     "location": {
    //         "street": "105 N Union St",
    //         "city": "Alexandria",
    //         "state": "VA"
    //     },
    //     "tags": [
    //         "Art, Classes"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // },
    // {
    //     "_id": "631d5a40b384b45bb745f034",
    //     "name": "W&OD Trailhead",
    //     "location": {
    //         "street": "Washington and Old Dominion Trail Green Valley",
    //         "city": "Arlington County",
    //         "state": "VA",
    //         "zip": 22206
    //     },
    //     "tags": [
    //         "Park, Trail"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 0,
    //     "favorite_users": [],
    //     "__v": 0
    // },
    // {
    //     "_id": "6327caab4449995066af9705",
    //     "name": "Winkler Botanical Preserve",
    //     "location": {
    //         "street": "5400 Roanoke Ave",
    //         "city": "Alexandria",
    //         "state": "VA"
    //     },
    //     "tags": [
    //         "Park"
    //     ],
    //     "user": "62bbf966c4c434b12444023d",
    //     "reviews": [],
    //     "favorites": 1,
    //     "favorite_users": [
    //         "62bbf966c4c434b12444023d"
    //     ],
    //     "__v": 0
    // }