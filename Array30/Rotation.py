def ArrayRotation(arr,k):
    l=len(arr)-1;
    rotated =  arr[-k:]+ arr[:-k]
    return rotated


input =[1, 3, 5, 7, 9]
result = ArrayRotation(input,1)
print(result)