# Print (4)

Các kí tự đặc biệt `'` hay `"` khi đặt giữa một chuỗi sẽ gây ra một vấn đề lớn. Tưởng tượng bạn có một chuỗi sử dụng nháy kép và muốn đặt một dấu nháy kép ở trong chuỗi, ví dụ như `"I "understand" joe."` Khi đó Python sẽ không hiểu được vì dấu nháy kép trước từ `understand` đã kết thúc chuỗi rồi. Do đó bạn cần phải cho Python biết rằng dấu nháy kép ở trong chuỗi không thực sự là dấu nháy kép, như sau:

```py
"I am 6'2\" tall." # escape double qoute-inside string
'I am 6\'2" tall.' # escape single-quote inside string. The second way is by using triple-quotes, which is just """ and work like a string, but also can put many lines of text as you want until you type """ again. We'll also play with these.
```

```py
tabby_cat = "\tI'm tabbed in.""
persian_cat = "I'm split\non a line."
backslash_cat = "I'm \\ a \\ cat."

fat_cat = """
I'll do a list:
\t* Cat food
\t* Fishies
\t* Catnip\n\t* Grass
"""

print(tabby_cat)
print(persian_cat)
print(backslash_cat)
print(fat_cat)
```

Kết quả:

```
$python3 code/ex10.py
  I'm tabbed in.
I'm a split
on a line.
I'll do a list:
  * Cat food
  * Fish
  * Catnip
  * Grass
```

## Bảng kí tự đặc biệt

Dưới đây là toàn bộ các kí tự đặc biệt với `\` mà Python hỗ trợ.

| Escape     | What it does.                                              |
| ---------- | ---------------------------------------------------------- |
| \\         | Backslash (\)                                              |
| \'         | Single-quote (')                                           |
| \"         | Double-quote (")                                           |
| \a         | ASCII bell (BEL)                                           |
| \b         | ASCII backspace (BS)                                       |
| \f         | ASCII formfeed (FF)                                        |
| \n         | ASCII linefeed (LF)                                        |
| \N{name}   | Kí tự có tên name trong Unicode database (Chỉ Unicode) (\) |
| \r         | Cariage return (CR)                                        |
| \t         | Horizontal tab (TAB)                                       |
| \uxxxx     | Kí tự với 16-bit hex value xxxx                            |
| \Uxxxxxxxx | Kí tự với 32-bit hex value xxxxxxxx                        |
| \v         | ASCII verticle tab (VT)                                    |
| \ooo       | Kí tự với octal value ooo                                  |
| \xhh       | Kí tự với hex value hh                                     |
