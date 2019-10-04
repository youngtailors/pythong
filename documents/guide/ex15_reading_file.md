# Đọc file

Trong bài này chúng ta sẽ nói về việc đọc dữ liệu từ file. Hãy làm bài này thật cẩn thận và kiểm tra thật kĩ xem có làm đúng theo hướng dẫn không. Làm việc với file cũng là một cách rất dễ dàng để _xóa sổ toàn bộ công sức của bạn_ nếu như không cẩn thận.

Chúng ta sẽ phải viết 2 file. Một là file script `ex15.py` để run, 1 file khác `ex15_sample.txt` để lưu dữ liệu. Nội dung của file text như sau:

```
This is stuff I typed into a file.
It is really cool stuff.
Lots and lots of fun to have in here.
```

Việc cần làm là mở file này trong code và in ra. Tuy nhiên chúng ta sẽ không `hard code` tên _ex15_sample.txt_ trong code. "Hard coding" có nghĩa là đặt một số thông tin trực tiếp trong source code mà lẽ ra chúng nên được nhập vào từ người dùng dưới dạng string. Điều này là không tốt vì chúng ta có thể sẽ muốn load một file khác sau đó. Cách giải quyết đó là sử dụng _argv_ hoặc _input_ để yêu cầu người dùng nhập vào tên file.

```py
from sys import argv

script, filename = argv

txt = open(filename)

print(f"Here 's your file {filename}:")
print(txt.read())

print("Type the filename again:")
file_again = input("> ")

txt_again = open(file_again)

print(txt_again.read())
```

Kết quả:

```
python3 code/ex15.py assets/ex15_sample.txt
Here 's your file assets/ex15_sample.txt:
This is stuff I typed into a file.
It is really cool stuff.
Lots and lots of fun to have in here.
Type the filename again:
> assets/ex15_sample.txt
This is stuff I typed into a file.
It is really cool stuff.
Lots and lots of fun to have in here.
```
