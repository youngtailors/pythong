# Đọc và ghi file

Dưới đây là một số lệnh làm việc với file mà bạn cần nhớ

- **close**: Đóng file
- **read**: Đọc nội dung file. Bạn có thể gán kết quả cho một biến.
- **readline**: Đọc một dòng của file text.
- **truncate**: Xóa nội dung của file.
- **write('stuff')**: Viết "stuff" vào file.
- **seek(0)**: Di chuyển con trỏ đọc/viết tới vị trí đầu file.

Dưới đây là ví dụ sử dụng một trong số các lệnh trên trong code:

```py
from sys import argv

script, filename = argv

print(f"We're going to erase {filename}.")
print("If you don't want that, hit CTRL - C (^C).")
print("If you do want that, hit RETURN.")

input("?")

print("Opening the file...")
target = open(filename, 'w')

print("Truncating the file. Goodbye!")

line1 = input("line 1: ")
line2 = input("line 2: ")
line3 = input("line 3: ")

print("I'm going to write these to the file.")

target.write(line1)
target.write("\n")
target.write(line2)
target.write("\n")
target.write(line3)
target.write("\n")

print("And finally, we close it.")
target.close()
```

Đây là một file với nhiều code, nhiều nhất trong các bài học cho đến giờ. Hãy đi thật chậm, kiểm tra kĩ và làm cho nó chạy. Có một mẹo nhỏ đó là viết và chạy từng chút một. Đầu tiên hãy code cho 8 dòng đầu chạy, rồi đến 5 dòng tiếp cho đến khi hoàn thành.

Kết quả:

```
python3 code/ex16.py assets/ex16_sample.txt
We're going to erase assets/ex16_sample.txt.
If you don't want that, hit CTRL - C (^C).
If you do want that, hit RETURN.
?
Opening the file...
Truncating the file. Goodbye!
line 1: This is line one.
line 2: Let's go to line two.
line 3: The third one. Finish here.
I'm going to write these to the file.
And finally, we close it.
```

Mở file `ex16_sample.txt` và kiểm tra kết quả.
