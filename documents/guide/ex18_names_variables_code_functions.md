# Hàm

Trong bài này tôi sẽ giới thiệu về hàm. Mỗi lập trình viên đều có những ý kiến khác nhau về cách mà các hàm hoạt động và chúng có thể làm gì. Tuy nhiên tôi sẽ giải thích về hàm một cách đơn giản nhất.

Một hàm làm 3 việc sau:

1. Đặt tên cho một đoạn code giống như cách đặt tên biến cho chuỗi và số.
2. Nhận vào tham số giống như cách sử dụng `argv`
3. Tạo ra đoạn code hay những đoạn lệnh nhỏ sử dụng 1 và 2

Trong Python, hàm được tạo bằng từ `def`.

```py
# this one is like your script with argv
def print_two(*args):
    arg1, arg2 = args
    print(f"arg1: {arg1}, arg2: {arg2}")

# ok, that *arg is actually pointless, we can just do this


def print_two_again(arg1, arg2):
    print(f"arg1: {arg1}, arg2: {arg2}")

# this just takes one argument


def print_one(arg1):
    print(f"arg1: {arg1}")

# this one takes no arguments


def print_none():
    print("I got nothin'.")


print_two("Zed", "Shaw")
print_two_again("Zed", "Shaw")
print_one("First!")
print_none()
```

Hãy xem xét hàm đầu tiên:

1. Báo với Python chúng ta muốn tạo một hàm sử dụng `def` cho _define_
2. Ngay sau `def` là tên của hàm. Tên của hàm có thể là bất kỳ cái tên nào bạn muốn, tuy nhiên nên đặt một tên ngắn thể hiện chức năng của hàm.
3. `*args` tương tự như tham số `argv` tuy nhiên được dùng cho hàm. Tham số phải được đặt trong dấu ngoặc đơn `()` để Python có thể hiểu.
4. Kết thúc dòng khai báo hàm với dấu `:` và bắt đầu thụt đầu dòng ở các dòng sau
5. Sau dấu `:`, tất cả các dòng được thụt đầu dòng 4 dấu cách `` sẽ được xác định là phần code trong _print_two_. Ở đây dòng đầu tiên có nhiệm vụ giải nén biến `*argv` thành các biến nhỏ hơn.
6. Để thể hiện các hàm làm gì chúng ta sẽ in các tham số ra như trong code.

Vấn đề với hàm `print_two` là nó không phải cách dễ nhất để tạo ra một hàm. Trong Python chúng ta có thể bỏ qua bước giải nén tham số và sử dụng tên của các biến chúng ta muốn dùng ngay trong phần khai báo biến. Đó là cách mà hàm `print_two_again` làm việc.

Tiếp đó là ví dụ về việc tạo một hàm mà chỉ có một tham số. Cuối cùng là hàm mà không có tham số.

Kết quả:

```
$ python3 code/ex18.py
arg1: Zed, arg2: Shaw
arg1: Zed, arg2: Shaw
arg1: First!
I got nothin'.
```
