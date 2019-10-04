# Chuỗi và văn bản

Ở bài trước bạn đã viết string tuy nhiên vẫn chưa biết chúng dùng để làm gì. Trong bài này, chúng ta sẽ tạo ra một loạt các biến với các chuỗi phức tạp để xem xem chúng làm được gì. Đầu tiên sẽ là một chút giải thích về chuỗi.

Chuỗi là một văn bản nhỏ bạn muốn hiển thị ra hay xuất ra ngoài chương trình. Python sẽ biết bạn muốn thứ gì đó trở thành chuỗi khi đặt `"` (nháy kép) hoặc `'` (nháy đơn) quanh văn bản. Bạn đã thấy điều này rất nhiều lần khi sử dụng print ở các bài trước.

Chuỗi có thể chứa bao nhiêu biến trong code tùy ý. Nhớ rằng biến là bất kỳ dòng code nào mà bạn đặt name `=` một giá trị. Ví dụ `types_of_people = 10` tạo ra một biến `types_of_people` và đặt nó `=` (bằng) `10`. bạn có thể đặt biến này vào bất kỳ chuỗi nào với `{types_of_people}`. Chúng ta cũng phải dùng một kiểu đặc biệt của chuỗi để "định dạng", gọi là "f-string" và nó như sau:

```py
f"some stuff here {avariable}"
f"some other stuff {anothervar}"
```

Python _cũng_ có một kiểu định dạng khác sử dụng cú pháp `.format()` được viết ở dòng thứ 17. Bạn sẽ thấy đôi khi tôi dùng nó khi muốn định dạng cho một chuỗi đã được tạo, ví dụ như khi dùng vòng lặp. Chúng ta sẽ tìm hiểu kĩ hơn về điều này sau.

Sau đây chúng ta sẽ viết một loạt các chuỗi, biến và định dạng sau đó in ra. Bạn cũng sẽ thực hành sử dụng các biến rút gọn. Lập trình viên luôn thích tiết kiệm thời gian bằng cách sử dụng các tên biến khó chịu, vì vậy hãy bắt đầu với việc đọc và viết chúng từ sớm.

```py
types_of_people = 10
x = f"There are {types_of_people} types of people."

binary = "binary"
do_not = "don't"

y = f"Those who know {binary} and those who {do_not}"

print(x)
print(y)

print(f"I said: {x}")
print(f"I also said: '{y}'")

hilarious = False
joke_evaluation = "Isn't that joke so funny?! {}"

print(joke_evaluation.format(hilarious))

w = "This is the left side of..."
e = "a string with a right side."

print(w + e)
```

Sau đây là kết quả:

```
$ python3 code/ex6.py
There are 10 types of people.
Those who know binary and those who don't.
I said: There are 10 types of people.
I also said: 'Those who know binary and those who don't.'
Isn't that joke so funny?! False
This is the left side of...a string with a right side.
```
