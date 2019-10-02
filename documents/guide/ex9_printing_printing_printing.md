# Print (3)

Bài này sẽ nói về cách để tạo ra chuỗi mà có thể xuống dòng. Cách đầu tiên là sử dụng kí tự `\n`, là một kí tự xuống dòng. Cách thứ 2 là bọc string trong một cặp `"""`.

```py
# Here's some new strange stuff, remember type it exactly

days = "Mon Tue Wed Thu Fri Sat Sun"
months = "Jan\nFeb\nMar\nApr\nMay\nJun\nJul\nAug"

print("Here are the days: ", days)
print("Here are the months: ", months)

print("""
There's something going on here.
With the three double-quotes.
We'll be able to type as much as we like.
Even 4 lines if we want, or 5 or 6.
""")
```

Kết quả:

```
$ python3.6 ex9.py
Here are the days: Mon Tue Wed Thu Fri Sat Sun
Here are the months: Jan
Feb
Mar
Apr
May
Jun
Jul
Aug

There's something going on here.
With the three double-quotes.
We'll be able to type as much as we like.
Even 4 lines if we want, or 5, or 6.
```