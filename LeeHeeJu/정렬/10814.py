#나이순 정렬
import sys

n = int(sys.stdin.readline());

people=[list(sys.stdin.readline().rstrip().split(" ")) for _ in range(n)]
people.sort(key=lambda x: int(x[0])) 
for person in people:
    print(" ".join(person))

# age={}

# for _ in range(n):
#     key,value = sys.stdin.readline().rstrip().split(" ")
#     age[key] = value

# print(sorted(age.items())
# )


