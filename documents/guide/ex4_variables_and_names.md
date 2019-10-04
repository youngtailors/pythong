# Biến và đặt tên

Giờ thì bạn đã có thể in các thứ ra và có thể làm việc với các phép toán. Bước tiếp theo là học về biến. Trong lập trình, biến chính là một cái tên đại diện cho một thứ gì đó để bạn có thể sử dụng nó trong coding. Lập trình viên sử dụng các tên biến để làm cho code đọc giống như Tiếng Anh và một chút gì đó dễ nhớ. Nếu như không đặt tên tốt, họ có thể sẽ quên và mất nhiều thời gian hơn để có thể đọc hiểu code sau đó.

Nếu như có khó khăn với phần này, hãy nhớ những mẹo bạn đã được dạy về việc tìm điểm khác biệt và tập trung vào chi tiết:

1. Viết comment trước mỗi dòng code để giải thích xem nó là gì trong tiếng Anh
2. Đọc lại file .py
3. Đọc lớn file .py, đọc cả những ký tự

```py
cars = 100
space_in_a_car = 4.0
drivers = 30
passengers = 90
cars_not_driven = cars - drivers
cars_driven = drivers
carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven

print("There are", cars, "cars available.")
print("There are only", drivers, "drivers available.")
print("There will be", cars_not_driven, "empty cars today.")
print("We can transport", carpool_capacity, "people today.")
print("We have", passengers, "to carpool today.")
print("We need to put about", average_passengers_per_car, "in each car.")
```

> **NOTE:** Kí tự \_ trong space_in_a_car được gọi là kí tự gạch dưới. Tự tìm cách làm thế nào để viết nhá... Chúng ta sẽ dùng kí tự này rất nhiều để tách các từ trong tên biến.

Đây sẽ là kết quả mà bạn nên thấy:

```
$ python3 code/ex4.py
There are 100 cars available.
There are only 30 drivers available.
There will be 70 empty cars today.
We can transport 120.0 people today.
We have 90 to carpool today.
We need to put about 3 in each car.
```
