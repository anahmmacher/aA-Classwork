# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.delete_all
Review.destroy_all

b1 = Bench.create!(
    description: 'alamo square, many dogs',
    seating: 4,
    lat: 37.775769,
    lng: -122.434960,
    picture_url: 'https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'
)

b2 = Bench.create!(
    description: 'UN plaza, food truck access',
    seating: 2,
    lat: 37.779760,
    lng: -122.413820,
    picture_url: 'http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'
)

b3 = Bench.create!(
    description: 'Ocean Beach, gnarly waves brah',
    seating: 3,
    lat: 37.769996,
    lng: -122.511281,
    picture_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
)   

b4 = Bench.create!(
    description: 'Grandview Park, view is grand',
    seating: 3,
    lat: 37.756284,
    lng: -122.471804,
    picture_url: 'https://i0.wp.com/newcityadventures.com/wp-content/uploads/2018/03/Grandview-Park-Top.jpg?resize=800%2C445&ssl=1'
)

Review.create(author_id: 4, bench_id: b1.id, body: "very good sits", rating: 5)
Review.create(author_id: 4, bench_id:  b2.id, body: "its okay sit", rating: 3)
Review.create(author_id: 4, bench_id:  b3.id, body: "sat on a needle, but great view", rating: 2)
Review.create(author_id: 4, bench_id:  b4.id, body: "lovely view", rating: 4)
