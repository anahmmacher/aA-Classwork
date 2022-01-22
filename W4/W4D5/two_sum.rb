def bad_two_sum?(array, target)

  array.each_with_index do |num1, i1|
    array.each_with_index do |num2, i2|
      return true if num1 + num2 == target && i2 > i1
    end
  end
  return false
end

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false