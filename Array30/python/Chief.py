def total_distance_in_week(X):
     return 2 * X * 5;

def main():
     T= int(input())

     for _ in range(T):
            X=int(input())

            result=total_distance_in_week(X)
            print(result);




     