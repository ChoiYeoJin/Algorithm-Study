#수 정렬하기2
import sys

n = int(sys.stdin.readline())
list=[]

for _ in range(n):
    n = int(sys.stdin.readline())
    list.append(n)
list.sort()
for i in list:
    print(i)
    
