def my_min_I(array)

  sort = false

  while sort == false
    sort = true

    (0...array.length - 1).each do |i|
      if array[i] > array[i+1]
        array[i], array[i+1] = array[i+1], array[i]
        sort = false
      end
    end
  end
  array[0]

end

def my_min_II(array)
  small = array[0]

  array.each do |num|
    small = num if num < small
  end
  small
end




list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

# p  my_min_I(list)  # =>  -5
p my_min_II(list) # =>  -5