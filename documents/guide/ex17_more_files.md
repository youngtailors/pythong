# Thêm về file

Ở bài này chúng ta sẽ sử dụng code Python để copy nội dung file sang một file khác. Code rất ngắn nhưng sẽ cho bạn thấy thêm ý tưởng về việc làm việc với file.

```py
from sys import argv
from os.path import exists

script, from_file, to_file = argv

print(f"Copying from {from_file} to {to_file}")

# we could do these two on one line, how?
in_file = open(from_file)
indata = in_file.read()

print(f"The input file is {len(indata)} bytes long")

print(f"Does the output file exist? {exists(to_file)}")
print("Ready, hit RETURN to continue, CTRL - C to abort.")
input()

out_file = open(to_file, 'w')
out_file.write(indata)

print("Alright, all done.")

out_file.close()
in_file.close()
```

Bạn có thể nhận thấy trong phần code trên đây chúng ta import một hàm `exists`. Hàm này sẽ trả về True nếu như file có tên như trong tham số truyền vào tồn tại, trả về False nếu ngược lại.

Sử dụng `import` là cách để có thể sử dụng code của những lập trình viên giỏi khác đã viết một cách miễn phí mà không cần phải viết lại.

Kết quả;

```
python3 code/ex17.py assets/ex17_from.txt assets/ex17_to.txt
Copying from assets/ex17_from.txt to assets/ex17_to.txt
The input file is 28 bytes long
Does the output file exist? True
Ready, hit RETURN to continue, CTRL - C to abort.

Alright, all done.
```
