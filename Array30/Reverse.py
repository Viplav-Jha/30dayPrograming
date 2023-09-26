# def reverse_arry(arr):
#     left=0;
#     right=len(arr)-1;
#     while left < right:
#           arr[left], arr[right] = arr[right], arr[left]
#           left +=1
#           right -=1
   
# # Example usage
# my_array = [1, 2, 3, 4, 5]
# reverse_arry(my_array)
# print(my_array)  

my_array = [1, 2, 3, 4, 5]
reverse = my_array[::-1]

print(reverse)
