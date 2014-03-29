# Seating Chart app
# For wedding planning
# using Angular.JS and Facebook API


written by: kateodell
Product Manager: RunnerMom

This seating-chart app creates an optimal seating chart for an event in Facebook.

The app retrieves an event from Facebook, along with attending users and their information (Name, Photo, Hometown).

We create a hash of users by hometown {hometown : [user0, user1, ...]}

Then, we create Table seatings by seating users with the same hometown together.
