# Input (2)

Khi sử dụng hàm `input()` bạn cũng có thể đặt vào một lời nhắc cho người dùng biết được cần phải nhập gì vào. Việc đó được làm như sau:

```py
y = input("Name? ")
```

Phần code này sẽ làm việc hiện ra nhắc nhở cho người dùng "Name? " và đặt kết quả người dùng nhập vào biến `y`. Đây cũng là cách bạn hỏi ai đó một câu hỏi và nhận lại câu trả lời. Bạn có thể viết lại code ở phần trước như sau:

```py
age = input("How old are you? ")
height = input("How tall are you? ")
weight = input("How weight are you? ")

print(f"So, you're {age} old, {height} tall and {weight} heavy.")
```

Kết quả:

```
$ python3 code/ex12.py
How old are you? 38
How tall are you? 6'2"
How weight are you? 180lbs
So, you're 38 old, 6'2" tall and 180lbs heavy.
```