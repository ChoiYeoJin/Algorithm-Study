n = int(input())
# num=[0,1]

# for i in range(2,n+1):
#     num.append(num[i-1]+num[i-2]);

# print(num[n])

# F0=0,F1=1

# Fn=Fn-1+Fn-2


def fibo(n):
    if n <= 1:
        return n
    return fibo(n-1)+fibo(n-2)

print(fibo(n))