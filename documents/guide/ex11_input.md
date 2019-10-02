# Input

Phần lớn các phần mềm làm công việc sau đây:

1. Nhận input từ một người dùng
2. Thay đổi input
3. In ra output để thể hiện sự thay đổi

```py
print("How old are you?", end=' ' )
age = input()
print("How tall are you?", end=' ')
height = input()
print("How much do you weight?", end=' ')
weight = input()

print(f"so, you're {age} old, {height} tall and {weight} heavy.")
```

> **Chú ý**
  Đặt `end=' '` ở cuối mỗi *print* line để không xuống dòng mà nối tiếp sang dòng thứ hai.

Kết quả:

```
$ python3 ex11.py
How old are you? 38
How tall are you? 6'2"
How much do you weight? 180lbs
So, you are 38 old, 6'2" tall and 180lbs heavy.
```