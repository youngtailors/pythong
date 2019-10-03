# Kết hợp tham số trong câu lệnh run với input

Trong bài này chúng ta sẽ kết hợp sử dụng `argv` và `input` để hỏi người dùng một vài câu hỏi. Bạn sẽ cần điều này khi học về đọc và ghi file. Trong bài này chúng ta sẽ dùng `input` khác một chút bằng việc in ra dấu `>`. Cách này tương tự như trong một số game.

```py
from sys import argv

script, user_name = argv
prompt = '> '

print(f"Hi {user_name}, I'm the {script} script.")
print(f"I'd like to ask you a few question.")
print(f"Do you like me {user_name}?")
likes = input(prompt)

print(f"Where do you live {user_name}?")
lives = input(prompt)

print("What kind of computer do you have?")
computer = input(prompt)

print(f"""
Alright, so you said {likes} about liking me.
You live in {lives}. Not sure what where that is.
And you have a {computer} computer. Nice.
""")
```

Kết quả:

```
python3 ex14.py Aupous
Hi Aupous, I'm the code/ex14.py script.
I'd like to ask you a few question.
Do you like me Aupous?
> Yes
Where do you live Aupous?
> Vietnam
What kind of computer do you have?
> ASUS

Alright, so you said Yes about liking me.
You live in Vietnam. Not sure what where that is.
And you have a ASUS computer. Nice.
```
