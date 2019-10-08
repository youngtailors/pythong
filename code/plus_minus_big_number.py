def BigNumber(value1, value2, operator):
    number1 = value1.split('.')
    number2 = value2.split('.')

    if len(number1) == 1:
        number1 = [value1, '0']
    if len(number2) == 1:
        number2 = [value2, '0']

    len1 = len(number1[0])
    len2 = len(number2[0])
    lendec1 = len(number1[1])
    lendec2 = len(number2[1])

    if len1 > len2:
        for i in range(0, len1 - len2):
            number2[0] = '0' + number2[0]
    else:
        for i in range(0, len2 - len1):
            number1[0] = '0' + number1[0]

    if lendec1 > lendec2:
        for i in range(0, lendec1 - lendec2):
            number2[1] = number2[1] + '0'
    else:
        for i in range(0, lendec2 - lendec1):
            number1[1] = number1[1] + '0'

    dec = ''
    num = ''
    temp = 0
    if operator == '+':
        for i in range(len(number1[1]) - 1, -1, -1):
            sum = int(number1[1][i]) + int(number2[1][i]) + temp
            temp = int(sum / 10)
            dec = str(sum % 10) + dec

        for i in range(len(number1[0]) - 1, -1, -1):
            sum = int(number1[0][i]) + int(number2[0][i]) + temp
            temp = int(sum / 10)
            num = str(sum % 10) + num
    else:
        for i in range(len(number1[1]) - 1, -1, -1):
            sum = int(number1[1][i]) - int(number2[1][i]) - temp
            if sum < 0:
                temp = 1
            else:
                temp = 0
            dec = str(sum % 10) + dec

        for i in range(len(number1[0]) - 1, -1, -1):
            sum = int(number1[0][i]) - int(number2[0][i]) - temp
            if sum < 0:
                temp = 1
            else:
                temp = 0
            num = str(sum % 10) + num
    if temp > 0:
        num = str(temp) + num

    while len(dec) > 0 and dec[len(dec) - 1] == '0':
        dec = dec[:-1]

    while len(num) > 1 and num[0] == '0':
        num = num[1:]

    if dec == '':
        return num
    else:
        return num + '.' + dec


print(BigNumber('0', '0', '+'))
