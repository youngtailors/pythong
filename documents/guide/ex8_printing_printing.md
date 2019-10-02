# Tiếp tục về printing (2)

Chúng ta sẽ tiếp tục học cách làm việc với các định dạng string phức tạp hơn. Dạng string này sẽ làm cho code nhìn phức tạp, tuy nhiên nếu như comment cho mỗi dòng và chia thành từng phần, bạn sẽ hiểu được nó.

```py
formatter = "{} {} {} {}"

print(formatter.format(1, 2, 3, 4))
print(formatter.format("one", "two", "three", "four"))
print(formatter.format(True, False, False, True))
print(formatter.format(formatter, formatter, formatter, formatter))
print(formatter.format(
    "Try your",
    "Own text here",
    "Maybe a poem",
    "Or a song about fear"
))
```

Kết quả như sau:

```
$ python3.6 ex8.py
1 2 3 4
one two three four
True False False True
{} {} {} {} {} {} {} {} {} {} {} {} {} {} {} {}
Try your Own text here Maybe a poem Or a song about fear
```