require 'rails_helper'

RSpec.describe User, type: :model do

  #it {should validate_presence_of(:user)}
end

describe "#is_password?" do
  let!(:user){create(:user)}

  context "with a valid password" do
    it "should return true" do
      expect(user.is_password?("password")).to be true
    end
  end

  context "with an invalid password" do
    it "should return false" do
      expect(user.is_password?("assword")).to be false
    end
  end
end

describe 'password hashing' do
  it 'does not save password in database' do
    #line below is same as FactoryBot.create(:user, username: 'Monkey D. Luffy')
    create(:Monkey_D_Luffy)
    user = User.find_by(username: 'Monkey D. Luffy')
    expect(user.password).not_to eq("password")
  end

  it 'hashes password using BCrypt' do
  expect(BCrypt::Password).to receive(:create).with('abcdef')
  FactoryBot.build(:user, password:'abcdef') #Returns a user instance that is not saved
  end
end