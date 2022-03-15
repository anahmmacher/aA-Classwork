# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poll.destroy_all
Response.destroy_all
AnswerChoice.destroy_all

john = User.create!(
  username: 'Farmer_John23'
)

mario = User.create!(
  username: 'Itsa_me'
)

dave = User.create!(
  username: 'Davecat'
)

boba = User.create!(
  username: 'Bobalicious'
)


poll1 = Poll.create!(
  title: 'Where to eat?'
  creator_id: dave.id
)

poll2 = Poll.create!(
  title: 'who watches the watchmen?'
  creator_id: boba.id
)

