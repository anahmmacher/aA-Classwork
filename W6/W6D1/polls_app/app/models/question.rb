# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  question   :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  poll_id    :integer          not null
#
class Question < ApplicationRecord
  validates :question, presence: true

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :AnswerChoice

  belongs_to :poll,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Poll
end
