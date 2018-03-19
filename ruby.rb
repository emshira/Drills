#Practicing loops


#1. Create a while loop that outputs the square roots of the odd positive integers less than or equal to 25.

# i = 0
# numbers = []
#
# while i <= 25
#   puts "The square root of {i equal #{Math.sqrt(i)}}"
#   i += 1
# end
#
# # or
#
# i = 1
# number = []
#
# while i <= 25
#   puts "The square root of #{i} equals #{Math.sqrt(i)}"
#  i += 2
# end
#
#
#
#
#
# #2. Create a method named element_index that accepts two arguments named element and my_array. If element is in my_array, then return (not output) the index (or position) of element within my_array. If element isn't in my_array, return (not output) -1
#
# def element_index (element, my_array)
#     my_array.each_with_index do |letter, index|
#       if letter == element
#         p index
#       elsif
#         p index
#       end
#     end
#   end
#
#
#
# #    element_index("b", ["a", "b", "c"])
# #   # should output 1
# #    element_index("c", ["a", "b", "c"])
# #   # should output 2
# #
# #   element_index("hello", ["a", "b", "c"])
#   # should output -1



# Return the largest number from the array without using index lookups.
# [[1,2,3],[4,5,6]]:
#
# [[1,2,3],[4,5,6]].max.max
#
#
# Write Ruby to calculate the following:
# 1. Find the maximum number in the first array.
# 2. Find the minimum number in the last array. :
#
# [[1,2,3],[4,5,6]][1].min > [0].max




# Create a class variable named @@everyoneand set it equal to an empty array. In this array we are going to store all the instances of Person, try to do this by creating a save method. The save method should also print @@everyone out to the console, so we can see all the people that are in our storage.


class Person

  @@everyone = []
  attr_accessor :name, :hair_color

  def initialize(name, hair_color)
    @name = name
    @hair_color = hair_color
  end

  def sing
    puts " #{@name} is singing "
  end

  def save
    @@everyone << self
    puts @@everyone
  end
end
