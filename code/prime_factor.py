import math


def primeFactors(n):
    if n == 1:
        return []
    if n <= 3:
        return [n]
    ans = []
    while n > 3:
        conti = False
        for i in range(2, int(math.sqrt(n)) + 1):
            if n % i == 0:
                ans.append(i)
                n = int(n / i)
                conti = True
                break
        if conti == False:
            ans.append(n)
            n = 1
    if n > 1 and n < 4:
        ans.append(n)
    return ans


print(primeFactors(4))
