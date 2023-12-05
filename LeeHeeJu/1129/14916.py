import sys

num = int(sys.stdin.readline())

#1 = -1, 2=2*1, 3=-1, 4=2*2, 5=5*1, 6=2*3, 7=5*1+2*1, 8=2*4, 9=5*1+2*2, 10= dp[10-5]+1
dp=[-1,-1,1,-1,2,1,3,2,4,3]

for i in range(10,num+1):
    dp.append(dp[i-5]+1)

print(dp[num])