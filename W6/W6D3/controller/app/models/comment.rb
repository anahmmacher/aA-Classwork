class Comment < ApplicationRecord

  belongs_to :user,
  primary_key: :id,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :artwork,
  primary_key: :id,
  foreign_key: :artwork_id,
  class_name: :Artwork

  has_many :likes,
  as: :likeable
end
