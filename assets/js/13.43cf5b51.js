(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(t,n,s){"use strict";s.r(n);var a=s(0),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ham"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ham","aria-hidden":"true"}},[t._v("#")]),t._v(" Hàm")]),t._v(" "),s("p",[t._v("Trong bài này tôi sẽ giới thiệu về hàm. Mỗi lập trình viên đều có những ý kiến khác nhau về cách mà các hàm hoạt động và chúng có thể làm gì. Tuy nhiên tôi sẽ giải thích về hàm một cách đơn giản nhất.")]),t._v(" "),s("p",[t._v("Một hàm làm 3 việc sau:")]),t._v(" "),s("ol",[s("li",[t._v("Đặt tên cho một đoạn code giống như cách đặt tên biến cho chuỗi và số.")]),t._v(" "),s("li",[t._v("Nhận vào tham số giống như cách sử dụng "),s("code",[t._v("argv")])]),t._v(" "),s("li",[t._v("Tạo ra đoạn code hay những đoạn lệnh nhỏ sử dụng 1 và 2")])]),t._v(" "),s("p",[t._v("Trong Python, hàm được tạo bằng từ "),s("code",[t._v("def")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this one is like your script with argv")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"arg1: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", arg2: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ok, that *arg is actually pointless, we can just do this")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_two_again")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"arg1: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", arg2: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this just takes one argument")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_one")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"arg1: ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this one takes no arguments")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_none")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I got nothin\'."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nprint_two"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Zed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shaw"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprint_two_again"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Zed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shaw"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprint_one"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"First!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprint_none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Hãy xem xét hàm đầu tiên:")]),t._v(" "),s("ol",[s("li",[t._v("Báo với Python chúng ta muốn tạo một hàm sử dụng "),s("code",[t._v("def")]),t._v(" cho "),s("em",[t._v("define")])]),t._v(" "),s("li",[t._v("Ngay sau "),s("code",[t._v("def")]),t._v(" là tên của hàm. Tên của hàm có thể là bất kỳ cái tên nào bạn muốn, tuy nhiên nên đặt một tên ngắn thể hiện chức năng của hàm.")]),t._v(" "),s("li",[s("code",[t._v("*args")]),t._v(" tương tự như tham số "),s("code",[t._v("argv")]),t._v(" tuy nhiên được dùng cho hàm. Tham số phải được đặt trong dấu ngoặc đơn "),s("code",[t._v("()")]),t._v(" để Python có thể hiểu.")]),t._v(" "),s("li",[t._v("Kết thúc dòng khai báo hàm với dấu "),s("code",[t._v(":")]),t._v(" và bắt đầu thụt đầu dòng ở các dòng sau")]),t._v(" "),s("li",[t._v("Sau dấu "),s("code",[t._v(":")]),t._v(", tất cả các dòng được thụt đầu dòng 4 dấu cách `` sẽ được xác định là phần code trong "),s("em",[t._v("print_two")]),t._v(". Ở đây dòng đầu tiên có nhiệm vụ giải nén biến "),s("code",[t._v("*argv")]),t._v(" thành các biến nhỏ hơn.")]),t._v(" "),s("li",[t._v("Để thể hiện các hàm làm gì chúng ta sẽ in các tham số ra như trong code.")])]),t._v(" "),s("p",[t._v("Vấn đề với hàm "),s("code",[t._v("print_two")]),t._v(" là nó không phải cách dễ nhất để tạo ra một hàm. Trong Python chúng ta có thể bỏ qua bước giải nén tham số và sử dụng tên của các biến chúng ta muốn dùng ngay trong phần khai báo biến. Đó là cách mà hàm "),s("code",[t._v("print_two_again")]),t._v(" làm việc.")]),t._v(" "),s("p",[t._v("Tiếp đó là ví dụ về việc tạo một hàm mà chỉ có một tham số. Cuối cùng là hàm mà không có tham số.")]),t._v(" "),s("p",[t._v("Kết quả:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ python3 code/ex18.py\narg1: Zed, arg2: Shaw\narg1: Zed, arg2: Shaw\narg1: First!\nI got nothin'.\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);