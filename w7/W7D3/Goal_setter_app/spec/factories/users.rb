FactoryBot.define do
  factory :user do
    username {Faker::JapaneseMedia::OnePiece.character}
    password {'password'}

    factory :Monkey_D_Luffy do
      username {'Monkey D. Luffy'}
    end
  end

end
