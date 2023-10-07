def leader_array(arr):
    n = len(arr)
    leaders = []
    max_right = arr[n - 1]  # Initialize the maximum from the right side

    leaders.append(max_right)  # The last element is always a leader

    for i in range(n - 2, -1, -1):
        if arr[i] > max_right:
            leaders.append(arr[i])
            max_right = arr[i]  # Update the maximum from the right side

    return leaders[::-1]  # Reverse the list to get the correct order

input_list = [16, 17, 4, 3, 5, 2]
result = leader_array(input_list)
print(result)
