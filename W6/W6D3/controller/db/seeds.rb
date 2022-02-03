# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{ username: "PauloBN"}, {username: "TayTay"}, {username: "BigMike"}, {username: "ChrisPBacon"}, {username: "SamIam"}])

artworks = Artwork.create([{title: "Drogo", image_url: "drogo.com", artist_id: 1},
{title: "live from vegas", image_url: "airbnb.com", artist_id: 5}, {title: "maple syrup still-life", image_url: "canada.ca", artist_id: 3}])

artwork_shares = ArtworkShare.create([{artwork_id: 2, viewer_id: 1}, {artwork_id: 3, viewer_id: 4}, {artwork_id: 1, viewer_id: 5},
{artwork_id: 1, viewer_id: 3}])

comments = Comment.create([{body: "Nice!", commenter_id: 4 , artwork_id: 1}, {body: "Needs more maple syrup.", commenter_id: 3 , artwork_id: 3}, 
{body: "Do you need Ubuntu help?", commenter_id: 2 , artwork_id: 2}])