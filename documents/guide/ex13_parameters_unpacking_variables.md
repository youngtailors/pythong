# Tham số trong câu lệnh run

Trong bài này chúng ta sẽ làm việc với một phương thức khác để truyền tham số vào code. Bạn đã biết cách chạy một file python `python3 ex13.py`. Trong câu lệnh này `ex13.py` được gọi là tham số. Việc làm bây giờ sẽ là viết code đề nhận vào tham số từ câu lệnh.

```py
from sys import argv
# read the WYSS section for how to run this
script, first, second, third = argv

print("The script is called:", script)
print("Your first variable is:", first)
print("Your second variable is:", second)
print("Your third variable is:", third)
```

Ở dòng 1 có sử dụng `import` là cách thêm module vào code từ danh sách các module hỗ trợ bởi Python. Thay vì cung cấp toàn bộ các tính năng, Python yêu cầu định nghĩa tính năng cần dùng để giúp chương trình nhẹ hơn đồng thời sẽ giống như là tài liệu cho các lập trình viên khác đọc code của bạn.
`argv` là `argument variable`, một cái tên rất cơ bản trong lập trình và được sử dụng ở rất nhiều ngôn ngữ. Biến này lưu các tham số truyền vào từ câu lệnh run Python. Trong các bài bạn sẽ làm việc với nó nhiều hơn để xem tác dụng của nó.
Dòng code thứ 3 đọc câu lệnh để lấy các tham số và gán vào các biến `script`, `first`, `second`, `third` để có thể làm việc với chúng.
Tiếp đó chúng ta in chúng ra như bình thường.

> **Chú ý:**
> Hãy chú ý rằng ở các bài trước bạn đã chạy câu lệnh mà không có các tham số. Nếu chỉ chạy `python3 ex13.py` thì _code sẽ chạy sai_. Hãy để ý cách mà tôi chạy câu lệnh. Điều này sẽ áp dụng mỗi khi sử dụng `argv`.

Kết quả:

```
python3 ex13.py 1 2 3
The script is called: code/ex13.py
Your first variable is: 1
Your second variable is: 2
Your third variable is: 3
```
