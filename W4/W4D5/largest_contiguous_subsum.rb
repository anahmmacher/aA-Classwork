def lcs(array)
arr = []

(0...array.length).each do |j|
  (j...array.length).each do |i|
    arr << array[j..i]
  end
end

sum_array = arr.map {|sum| sum.sum}

sum_array.max
# i = ending index, j = starting index 
end

list = [2, 3, -6, 7, -6, 7]

p lcs(list)