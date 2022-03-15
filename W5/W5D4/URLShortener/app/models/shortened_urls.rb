class ShortenedUrls < ApplicationRecord

  validates :short_url, :long_url, presence: true, uniqueness: true

end