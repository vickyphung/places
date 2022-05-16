
//unique favorite users/favorites, i didn't know how to stop a user from adding the same place to their favorites twice, i tried using unique:true, but maybe that only works for strings and not objectIDs


//remove a favorite
//find().where()
//reinput data
//presentation notes
//comments

# places.chill(DMV)
by: vicky p.

still under development.

MEN stizzzack.
RESTful API.
CRUD.



PLACES.CHILL(DMV)
-user
-places

n:n
-user: favorites
-place: favorite_users
1:n
-reviews: users, places

within the place schema, made location it's own address (sub)schema, made _id field false. hence no location data in mongoose, the location collection does show up. i don't think we need to access the addresses without the place, so to save space, i made the id false. but i think the address being it's own schema makes it easier to query. 

createReview, added timestamp, push review._id to user.reviews and push review string AND user id into place when post review

user add favorite place, update place._id to user's favorites and user._id to place.favorite_users. the place also has an increment counter that goes up by one everytime someone favorites it. 

delete a user, so have to delete their data from places.favorite_users.
delete a place, then must remove from user.favorites, and delete all reviews of that place.
delete a review, then remove from user.reviews and [places.reviews]

the 1:n and n:n relationships troubleshooting, like once i also deleted all my places data when i was only trying to delete one user. or i got the review to append to place, but not to users...i think that was just a syntax error. for a little while i was trying to push a review string into place where the value waas defined as an objectId.

would set up routes. then add the relationship stuff, then would have to edit the post/delete/update routes to incorporate new relationships, made me a lot better at keeping track of the brackets. 

broke git. once i had my whole computer set as my git directory. lol. 10K changes pending. another time i had to remove the .git directory from the project. then red0. d000d0000ooOooooo. 


Queries
//all reviews for a place using place.id
//a place by its name
//all places with a certain tag
//all places in a city
//all places by state
//all places by state and tag
//lists all tags... could refine this.  sort/remove duplicates



//get reviews, used .populate to reference the object id of the place and show the place name. don't have to push. as long asyou push the object id, you can always use populate to get the other info.



//get places, sorted by name

//get places, populate reviews with user/review  - recursed-option






