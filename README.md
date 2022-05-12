




//push BOTH createdReview.user (obj id) and createdReview.review (string) into place.review

//make place.address its own schema
//delete a review....= delete from place and user.
//seed route? :\ MEH.

//security, headers, authentication, jwt, helmet, cors




# places.chill(DMV)
by: vicky p.

still under development.

MEN stizzzack.
RESTful API.
CRUD.
    ...cardinal relationships?


PLACES.CHILL(DMV)
-user
-places

n:n
-user: favorites
-place: favorite_users
1:n
-reviews: users, places

update- user add favorite place: place._id to user's favorites and user._id to place.favorite_users.
createReview- added timestamp, appends review._id to user.reviews and appends (review.review) string to place.
i spent some time trying to append the review id && review string/review into place.review. 

deleting was annoying to me. 
delete a user, so have to delete their data from places.favorite_users.
delete a place, then must remove from user.favorites, and delete all reviews of that place.

to delete review or not to delete review?
only delete review when place reviwed is deleted?
or, [delete a review, then remove from user.reviews and places.reviews]

the 1:n and n:n relationships troubleshooting, like once i also deleted all my places data when i was only trying to delete one user. or i got the review to append to place, but not to users...i think that was just a syntax error. for a little while i was trying to push a review string into place where the value waas defined as an objectId.

would set up routes. then add the relationship stuff, then would have to edit the post/delete/update routes to incorporate new relationships, made me a lot better at keeping track of the brackets. 

broke git. once i had my whole computer set as my git directory. lol. 10K changes pending. another time i had to remove the .git directory from the project. then red0. d000d0000ooOooooo. 
