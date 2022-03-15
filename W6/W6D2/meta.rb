require 'byebug'

class Pet
  def initialize(name)
    @name = name
  end
  
  @@total_pets = 0

  def self.add_pet
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end
end

class Cat < Pet
  def initialize(name)
    super(name)
    self.class.superclass.add_pet
  end
end

class Dog < Pet
  puts self

  def self.doggie_things
    puts self
  end

  def who_am_i?
    puts self
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.superclass.add_pet
  end

  def self.create_tricks(*tricks)
    puts "inside create tricks"
    puts self #GUESS: 1.Dog 
    tricks.each do |trick|
      puts "inside each looooooop"
      puts self #GUESS: 1.Dog CHECK    2.Tricks X 3.trick X
      define_method(trick) do |num = 1|
        puts "inside define method"
        puts self #GUESS: 1.Dog X  not excecuted => dog Instance
        num.times do
          puts "#{trick}ing!" 
        end
      end
    end
  end

  # def sleep
  #   puts "sleeping!"
  # end

  # def eat
  #   puts "eating!"
  # end

  # def drink
  #   puts "drinking!"
  # end

  # def trick
  #   puts "BACK FLIP!!"
  # end

  # def juggle(thing, num)
  #   num.times do
  #     puts "juggling #{thing}!"
  #   end
  # end

  def do_this_then_that(this, that)
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args) #collect into an array
    self.send(this, *args)  #spread arr to comma separated list
  end

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end


def self.my_attr_reader(*methods)
  #iterate through methods
  #for each method name, define a new method based on that name
  #inside of block, grab instance variable with same name as the method name
end