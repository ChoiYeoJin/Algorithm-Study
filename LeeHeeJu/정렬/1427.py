#정렬
import sys

data = list((sys.stdin.readline().rstrip()))

data.sort(reverse=True)


print("".join(data))