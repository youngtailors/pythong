module.exports = {
  title: "Pythong",
  description: "Thong Thong with Py",
  base: "/pythong/",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "Guide", link: "/guide/" }],
    sidebar: [
      {
        title: "Guide",
        children: [
          ["/guide/", "Cài đặt"],
          ["/guide/ex1_a_good_first_program", "Chương trình đầu tiên"],
          ["/guide/ex2_comments_and_pound_characters", "Comment"],
          ["/guide/ex3_numbers_and_math", "Số và toán"],
          ["/guide/ex4_variables_and_names", "Biến và đặt tên"],
          ["/guide/ex5_more_variables_and_printing", "Thêm về biến và đặt tên"],
          ["/guide/ex6_strings_and_text", "String và văn bản"],
          ["/guide/ex7_more_printing", "Print (1)"],
          ["/guide/ex8_printing_printing", "Print (2)"],
          ["/guide/ex9_printing_printing_printing", "Print (3)"],
          ["/guide/ex10_what_was_that", "Print (4)"],
          ["/guide/ex11_input", "Input"],
          ["/guide/ex12_prompting_people", "Input (2)"],
          [
            "/guide/ex13_parameters_unpacking_variables",
            "Tham số trong câu lệnh run"
          ],
          [
            "/guide/ex14_prompting_and_passing",
            "Kết hợp tham số trong câu lệnh run với input"
          ],
          ["/guide/ex15_reading_file", "Đọc file"],
          ["/guide/ex16_reading_and_writing_file", "Đọc và ghi file"],
          ["/guide/ex17_more_files", "Thêm về file"],
          ["/guide/ex18_names_variables_code_functions", "Hàm"],
          ["/guide/ex19_functions_and_variables", "Tham số của hàm"]
        ]
      }
    ]
  }
};
