users = ["Dave", "John", "Sarah"]

data = ["Dave", 42, True]

emptylist = []

print("Dave" in emptylist)

print(users[0:2])

print(users.index("Sarah"))

users.append("Elsa")
print(users)

users += ["Jason"]
print(users)

users += "Demi"
print(users)

# users.extend(data)
# print(users)

# Adds to the list in a certian spot
users.insert(0, "King")
print(users)


users[2:2] = ["Eddie", "Alex"]
print(users)

# Replace objects in list
users[1:3] = ["RObert", "JPJ"]
print(users)

users.remove("JPJ")
print(users)

# Removes Object from the end of a list
print(users.pop())

del users[1]
print(users)

# del data
data.clear()
print(data)

users.sort()
print(users)


users.sort(key=str.lower)
print(users)

nums = [3, 5, 6, 2, 7]
nums.reverse()
print(nums)

# nums.sort(reverse=True)
# print(nums)

print(sorted(nums, reverse=True))
print(nums)

numscopy = nums.copy()
mynums = list(nums)
mycopy = nums[:]
print(numscopy)
print(mynums)
print(mycopy)

print(type(nums))

mylist = list([1, "Neal", True])
print(mylist)


# Tuples

mytuple = tuple(("David", 32, True))
print(mytuple)