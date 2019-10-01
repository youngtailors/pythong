# Thêm về biến và printing

Giờ chúng ta sẽ làm quen với các kiểu của biến khác và in chúng ra. Lần này sẽ có một khái niệm mới được gọi là "format string". Mỗi khi đặt kí tự " (nháy kép) quanh một đoạn text sẽ tạo ra một string. Một string là cách bạn tạo ra một thứ mà chương trình sẽ trả về cho con người. Bạn in nó ra, lưu vào file, gửi lên web server, đó là toàn bộ quá trình.

String rất dễ sử dụng và hữu ích. Trong bài này, bạn sẽ học cách tạo ra một string mà có nhúng các biến. Việc này được thực hiện bằng cách bắt đầu chuỗi với chữ cái `f` với nghĩa "format" đặt biến vào giữa `{}`, ví dụ như `f"Hello {somevar}"` nhằm mục đích nói với Python "Này, đây là một format string, hãy đặt biến này vào đó."

Như thường lệ, type phần code sau đây dù bạn có hiểu hay không và hãy chắc là chúng chính xác tuyệt đối.

```py
my_name = 'Zed A. Shaw'
my_age= 35 #notalie
my_height = 74 # inches
my_weight = 180 # lbs
my_eyes = 'Blue'
my_teeth = 'White'
my_hair = 'Brown'

print(f"Let's talk about {my_name}")
print(f"He's {my_height} inches tall.")
print(f"He's {my_weight} pounds heavy.")
print("Actually that's not too heavy.")
print(f"He's got {my_eyes} eyes and {my_hair} hair.")
print(f"His teeth are usually {my_teeth} depending on the coffee.")

# this line is tricky, try to get it exactly right
total = my_age + my_height + my_weight
print(f"If I add {my_age}, {my_height},and {my_weight} I get {total}.")
```

Đây là output nên có:

```
$ python ex5.py
Let's talk about Zed A. Shaw.
He's 74 inches tall.
He's 180 pounds heavy.
Actually that's not too heavy.
He's got Blue eyes and Brown hair.
His teeth are usually White depending on the coffee.
If I add 35, 74, and 180 I get 289.
```