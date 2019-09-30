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
          ['/guide/a_good_first_program' , 'Chương trình đầu tiên'],
          ['/guide/comments_and_pound_characters' , 'Comment'],
          ['/guide/more_printing' , 'Thêm về printing'],
        ]
      }
    ]
  }
}