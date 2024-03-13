let allVideos = [
   {
      name: "Mãi mãi một tình yêu - Đan Trường",
      src: "Mãi mãi một tình yêu - Đan Trường",
      id: "vid_1"
   },
   {
      name: "Nỗi Đau Xót Xa - Minh Vương",
      src: "Nỗi Đau Xót Xa - Minh Vương",
      id: "vid_2"
   },
   {
      name: "Anh Đã Hiểu Tình Em - Lưu Gia Bảo",
      src: "Anh Đã Hiểu Tình Em - Lưu Gia Bảo",
      id: "vid_3"
   },
   {
      name: "Anh Thích Em Như Xưa - Châu Khải Phong",
      src: "Anh Thích Em Như Xưa - Châu Khải Phong",
      id: "vid_4"
   },
   {
      name: "Biết Tìm Đâu -Tuấn Hưng",
      src: "Biết Tìm Đâu -Tuấn Hưng",
      id: "vid_5"
   },
   {
      name: "Chi Vi Tôi không Tin - Lê Dũng",
      src: "Chi Vi Tôi không Tin - Lê Dũng",
      id: "vid_6"
   },
   {
      name: "Chiếc Khăn Gió Ấm - Khánh Phương",
      src: "Chiếc Khăn Gió Ấm - Khánh Phương",
      id: "vid_7"
   },
   {
      name: "Con đường mưa - Cao Thái Sơn",
      src: "Con đường mưa - Cao Thái Sơn",
      id: "vid_8"
   },
   {
      name: "Đàn Ông Không Được Quên...Hết Tình Còn Nghĩa - Ưng Hoàng Phúc",
      src: "Đàn Ông Không Được Quên...Hết Tình Còn Nghĩa - Ưng Hoàng Phúc",
      id: "vid_9"
   },
   {
      name: "Dáng em - Nguyễn Phi Hùng",
      src: "Dáng em - Nguyễn Phi Hùng",
      id: "vid_10"
   },
   {
      name: "Dĩ Vãng Cuộc Tình - Tuấn Hưng",
      src: "Dĩ Vãng Cuộc Tình - Tuấn Hưng",
      id: "vid_11"
   },
   {
      name: "Giọt Nắng Cuối Chiều - Ưng Hoàng Phúc",
      src: "Giọt Nắng Cuối Chiều - Ưng Hoàng Phúc",
      id: "vid_12"
   },
   {
      name: "Hai Ba Năm - Phạm Trưởng",
      src: "Hai Ba Năm - Phạm Trưởng",
      id: "vid_13"
   },
   {
      name: "Hứa Thật Nhiều...Thất Hứa Thật Nhiều - Ưng Hoàng Phúc",
      src: "Hứa Thật Nhiều...Thất Hứa Thật Nhiều - Ưng Hoàng Phúc",
      id: "vid_14"
   },
   {
      name: "Lạc Đường - Phạm Trưởng",
      src: "Lạc Đường - Phạm Trưởng",
      id: "vid_15"
   },
   {
      name: "Lỗi Lầm - Kiwi Ngô Mai Trang ft Phan Đình Tùng",
      src: "Lỗi Lầm - Kiwi Ngô Mai Trang ft Phan Đình Tùng",
      id: "vid_16"
   },
   {
      name: "Lời Nguyền - Akira Phan",
      src: "Lời Nguyền - Akira Phan",
      id: "vid_17"
   },
   {
      name: "Mặc kệ người ta nói - TRÍ HẢI",
      src: "Mặc kệ người ta nói - TRÍ HẢI",
      id: "vid_18"
   },
   {
      name: "Miền cát trắng - Quanh Vinh",
      src: "Miền cát trắng - Quanh Vinh",
      id: "vid_19"
   },
   {
      name: "Mùa Đông Không Lạnh - Akira Phan",
      src: "Mùa Đông Không Lạnh - Akira Phan",
      id: "vid_20"
   },
   {
      name: "Mưa Thuỷ Tinh - Khánh Phương",
      src: "Mưa Thuỷ Tinh - Khánh Phương",
      id: "vid_21"
   },
   {
      name: "Ngôi Sao Lẻ Loi - Phan Đinh Tùng",
      src: "Ngôi Sao Lẻ Loi - Phan Đinh Tùng",
      id: "vid_22"
   },
   {
      name: "Người Ra Đi Vì Đâu - Phạm Khánh Hưng",
      src: "Người Ra Đi Vì Đâu - Phạm Khánh Hưng",
      id: "vid_23"
   },
   {
      name: "Nỗi Nhớ Nơi Con Tim Mồ Côi - Ưng Hoàng Phúc",
      src: "Nỗi Nhớ Nơi Con Tim Mồ Côi - Ưng Hoàng Phúc",
      id: "vid_24"
   },
   {
      name: "Thật Lòng Xin Lỗi Em - Phạm Khánh Hưng",
      src: "Thật Lòng Xin Lỗi Em - Phạm Khánh Hưng",
      id: "vid_25"
   },
   {
      name: "Tìm Lại Bầu Trời - Tuấn Hưng",
      src: "Tìm Lại Bầu Trời - Tuấn Hưng",
      id: "vid_26"
   },
   {
      name: "Tình Đơn Côi (Nhạc Hoa Lời Việt) - Nguyễn Phi Hùng",
      src: "Tình Đơn Côi (Nhạc Hoa Lời Việt) - Nguyễn Phi Hùng",
      id: "vid_27"
   },
   {
      name: "Tình khúc vàng - Đan Trường",
      src: "Tình khúc vàng - Đan Trường",
      id: "vid_28"
   },
   {
      name: "Tình Là Gì - Tuấn Hưng",
      src: "Tình Là Gì - Tuấn Hưng",
      id: "vid_29"
   },
   {
      name: "Tình Yêu Mang Theo - Nhât Tinh Anh",
      src: "Tình Yêu Mang Theo - Nhât Tinh Anh",
      id: "vid_30"
   },
   {
      name: "Tình Yêu Và Nỗi Nhớ - Bằng Cường",
      src: "Tình Yêu Và Nỗi Nhớ - Bằng Cường",
      id: "vid_31"
   },
   {
      name: "Tôi Là Tôi - Quách Thành Danh",
      src: "Tôi Là Tôi - Quách Thành Danh",
      id: "vid_32"
   },
   {
      name: "Tôn Thờ Một Tình Yêu - Bằng Cường ft Khánh Phương",
      src: "Tôn Thờ Một Tình Yêu - Bằng Cường ft Khánh Phương",
      id: "vid_33"
   },
   {
      name: "Trang Giấy Trắng - Phạm Trưởng",
      src: "Trang Giấy Trắng - Phạm Trưởng",
      id: "vid_34"
   },
   {
      name: "Vì Sao Thế - Phạm Khánh Hưng",
      src: "Vì Sao Thế - Phạm Khánh Hưng",
      id: "vid_35"
   },
   {
      name: "Vì Sao Trong Lòng Tôi - Ưng Hoàng Phúc",
      src: "Vì Sao Trong Lòng Tôi - Ưng Hoàng Phúc",
      id: "vid_36"
   },
   {
      name: "Vừa Đi Vừa Khóc - Cao Tùng Anh",
      src: "Vừa Đi Vừa Khóc - Cao Tùng Anh",
      id: "vid_37"
   }
]