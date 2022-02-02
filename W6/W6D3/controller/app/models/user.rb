class User < ApplicationRecord
  validates :email, :name, presence: true, uniqueness: true
end
