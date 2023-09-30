def find_second_largest(arr):
    if len(arr) < 2:
        return "List has fewer than two elements"
        
    largest = second_largest = max(arr[0], arr[1])
    
    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num < largest:
            second_largest = num
    
    return second_largest , largest

my_list = [3, 1, 5, 7, 2, 6]
second_largest = find_second_largest(my_list)
print(second_largest)
