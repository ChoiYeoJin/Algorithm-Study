#시리얼 넘버

import sys

n = int(sys.stdin.readline())

arr=[sys.stdin.readline().rstrip() for _ in range(n)]

def digit_sum(serial):
    sum = 0
    for i in serial:
        if i.isdigit():
            sum+=int(i)
    return sum

arr.sort(key= lambda x: (len(x),digit_sum(x),x))

for i in arr:
    print(i)

