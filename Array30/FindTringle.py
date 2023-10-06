def findTriangle(arr):
    l=len(arr)
    count=0
    for i in range(l):
        for j in range(l + 1, l):
            for k in range(j + 1, l):
                if arr[i] + arr[j] > arr[k] and arr[j] + arr[k] > arr[i] and arr[i] + arr[k] > arr[j]:
                    count += 1
    return count
    
input =[10, 21, 22, 100, 101, 200, 300]
result = findTriangle(input)
print(result)