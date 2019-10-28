arr = []
n = int(input())
for i in range(0, n):
    x = int(input())
    arr.append(x)

a = [0] * 10000
for i in range(0, n):
    a[arr[i]] = a[arr[i]] + 1

cursor = 0
ans = 0
bound = int(n / 2)

if (n % 2 == 0):
    for i in range(9999, -1, -1):
        for j in range(0, a[i]):
            ans = ans + 2 * i
            cursor = cursor + 1
            if(cursor == bound):
                break
        if(cursor == bound):
            break
else:
    for i in range(9999, -1, -1):
        for j in range(0, a[i]):
            if (cursor == bound):
                ans = ans + i
                cursor = cursor + 1
                break
            ans = ans + 2 * i
            cursor = cursor + 1
        if (cursor > bound):
            break
# for i in range(0, int(n/2)):
#     ans = ans + 2 * arr[n - i - 1]
# if (n % 2 == 1):
#     ans = ans + arr[int(n/2) + 1]

print(ans)
