num = int(input())
sum = []

for i in range(num):
    a,b=map(int,input().split())
    sum.append(a+b)
    
for i in range(len(sum)):
    print("Case #"+str(i+1)+": "+str(sum[i]))


