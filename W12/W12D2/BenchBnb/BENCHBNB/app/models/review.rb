class Review < ApplicationRecord
    validates :bench_id, :author_id, :rating, presence: true
    validates :rating, inclusion: { in: (1..5)}

    belongs_to :bench,
        foreign_key: :bench_id,
        class_name: :Bench
        
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
