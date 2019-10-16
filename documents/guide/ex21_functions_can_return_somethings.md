# Hàm trả về giá trị

Khi làm việc với hàm, chúng ta có thể sử dụng lệnh `return` để xác định giá trị trả về của hàm.

```py
def add(a, b):
    print(f"Adding {a} + {b}")
    return a + b


def subtract(a, b):
    print(f"Subtracting {a} - {b}")
    return a - b


def multiply(a, b):
    print(f"Multiplying {a} * {b}")
    return a * b


def divide(a, b):
    print(f"Dividing {a} / {b}")
    return a / b


print("Let's do some math with just functions!")

age = add(30, 5)
height = subtract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)

print(f"Age: {age}, Height: {height}, Weigt: {weight}, IQ: {iq}")

what = add(age, subtract(height, multiply(weight, divide(iq, 2))))

print("That becomes: ", what, "Can you do it by hand?")
```

Kết quả:

```
python3 code/ex21.py
Let's do some math with just functions!
Adding 30 + 5
Subtracting 78 - 4
Multiplying 90 * 2
Dividing 100 / 2
Age: 35, Height: 74, Weigt: 180, IQ: 50.0
Dividing 50.0 / 2
Multiplying 180 * 25.0
Subtracting 74 - 4500.0
Adding 35 + -4426.0
That becomes:  -4391.0 Can you do it by hand?
```
