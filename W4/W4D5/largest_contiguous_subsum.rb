def lcs(array)
  arr = []

  (0...array.length).each do |j|
    (j...array.length).each do |i|
      arr << array[j..i]
    end
  end

  sum_array = arr.map {|sum| sum.sum}

  sum_array.max 
end


def lcs2(array)
  total_sum = array[0]
  constant_sum = 0
  array.each do |current|
    constant_sum += current
  
    if constant_sum > total_sum
      total_sum = constant_sum
    end

    constant_sum = 0 if constant_sum < 0
  end
  total_sum
end



list = [2, 3, -6, 0, 7, -6, 0, 7] # 7
p lcs2(list)

arr = [-3, -1, -4, -7, -1, 0, -1, -3]
p lcs2(arr)

# current = 7 [2, 3, -6, 7, -6, 7]
# largest = 7  [2, 3, -6, 7, -6, 7]
# [7, -6, 7] => 8