def first_anagram?(str1, str2)

  array = str1.split("").permutation.to_a

  array.each do |ele|
    return true if ele == str2.split("")
  end

  return false
  
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true
# p first_anagram?("cat", "dog") #=>


def second_anagram?(str1, str2)
  if str1.length == str2.length
    str1.each_char do |char|
    i = str2.index(char)
      str2.slice!(i) if i != nil
    end
  end
  str2.length == 0
end

p second_anagram?("gizmo", "sally")    #=> false
p second_anagram?("elvis", "lives")    #=> true
p second_anagram?("cat", "dog") #=>
p second_anagram?("elvis", "live")    #=> true
