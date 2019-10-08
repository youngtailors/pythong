def longMultiplication(a, b):
    sumArr = []
    ans = 0

    lenB = len(b)

    maxLen = 0

    for i in range(lenB - 1, -1, -1):
        el = ''
        for j in range(0, lenB - 1 - i):
            el = el + '0'
        smallMul = smallMultiplication(a, int(b[i]))
        # print(smallMul)
        el = smallMul[0] + el
        if len(el) > maxLen:
            maxLen = len(el)
        ans = ans + smallMul[1]
        sumArr.append(el)
    # print(sumArr)

    for i in range(0, lenB):
        while len(sumArr[i]) < maxLen:
            sumArr[i] = '0' + sumArr[i]

    temp = 0
    for i in range(maxLen - 1, -1, -1):
        smallSum = 0
        for j in range(0, lenB):
            smallSum = smallSum + int(sumArr[j][i])
        smallSum = smallSum + temp
        temp = int(smallSum / 10)
        if temp > 0:
            ans = ans + 1
    return ans


def smallMultiplication(a, n):
    ans = ''
    carry = 0
    temp = 0
    for i in range(len(a) - 1, -1, -1):
        x = int(a[i]) * n + temp
        temp = int(x / 10)
        if temp > 0:
            carry = carry + 1
        ans = str(x % 10) + ans
    if temp > 0:
        ans = str(temp) + ans
    return [ans, carry]


# print(longMultiplication('987654321', '54321'))
