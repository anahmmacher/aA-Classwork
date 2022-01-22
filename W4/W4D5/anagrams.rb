def first_anagram?(str1, str2)

  array = str1.split("").permutation.to_a

  array.each do |ele|
    return true if ele == str2.split("")
  end

  return false
  
end

def second_anagram?(str1, str2)
  if str1.length == str2.length
    str1.each_char do |char|
      i = str2.index(char)
      str2.slice!(i) if i != nil
    end
    str2.length == 0
  end
  false
end

def third_anagram?(str1, str2)
  str1.split("").sort == str2.split("").sort
end

def fourth_anagram?(str1, str2)
  str1.length == str2.length

  hash1 = Hash.new(0)
  # hash2 = Hash.new(0)

  str1.each_char { |char| hash1[char] += 1 }
  # str2.each_char { |char| hash2[char] += 1 }

  str2.each_char { |char| hash1[char] -= 1 }
  hash1.values.all? { |val| val == 0 }

  # hash1 == hash2
end

p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true
p fourth_anagram?("elvis", "live")     #=> false
