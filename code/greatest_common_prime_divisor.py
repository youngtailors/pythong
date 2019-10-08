import math


def greatestCommonPrimeDivisor(a, b):
    gcd = greatestCommonDivisor(a, b)
    if (gcd == 1):
        return -1
    else:
        return greatestCommondPrimeDiv(gcd)


def greatestCommonDivisor(a, b):
    if a % b == 0:
        return b
    else:
        return greatestCommonDivisor(b, a % b)


def greatestCommondPrimeDiv(n):
    if 1 < n and n < 4:
        return n
    else:
        while n > 3:
            conti = False
            for i in range(2, int(math.sqrt(n)) + 1):
                if n % i == 0:
                    n = int(n / i)
                    conti = True
                    break
            if conti == False:
                return n
        return n
