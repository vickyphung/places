places.chill

//push BOTH createdReview._id and createdReview.review (string) into place.review
//make place.address its own schema

//when deleting a place, delete reviews about that place


//security, headers, authentication, jwt, helmet, cors

n:n
-user: favorites
-place: favorite_users
1:n
-reviews: users, places

/users
update- by adding a favorite place, which adds a place to user's favorites and adds them to the place's favorite_user's list.

/places
create- address as an array
read-get by name

/reviews
create- with a timestamp, appends to user and place, appends review string to place, and review id to user.

deleting was probably the most annoying to me. delete a user, so have to delete their data from places.favorite_users, delete a place, then must remove from user.favorites, and delete all reviews of that place.

i spent some time trying to append the review id and review string/review into place.review. 

the 1:n and n:n relationships troubleshooting, like once i also deleted all my places when i tried to delete one user. or i got the review to append to place, but not to users, i think that was just a syntax error. for a little while i was trying to push a string into place where the value waas defined as an objectId.

would set up routes. then add the relationship stuff, then would have to edit the post/delete/update routes to incorporate new relationships, made me a lot better at keeping track of the brackets. 

broke git. had to remove .git directory. then red0. d000d0000ooOooooo. 
