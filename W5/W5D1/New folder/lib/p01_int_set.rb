class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if num < 0 || num > @store.length
    @store[num] = true if num > 0 && num <= @store.length    
  end

  def remove(num)
    self.store[num] = false
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num].push(num)
  end

  def remove(num)
    if self.include?(num)
      c = self[num].index(num)
      self[num].slice!(c)
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_accessor :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    #1. check if the number is in the bucket
    #2. if not, put number in
    #3. increase count by 1
    if !self[num].include?(num) 
      self[num].push(num)
      self.count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      c = self[num].index(num)
      self[num].slice!(c)
      self.count -= 1
    end
  end

  def include?(num)
    if self[num].include?(num)
      return true
    else
      return false
    end
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
