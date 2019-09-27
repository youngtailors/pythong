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
          ['/guide/','Setup'],
          ['/guide/a_good_first_program' , 'A Good First Program' ],
          ['/guide/numbers_and_math' , 'Số và toán' ]
        ]
      }
    ]
  }
}