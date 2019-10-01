module.exports = {
  title: 'Pythong',
  description: 'Thong Thong with Py',
  base: '/pythong/',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        title: 'Guide',
        children: [ 
          ['/guide/','Cài đặt'],
          ['/guide/a_good_first_program' , 'Chương trình đầu tiên' ],
          ['/guide/comments_and_pound_characters' , 'Comment' ],
          ['/guide/numbers_and_math' , 'Số và toán' ],
          ['/guide/variables_and_names' , 'Biến và đặt tên' ],
          ['/guide/more_variables_and_printing' , 'Thêm về biến và đặt tên' ],
          ['/guide/strings_and_text' , 'String và văn bản' ],
          ['/guide/more_printing' , 'Thêm về printing'],
        ]
      }
    ]
  }
}