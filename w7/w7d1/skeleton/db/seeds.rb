# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

cat1 = Cat.create!(birth_date: "2020-01-20", color: "black", name: "Drogo", sex: "M", description: "best cat ever")
cat2 = Cat.create!(birth_date: "1001-01-01", color: "black", name: "Mimi", sex: "F", description: "Immortal kitty")
cat3 = Cat.create!(birth_date: "1994-11-08", color: "white", name: "Mango", sex: "M", description: "I like mangos")
cat4 = Cat.create!(birth_date: "1997-02-22", color: "white", name: "Neko", sex: "F", description: "Meow")
cat5 = Cat.create!(birth_date: "2010-12-25", color: "orange", name: "Fluffy", sex: "M", description: "^_^")
cat6 = Cat.create!(birth_date: "2018-07-17", color: "brown", name: "Goldy", sex: "F", description: "Bling Bling")