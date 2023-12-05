import sys

num = int(sys.stdin.readline())
words = []

for _ in range(num):
    line = sys.stdin.readline().rstrip()  # Read a line and remove trailing newline
    words.append(line)

#중복제거
result1=set(words)
words=list(result1)

words.sort(key= lambda x : (len(x),x))

for i in words:
    print(i)

