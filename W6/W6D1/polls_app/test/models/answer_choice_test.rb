# == Schema Information
#
# Table name: answer_choices
#
#  id             :bigint           not null, primary key
#  answer_choices :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  question_id    :integer          not null
#
require 'test_helper'

class AnswerChoiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
