# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.delete_all

b1 = Bench.create!(
    description: 'alamo square, many dogs',
    lat: 37.775769,
    lng: -122.434960
)

b2 = Bench.create!(
    description: 'UN plaza, food truck access',
    lat: 37.779760,
    lng: -122.413820
)

b3 = Bench.create!(
    description: 'Ocean Beach, gnarly waves brah',
    lat: 37.769996,
    lng: -122.511281
)   

b4 = Bench.create!(
    description: 'Grandview Park, view is grand',
    lat: 37.756284,
    lng: -122.471804
)