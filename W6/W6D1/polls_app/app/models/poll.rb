# == Schema Information
#
# Table name: polls
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  creator_id :integer          not null
#
class Poll < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :questions,
  primary_key: :id,
  foreign_key: :poll_id,
  class_name: :Question

end
