// musicLibrary.js

const musicLibrary = {
  tracks: [
    {
     id:1,
      title: "Thói Quen - Hoàng Dũng , GDUCKY",
      artist: "Hoàng Dũng",
      src: "./assets/sounds/ThoiQuen25MetVuong-HoangDungTheVoiceGDucky-7120882.mp3",
      cover: "./images/id1.png",
      duration: 180,
      genre: "Pop",
      album: "25 mét vuông",
      lyrics: "Verse 1: \n Dù rằng anh cũng biết\n Phải tự dặn mình để tốt lên theo từng ngày\n Anh vẫn có đôi ít thói quen không đáng khen trong cuộc sống\n Vì ngày còn dài mênh mông\n Vì sợ rằng tâm trí anh không đủ rộng\n Nên đôi khi anh vẫn cố cho anh thêm một lần không để tâm\n \n Chorus:\n Anh vẫn thường tìm đến một điếu thuốc khi anh cần phải nhớ\n Uống thật say vào đêm anh cần phải quên\n Thức thật khuya để thấy yên bình thêm\n Thật nhiều những điều dẫu là không nên, anh chưa buồn thay đổi\n Cố tình biếng lười, hay đi về sớm tối\n Và vẫn còn yêu em cũng thế thôi\n \n Bridge:\n Vì lúc em xa anh và bước đến chân trời mới\n Thì đáng ra anh nên ngừng thương nhớ em rất lâu rồi\n Tìm đến những thói quen dù ngốc nghếch vẫn chẳng muốn xa rời\n Chỉ để lấp đầy hết trống rỗng bên trong anh mà thôi\n \n Rap:\n (GDucky)\n Nửa năm từ khi em ra đi, anh chẳng khác là bao\n Thuốc thì không hút mấy, nhưng một khi đã hút là nát cả bao\n Bạn anh hỏi giải pháp là sao?\n Dạo này không thấy khát và khao?\n Chớ dạo này chỉ muốn căn nhà 2 đứa có rap và tao?\n Mà thôi ông ơi\n Về bia rượu thì là tôi không chơi\n Cố nhắm mắt để ngủ sớm, sáng mai đi tập và sau đó thì là bơi, xông hơi\n Yeah im feeling so gud, trưa ăn cơm, ban đêm anh ăn soup\n Làm việc hàng ngày lười một chút\n Thiện định vào tầm là 11 phút yeah yeah\n \n Chorus:\n But u killin me god\n Yeah yeah\n Không còn em kế bên\n Tôi đang làm quen được bao điều hay nhưng sao tôi không thể quên\n But u killin me god\n Yeah yeah\n Không còn em kế bên\n Tôi đang làm quen được bao điều hay nhưng sao tôi không thể quên\n \n Verse 2:\n Làm sao quên bao đêm xem phim mì gói em nấu\n I'm fuckin fall in love.\n Dù cho nó là một thói quen xấu\n Sau bao nhiêu đêm tôi đã thao thức, vì còn một điều này cần phải giấu\n I still keep it rollin roll.. buông ra câu i love u so\n \n Bridge:\n Là lúc em xa anh và bước đến chân trời mới\n (To the whole new world, to the whole new world)\n Thì đáng ra anh nên ngừng thương nhớ em rất lâu rồi\n (Nhưng tại sao anh lại men theo đường quen)\n Tìm đến nhữngpine những thói quen dù ngốc ngếch vẫn chẳng muốn xa rời\n Chỉ để lấp đầy hết trống rỗng bên trong anh mà thôi\n \n (Music)\n \n Coda:\n Tadadi'da Tadadi'da Tadadida dada\n Ai đó sẽ đến đón đưa em đi cùng những thói quen có anh\n Tadadi'da\n Những thói quen sẽ đón đưa anh đi về\n Tadadida Tadadida\n Là lúc em xa anh và bước đến chân trời mới\n (To the whole new world, to the whole new world)\n Thì đáng ra anh nên ngừng thương nhớ em rất lâu rồi\n (Nhưng tại sao anh lại men theo đường quen)\n Tìm đến những thói quen dù ngốc ngếch vẫn chẳng muốn xa rời\n Chỉ để lấp đầy hết trống rỗng bên trong anh mà thôi ...",
      artistBio: "Nguyễn Hoàng Dũng, thường được biết đến với nghệ danh Hoàng Dũng (sinh ngày 4 tháng 11 năm 1995), là một nam ca sĩ kiêm nhạc sĩ sáng tác ca khúc người Việt Nam. Anh từng đạt danh hiệu Á quân của cuộc thi Giọng hát Việt vào năm 2015 và lọt vào top 10 của cuộc thi Bài hát hay nhất vào năm 2016.",
      artistCover: "./images/id1.png" // Thêm đường dẫn ảnh nghệ sĩ
    },
    {
      id: 2,
      title: "Không Thể Say",
      artist: "HIEUTHUHAI",
      src: "./assets/sounds/KhongTheSay-HIEUTHUHAI-9293024.mp3",
      cover: "./images/HIEUUTHUHAI.jpg",
      duration: 240,
      genre: "Hip-Hop/Rap",
      album: "Tuyển tập Hiếu Thứ Hai",
      lyrics: "Verse 1:\n Đã hơn một năm trôi qua, mà mẹ vẫn thế cứ tiếc đôi ta\n Xoá cả hình xăm trên da\n Chuyện tình mình cũng chẳng thể phôi pha\n Chắc cũng đã lâu anh không muốn say mà\n Cuối cùng là hôm nay anh lại nhớ tới em\n Có thể sẽ phone cho em\n Và sẽ lại nói anh vẫn yêu em\n Bấm chuông nhà em trong đêm\n Và hàng ngàn thứ biết chắc không nên\n Hứa trong lòng anh sẽ không uống thêm được\n Vì em là lí do số một, làm cho anh không thể say\n \n Verse 2:\n Anh giờ đây thì vẫn đang cố quên\n Những ngày ta còn được nằm ở bên\n Có thêm thành công hay kiếm thêm nhiều tiền\n Được biết tên, bởi nhiều người\n Chẳng giúp anh nở nụ cười được nữa đâu\n Bởi vì sau ánh đèn ở cạnh anh thì chẳng có ai\n Và cũng đã cố gắng để yêu thêm rất nhiều mặc dù biết là điều đó sai\n Có lẽ anh chẳng yêu thêm\n Giờ mọi thông báo anh chỉ mong là của em\n \n Chorus:\n Ước ở trên mi\n Mỗi lần qua từng nơi dấu chân ta đi\n Giờ còn đâu tình yêu lúc không là gì\n Uống thêm là vì\n Nước mắt anh rơi vào tận trong ly\n Chúng ta không sai\n Nhưng giờ đây làm sao để em quay lại\n Nhà và xe làm chi ngóng trông em hoài\n Thức cả đêm dài\n Muốn em bên anh phải gọi thêm chai\n \n Verse 3:\n Đã hơn một năm trôi qua, mà mẹ vẫn thế cứ tiếc đôi ta\n Xoá cả hình xăm trên da\n Chuyện tình mình cũng chẳng thể phôi pha\n Chắc cũng đã lâu anh không muốn say mà\n Cuối cùng là hôm nay anh lại nhớ tới em\n Có thể sẽ phone cho em\n Và sẽ lại nói anh vẫn yêu em\n Bấm chuông nhà em trong đêm\n Và hàng ngàn thứ biết chắc không nên\n Hứa trong lòng anh sẽ không uống thêm được\n Vì em là lí do số một, làm cho anh không thể say\n \n Bridge:\n Biết chắc chắn chẳng thể nào lại gặp nhau trên đường đời\n Chỉ muốn ước mai sau em sẽ gặp thêm một ai tuyệt vời\n Anh cũng sẽ đi tiếp tục\n Chẳng tổn thương người đến sau nhiều như em\n Vì anh đã từng thấy em đây phải đau\n Khóc khi ta cãi nhau\n Mắt sưng qua ngày sau\n Cũng chẳng thể níu thêm chi\n Chi bằng hãy giữ lấy nước mắt em đi\n \n Chorus:\n Ước ở trên mi\n Mỗi lần qua từng nơi dấu chân ta đi\n Giờ còn đâu tình yêu lúc không là gì\n Uống thêm là vì\n Nước mắt anh rơi vào tận trong ly\n Chúng ta không sai\n Nhưng giờ đây làm sao để em quay lại\n Nhà và xe làm chi ngóng trông em hoài\n Thức cả đêm dài\n Muốn em bên anh phải gọi thêm chai\n \n Outro:\n Từng hứa bao nhiêu câu\n Giờ cũng không bên nhau\n Chẳng biết hôm chia tay em đã ngồi khóc trong bao lâu\n Lúc đó đủ can đảm đâu mà nhìn lại\n Cố gắng hết bao nhiêu giờ cũng xa nhau mãi\n Đã hơn một năm trôi qua, mà mẹ vẫn thế cứ tiếc đôi ta\n Xoá cả hình xăm trên da\n Chuyện tình mình cũng chẳng thể phôi pha\n Chắc cũng đã lâu anh không muốn say mà\n Cuối cùng là hôm nay anh lại nhớ tới em\n Có thể sẽ phone cho em\n Và sẽ lại nói anh vẫn yêu em\n Bấm chuông nhà em trong đêm\n Và hàng ngàn thứ biết chắc không nên\n Hứa trong lòng anh sẽ không uống thêm được\n Vì em là lí do số một, làm chi anh không thể say\n",
      artistBio: "HIEUTHUHAI tên thật là Trần Minh Hiếu, là một rapper trẻ nổi tiếng với phong cách trình diễn cuốn hút và những bản rap ý nghĩa, được giới trẻ yêu mến.",
      artistCover: "./images/HIEUUTHUHAI.jpg" // Thêm đường dẫn ảnh nghệ sĩ
    },
    {
      id: 3,
      title: "Chịu cách mình nói thua",
      artist: "Rhyder",
      src: "./assets/sounds/y2mate.com _ Chịu Cách Mình Nói Thua.mp3",
      cover: "./images/Ryder.png",
      duration: 200,
      genre: "Hip-Hop/Rap",
      album: "Rái Đơ",
      lyrics: "Intro: Rhyder\n Lại là DG House\n Rhyder (Cool-Cool-CoolKidNevaSleep)\n \n Chorus: Rhyder\n Lần này thì anh chịu thua em rồi\n Em bỏ anh đi ngay giữa đêm tối\n Từng giọt nước mắt anh chợt tuôn, một người nắm, một người buông\n I told you that never leave me alone\n Lần này thì anh chịu thua em rồi\n Chẳng có cơ hội nào nữa em ơi, giá mà em cũng yêu anh nhiều\n I told you that never leave me alone\n \n Verse 1: BAN\n Và giờ bức tranh ta vẽ tình yêu cũng đã nhạt phai\n Yeah, you broke, broke, broke my heart, yeah\n Tại sao không nói luôn đi, bây giờ em đang cần ai? (Ai? Ai?)\n Không phải anh, no, no, no, no, no\n Mm, vậy đi\n Nếu như đã không thành đôi, đành thôi\n Vậy giờ bọn mình cũng đã yêu nhau xong rồi\n Đã từng là một tình yêu đẹp nhất trên đời\n \n Chorus: Rhyder\n Lần này thì anh chịu thua em rồi\n Em bỏ anh đi ngay giữa đêm tối\n Từng giọt nước mắt anh chợt tuôn, một người nắm, một người buông\n I told you that never leave me alone\n Lần này thì anh chịu thua em rồi\n Chẳng có cơ hội nào nữa em ơi, giá mà em cũng yêu anh nhiều\n I told you that never leave me alone\n \n Verse 2: CoolKid & BAN\n Trái tim anh giờ đau thế nói buông nhưng mà đâu dễ\n Không còn cơ hội đâu bé, oh, yeah\n Thêm một bài nhạc so sad, how I feel about love, no cap\n Chứng kiến anh ra nông nỗi này liệu có phải là điều em muốn thấy?\n Oh baby, no, no, no\n Vứt hết kỷ niệm đằng sau, nếu như ta chẳng cần nhau\n Oh, bae\n \n Chorus: Rhyder\n Lần này thì anh chịu thua em rồi\n Em bỏ anh đi ngay giữa đêm tối\n Từng giọt nước mắt anh chợt tuôn, một người nắm, một người buông\n I told you that never leave me alone\n Lần này thì anh chịu thua em rồi\n Chẳng có cơ hội nào nữa em ơi, giá mà em cũng yêu anh nhiều\n I told you that never leave me alone\n",
      artistBio: "RHYDER tên thật là Nguyễn Quang Anh, sinh ngày 18/03/2001, là một ca sĩ, nhạc sĩ trẻ tài năng với phong cách âm nhạc độc đáo, pha trộn giữa Pop và Hip-Hop.",
      artistCover: "./images/Ryder.png" 
    },
    {
      id: 4,
      title: "Chạy Ngay Đi",
      artist: "Sơn Tùng - MTP",
      src: "./assets/sounds/y2mate.com _ Chạy Ngay Đi.mp3",
      cover: "./images/MTP.jpg",
      duration: 220,
      genre: "Pop",
      album: "Tuyển Tập SKY",
      lyrics: "Verse 1:\n Từng phút cứ mãi trôi xa, phai nhòa dần kí ức giữa đôi ta (Whoo!)\n Từng chút nỗi nhớ hôm qua đâu về, lạc bước cứ thế phôi pha (Whoo!)\n Con tim giờ không cùng chung đôi nhịp\n Nụ cười lạnh băng, còn đâu nồng ấm thân quen?\n Vô tâm làm ngơ, thờ ơ, tương lai ai ngờ?\n Quên đi mộng mơ, ngày thơ tan theo sương mờ\n Mưa lặng thầm đường vắng chiều nay (Yeah)\n In giọt lệ nhòe khóe mắt sầu cay\n Bao hẹn thề tàn úa vụt bay (Yeah)\n Trôi dạt, chìm vào những giấc nồng say\n Quay lưng chia hai lối, còn một mình anh thôi\n Giả dối bao trùm, bỗng chốc lên ngôi\n Trong đêm tối, bầu bạn cùng đơn côi\n Suy tư anh kìm nén đã bốc cháy yêu thương trao em rồi\n \n Pre-Chorus:\n (Đốt sạch hết!)\n Son môi hồng vương trên môi bấy lâu (Hah!)\n Hương thơm dịu êm, mê man bấy lâu (Đốt sạch hết!)\n Anh không chờ mong quan tâm nữa đâu\n Tương lai từ giờ như bức tranh em quên tô màu (Đốt sạch hết!)\n Xin chôn vùi tên em trong đớn đau (Hah!)\n Nơi hiu quạnh, tan hoang, ngàn nỗi đau (Đốt sạch hết!)\n Dư âm tàn tro vô vọng phía sau\n Đua chen, dày vò, xâu xé quanh thân xác nát nhàu\n \n Chorus:\n Chạy ngay đi, trước khi\n Mọi điều dần tồi tệ hơn (Đốt sạch hết)\n Chạy ngay đi, trước khi\n Lòng hận thù cuộn từng cơn (Đốt sạch hết)\n Tựa giông tố đến bên ghé thăm\n Từ nơi hố sâu tối tăm (Oh)\n Chạy đi (Chạy đi) trước khi (Trước khi)\n Mọi điều dần tồi tệ hơn\n \n Post-Chorus:\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái\n \n Verse 2:\n Yeah!\n Buông bàn tay, buông xuôi hi vọng, buông bình yên (Buông!)\n Đâu còn nguyên tháng ngày rực rỡ, phai úa, hằn sâu triền miên?\n Vết thương cứ thêm, khắc thêm, mãi thêm\n Chà đạp, vùi dập, dẫm lên tiếng yêu ấm êm\n Nhìn lại niềm tin từng trao giờ sao sau bao ngu muội sai lầm anh vẫn yếu mềm?\n Căn phòng giam cầm, thiêu linh hồn cô độc, em trơ trọi, kêu gào xót xa (La-la-la, la-la)\n Căm hận tuôn trào, dâng lên, nhuộm đen, ghì đôi vai, đừng mong chờ thứ tha (Ah)\n Chính em gây ra mà, những điều vừa diễn ra\n Chính em gây ra mà, chính em gây ra mà, những điều vừa diễn ra\n Hết thật rồi\n \n Pre-Chorus:\n (Đốt sạch hết!)\n Son môi hồng vương trên môi bấy lâu (Hah!)\n Hương thơm dịu êm, mê man bấy lâu (Đốt sạch hết!)\n Anh không chờ mong quan tâm nữa đâu\n Tương lai từ giờ như bức tranh em quên tô màu (Đốt sạch hết!)\n Xin chôn vùi tên em trong đớn đau (Hah!)\n Nơi hiu quạnh, tan hoang, ngàn nỗi đau (Đốt sạch hết!)\n Dư âm tàn tro vô vọng phía sau\n Đua chen, dày vò, xâu xé quanh thân xác nát nhàu\n \n Chorus:\n Chạy ngay đi, trước khi\n Mọi điều dần tồi tệ hơn (Đốt sạch hết)\n Chạy ngay đi, trước khi\n Lòng hận thù cuộn từng cơn (Đốt sạch hết)\n Tựa giông tố đến bên ghé thăm\n Từ nơi hố sâu tối tăm (Oh)\n Chạy đi (Chạy đi) trước khi (Trước khi)\n Mọi điều dần tồi tệ hơn (No, no!)\n \n Post-Chorus:\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Whoo!)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái\n \n Bridge:\n Đốt sạch hết (Oh-oh-oh-oh-oh-oh-oh)\n (Chính em gây ra mà, chính em gây ra mà)\n Đốt sạch hết (Oh-oh-oh-oh-oh-oh-oh), hah\n Đừng nhìn anh với khuôn mặt xa lạ\n Xin đừng lang thang trong tâm trí anh từng đêm nữa\n Quên đi, quên đi hết đi\n Quên đi, quên đi hết đi\n Thắp lên điều đáng thương lạnh giá, ôm trọn giấc mơ vụn vỡ\n Argh!\n \n Drop:\n Bốc cháy lên cơn hận thù trong anh (Quên đi, quên đi hết đi)\n Cơn hận thù trong anh (Oh! Oh! Oh!)\n Bốc cháy lên cơn hận thù trong anh\n Ai khơi dậy cơn hận thù trong anh\n Bốc cháy lên cơn hận thù trong anh (Quên đi, quên đi hết đi)\n Cơn hận thù trong anh (Oh! Oh! Oh!)\n Bốc cháy lên cơn hận thù trong anh\n Ai khơi dậy cơn hận thù trong anh (Cô đơn rồi)\n \n Outro:\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Cô đơn rồi)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Cô đơn rồi)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái (Cô đơn rồi)\n Không còn ai cạnh bên em ngày mai\n Tạm biệt một tương lai ngang trái\n",
      artistBio: "Sơn Tùng M-TP tên thật là Nguyễn Thanh Tùng sinh nhật vào ngày 5 tháng 7 năm 1994 quê tại Thái Bình. Anh là ca sĩ trẻ nổi tiếng ở Việt Nam được rất nhiều fan hâm mộ trẻ trong và ngoài nước yêu mến với số lượng theo dõi khủng bậc nhất ở các trang mạng xã hội. Sơn Tùng M-TP bắt đầu viết nhạc từ khi còn ngồi trên ghế nhà trường. Học xong lớp 12, anh thi đỗ thủ khoa vào trường Nhạc viện Thành Phố Hồ Chí Minh với (25,5 điểm) và bắt đầu con đường âm nhạc chuyên nghiệp. Ở trường anh được nhiều sự chú ý bởi bề ngoài điển trai và phong cách cá tính.",
      artistCover: "./images/MTP.jpg" 
    },
    {
      id: 5,
      title: "Bên Trên Tầng Lầu",
      artist: "Tăng Duy Tân",
      src: "./assets/sounds/BenTrenTangLau-TangDuyTan-7412012.mp3",
      cover: "./images/id5.png",
      duration: 190,
      genre: "Pop",
      album: "",
      lyrics: "Verse 1:\nBên trên tầng lầu em ngắm sao\nÁnh trăng vàng khuya soi bóng em\nLòng bỗng thấy nhớ anh nhiều hơn\n\nChorus:\nAnh ở đâu, có nghe thấy em gọi?\nNgàn vì sao kia chứng giám tình ta\nXin thời gian ngừng lại\nĐể em được bên anh mãi thôi",
      artistBio: "Tăng Duy Tân là một nhạc sĩ, ca sĩ trẻ nổi lên với các bản hit EDM/Pop hiện đại, mang màu sắc riêng biệt và được giới trẻ yêu thích. Anh là gương mặt tiềm năng của V-Pop thế hệ mới.",
      artistCover: "./images/id5.png"
    },
    {
      id: 6,
      title: "Sau cơn mưa",
      artist: "Rhyder",
      src: "./assets/sounds/y2mate.com _ CoolKid  Sau Cơn Mưa ft Rhyder.mp3",
      cover: "./images/sauconmua.jpg",
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "Rái Đơ",
      lyrics: "Verse 1: CoolKid\n Nhìn em đẹp hơn khi nở nụ cười trên môi\n Nhưng chỉ toàn u buồn, khi người ở bên tôi\n Em tìm một ai khác em cần một vòng tay khác\n Một chàng trai khác khiến em vui hơn là anh\n Và rồi hàng triệu khúc mắc chỉ vỏn vẹn vài tíc tắc\n Và anh đã hiểu rằng\n Oh my girl em giấu nhiều điều nhưng chẳng phải là anh không biết đâu\n Chỉ là trước khi rời đi lòng anh muốn nói vài lời\n \n Hook: CoolKid\n Đừng để ai khiến em khóc thật nhiều như anh đã từng thế\n Đằng sau cơn mưa sẽ có cầu vồng cùng em trên lối về\n Anh chỉ cười thế thôi, ghì chặt khoé môi\n Vì biết câu chuyện giờ cũng đã rồi\n Những mẩu chuyện xé đôi\n Kỷ niệm ghé chơi\n Giờ này hai đứa hai nơi\n (Yea we don't talk anymore)\n (Ah ah ah ah ah ah)\n (Ah ah ah ah ah ah)\n \n Verse 2: RHYDER\n Nếu muốn khóc cứ để nước mắt rơi hết đi\n Anh không muốn phải thấy em bên đấy sẽ ướt mi thêm vì\n Em đã cố giấu bao nỗi đau\n Do anh đã cố chấp nên giờ đành phải lạc nhau\n Chỉ một vài lời nói\n Vô tình khiến em đau\n Mặt trời không thể thắng được khi cơn giông dần đi tới\n Em cần một người mới\n Một người tốt hơn anh\n Cả bầu trời chuyển tối (yeah we don’t talk anymore)\n Em đã rất vui khi nhận tình cảm từ anh ta\n Nhưng ngoại trừ anh ra bây giờ thì khác\n Anh đành phải chịu thua thôi\n Anh có một vài lời muốn nói\n \n Hook: CoolKid\n Đừng để ai khiến em khóc thật nhiều như anh đã từng thế\n Đằng sau cơn mưa sẽ có cầu vồng cùng em trên lối về\n Anh chỉ cười thế thôi, ghì chặt khoé môi\n Vì biết câu chuyện giờ cũng đã rồi\n Những mẩu chuyện xé đôi\n Kỷ niệm ghé chơi\n Giờ này hai đứa hai nơi\n (Yea we don't talk anymore)\n (Ah ah ah ah ah ah)\n (Ah ah ah ah ah ah)\n",
      artistBio: "RHYDER tên thật là Nguyễn Quang Anh, sinh ngày 18/03/2001, là một ca sĩ, nhạc sĩ trẻ tài năng với phong cách âm nhạc độc đáo, pha trộn giữa Pop và Hip-Hop.",
      artistCover: "./images/Ryder.png" 
    },
    {
      id: 7,
      title: "Chúng ta không thuộc về nhau",
      artist: "Sơn Tùng - MTP",
      src: "./assets/sounds/y2mate.com _ Chúng Ta Không Thuộc Về Nhau.mp3",
      cover: "./images/chungtakhongthuocvenhau.jpg",
      duration: 210,
      genre: "Pop",
      album: "Tuyển Tập SKY",
      lyrics: "Intro:\n (Về nơi này)\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về (về nơi này)\n \n Verse 1:\n Niềm tin đã mất, giọt nước mắt cuốn kí ức anh chìm sâu\n Tình về nơi đâu, cô đơn đôi chân lạc trôi giữa bầu trời\n Màn đêm che dấu, từng góc tối khuất lấp phía sau bờ môi!\n Tại vì anh thôi, yêu say mê nên đôi khi quá dại khờ!\n \n Pre-Chorus:\n Nhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này\n Phía trước bây giờ ai đang nắm chật bàn tay của em vậy?\n Mông lung như một trò đùa\n Anh xin giơ tay rút lui thôi\n (Do ai?) Trách ai bây giờ đây?\n \n Chorus:\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Em hãy cứ đi bên người mà em cần\n Trái tim không thuộc về nhau\n Giấc mơ không là của nhau\n Xoá câu ca buồn chiều mưa\n Anh lỡ xóa luôn yêu thương ngày xưa rồi\n \n Post-Chorus:\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về (về nơi này)\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về (về nơi này)\n \n Verse 2:\n Hey, từng đêm qua... cơn mưa bao vây chia rời đôi ta\n Em, ngày hôm qua... cuốn gió theo mây đi về nơi xa\n Trời xanh rộng bao la\n Anh lê đôi chân mình\n Bơ vơ lang thang có lẽ em đang yên vui bên nhân tình\n Quên đi để anh nhớ\n Hơi men để anh mơ\n Nơi đâu để giấu\n Một nỗi buồn vào trong thơ\n \n Pre-Chorus:\n Nhắm mắt ơ thờ anh không muốn lạc vào trong nỗi đau này\n Phía trước bây giờ ai đang nắm chật bàn tay của em vậy?\n Mông lung như một trò đùa\n Anh xin giơ tay rút lui thôi\n (Do ai?) Trách ai bây giờ đây?\n \n Chorus:\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Em hãy cứ đi bên người mà em cần\n Trái tim không thuộc về nhau\n Giấc mơ không là của nhau\n Xoá câu ca buồn chiều mưa\n Anh lỡ xóa luôn yêu thương ngày xưa rồi\n \n Post-Chorus:\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về (về nơi này)\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về (về nơi này)\n \n Outro:\n Chúng ta không thuộc về nhau\n Không thuộc về nhau\n Không thuộc về nhau\n Chúng ta không thuộc về nhau\n Không thuộc về nhau\n Không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Em hãy cứ đi bên người mà em cần\n Trái tim không thuộc về nhau\n Giấc mơ không là của nhau\n Xoá câu ca buồn chiều mưa\n Anh lỡ xóa luôn yêu thương ngày xưa rồi\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n Chúng ta không thuộc về nhau\n",
      artistBio: "Sơn Tùng M-TP tên thật là Nguyễn Thanh Tùng sinh nhật vào ngày 5 tháng 7 năm 1994 quê tại Thái Bình. Anh là ca sĩ trẻ nổi tiếng ở Việt Nam được rất nhiều fan hâm mộ trẻ trong và ngoài nước yêu mến với số lượng theo dõi khủng bậc nhất ở các trang mạng xã hội. Sơn Tùng M-TP bắt đầu viết nhạc từ khi còn ngồi trên ghế nhà trường. Học xong lớp 12, anh thi đỗ thủ khoa vào trường Nhạc viện Thành Phố Hồ Chí Minh với (25,5 điểm) và bắt đầu con đường âm nhạc chuyên nghiệp. Ở trường anh được nhiều sự chú ý bởi bề ngoài điển trai và phong cách cá tính.",
      artistCover: "./images/MTP.jpg" 
    },

    {
      id: 8,
      title: "Chờ em đến bao giờ lofi",
      artist: "Phong Max",
      src: "./assets/sounds/y2mate.com _ Chờ Em Đến Bao Giờ Lofi Ver  Phong Max x Freak D.mp3",
      cover: "./images/choemdenbaogio.jpg",
      duration: 210,
      genre: "Lofi",
      album: "",
      lyrics: "Verse 1:\n Chờ em đến bao giờ\n Khi mà em chẳng yêu tôi\n Hàng cây vẫn chờ đợi\n Lá rụng rơi không thấy người\n Mùa thu nhắn đôi lời\n Mưa vì tôi buồn mưa rơi\n Tình yêu vốn do trời\n Nào muốn được em ơi\n \n Pre-Chorus:\n Lời yêu thương bao lâu\n Con tim luôn giấu\n Anh đem gói gom giọt sầu\n Cuộc tình đơn phương chôn sâu\n Lặng trong đêm thâu\n Nước mắt không màu\n Từ nay đến mai về sau\n Mình cứ bước qua nhau\n \n Chorus:\n Trông phía xa nơi chân trời\n Năm tháng trôi nhanh\n Như là cơn gió thu\n Đưa cành cây xơ xác lá\n Giá như mà trong tay ôm bó hoa\n Đông xuân tới mùa hạ\n Em bước bên ta\n Giá như mà trong tay ôm bó hoa\n Đông xuân tới mùa hạ\n Em bước bên ta\n Giá như mà trong tay ôm bó hoa\n Đông xuân tới mùa hạ\n Em bước bên ta\n",
      artistBio: "Phong Max là một nghệ sĩ trẻ nổi tiếng trong cộng đồng lofi và indie Việt Nam, với những bản phối nhẹ nhàng, sâu lắng và giai điệu bắt tai.", // Thêm thông tin bio nếu có
      artistCover: "./images/choemdenbaogio.jpg" 
    },

    {
      id: 9,
      title: "Một bước yêu vạn dậm đau",
      artist: "Mr.Siro",
      src: "./assets/sounds/y2mate.com _ Một Bước Yêu Vạn Dặm Đau Lyrics Video  Mr Siro.mp3",
      cover: "./images/motbuocyeuvandamdau.jpg",
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Intro:\n Hôm nay…\n Dành hết lầm lỗi để chia tay\n Tình ta từ nay vỡ đôi\n Một dòng nước mắt lăn chạm qua môi…\n \n Verse 1:\n Một thế giới hư ảo, nhưng thật ấm áp\n Em xuất hiện khiến những băng giá đời anh bỗng dần tan đi\n Cuộc đời anh đặt tên là Muộn Phiền\n Nên làm sao dám mơ mình may mắn được trọn vẹn cùng em\n Ta phải xa em mặc kệ nước mắt em rơi\n Vì những nguyên do cả đời không dám đối diện\n \n Pre-Chorus:\n Chỉ còn vài gang tấc nhưng lại xa xôi\n Tình mình tựa đôi đũa lệch đành buông trôi\n Cầu mong em sẽ sớm quên được tất cả\n Tìm thấy một người xứng đáng ở bên…\n \n Chorus:\n Từ nay duyên kiếp bỏ lại phía sau\n Ngày và bóng tối chẳng còn khác nhau\n Chẳng có nơi nào yên bình được như em bên anh\n (Tình yêu một lần lỡ bước\n Là muôn dặm trường đau thương…)\n Hạt mưa bỗng hóa thành màu nỗi đau\n Trời như muốn khóc ngày mình mất nhau\n Có bao nhiêu đôi ngôn tình, cớ sao lìa xa mình ta?\n \n Giang tấu:\n Là nhân duyên Trời ban cớ sao mình chẳng thể thành đôi…\n \n Verse 2:\n Tại sao quá ngu ngốc bỏ lại mảnh ghép\n Mà đối với nhau là tất cả còn mình thì vụn vỡ…\n Thế giới thực tại ồn ào vẫn thấy cô đơn\n Còn hai ta thì khác, chỉ nhìn thôi tim đã thấu\n \n Chorus cuối:\n Từ nay ranh giới của hai chúng ta là\n Yêu nhưng không thể nào bước qua\n Ngọn cỏ ven đường thôi mà làm sao với được mây…\n Từ sau câu giã từ êm ái kia\n Chẳng cơn bão lớn nào bằng bão lòng…\n Gặp trong mơ mà cũng không dám gào lên: “anh thương em…”\n",
      artistBio: "Mr.Siro là một nhạc sĩ, ca sĩ nổi tiếng với những bản ballad da diết, lời ca sâu sắc và giai điệu dễ đi vào lòng người. Anh là chủ nhân của nhiều bản hit đình đám trong V-Pop.",
      artistCover: "./images/motbuocyeuvandamdau.jpg" 
    },

    {
      id: 10,
      title: "Chỉ một đêm nữa thôi",
      artist: "RPT MCK ft tlinh",
      src: "./assets/sounds/y2mate.com _ 06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh    99  the album.mp3",
      cover: "./images/chimotdemnuathoi.png",
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "",
      lyrics: "Intro: RPT MCK\n (Yeah)\n Yeah, way\n Đây là cái demo mà, mà mình đã hứa với các bạn nhưng mà mình chưa bao giờ release\n Yeah, way (eh)\n Chỉ một đêm nữa thôi\n Chỉ một đêm nữa thôi\n Chỉ một đêm nữa thôi\n (Louder, louder)\n Chỉ một đêm nữa thôi\n \n Verse 1: RPT MCK\n Lướt đi hơi nhanh trên con xe không phanh, đôi khi lòng mình lẻ loi\n Âm thanh vang lên ngay ở trong tai nghe, và tình yêu thì đã lên ngôi\n Nhìn đêm trôi gần sát bên tôi, chạm vào em và đưa sát lên môi\n Mọi buồn đau rồi sẽ quên thôi, yeah\n Là tại vì hình bóng của em giờ đang ở trong đầu (Yeah, yeah, yeah)\n Và anh đã thức biết bao nhiêu là đêm dài mong cầu (Yeah, yeah, yeah)\n Không cần phải nói mà sao vẫn cứ hiểu thấu lòng nhau (Yeah)\n Same frequency, I don't wanna let you go\n \n Pre-Chorus: RPT MCK\n Yeah, anh không muốn thức dậy (Chỉ một đêm nữa thôi)\n Yeah, anh muốn chìm trong đôi mắt nàng (Chỉ một đêm nữa thôi)\n Cạm bẫy vẫn đang xung quanh em (Chỉ một đêm nữa thôi)\n But you got it, got it, got it, girl (One, two, three, go, okay)\n \n Chorus: RPT MCK\n DCOD life, yeah, chân em mang Nike Low, yeah\n You gotta pick a side, yeah, eeny, miny, moe\n Mình cùng ngồi ngắm trăng tàn ở Sài Gòn hai giờ đêm (God damn)\n Henni làm mắt ai mờ thêm, yeah, sau đêm nay xem là ai ở bên\n \n Verse 2: RPT MCK\n Cuốn một điếu thật to (yeah), bọn anh châm với Thành Draw (Yeah)\n Bọn anh muốn có thật là nhiều tiền (woah), and we're gon' make some more (Yeah)\n A-C-I-D, gang, gang, 350 (350)\n Lúc đó nhìn em thật đẹp, that's everything I know\n Rồi mình xuống phố khi đang lên đồ, bầu trời nhiều sao mà đêm nay vẫn tối đen\n Nào là cạm bẫy, nào là thiên đường, nhưng mà tại sao trong tim anh có mỗi em\n Và chẳng còn biết được đâu là đêm và ngày, nếu cứ tiếp tục trên đà này\n I'm so gonna fucking, fucking, fucking, fucking, fucking fall in love with you\n \n Pre-Chorus: RPT MCK\n Yeah, anh không muốn thức dậy (Chỉ một đêm nữa thôi)\n Yeah, anh muốn chìm trong đôi mắt nàng (Chỉ một đêm nữa thôi)\n Cạm bẫy vẫn đang xung quanh em (Chỉ một đêm nữa thôi)\n But you got it, got it, got it, girl (Yeah)\n \n Verse 3: tlinh, RPT MCK\n Cho em nắm tay anh một chút được không? (Pretty boy)\n Những điều sau đây xin phép được nói thật lòng (Tell me, baby)\n Em không chắc em đang cảm thấy điều gì nhưng mà nhớ anh\n Chỉ muốn thấy anh ngay ở bên cạnh (I wanna see you right here)\n You got me trippin' như bị rơi vào tròng (Yeah, yeah, trippin', trippin')\n Nhưng em không thấy bản thân mình đang đề phòng, no\n You make me feel safe, rằng mọi thứ sẽ okay khi ở trong vòng tay anh, yeah\n \n Outro: tlinh, RPT MCK\n Em cũng không muốn thức dậy (Yeah, anh cũng không muốn thức dậy)\n Mặc kệ thời gian để nó chảy (Mặc kệ thời gian đi baby)\n Xung quanh là bao nhiêu cạm bẫy\n But we got it, yeah\n",
      artistBio: "RPT MCK (Nghiêm Vũ Hoàng Long) và tlinh (Nguyễn Thảo Linh) là hai rapper nổi bật từ chương trình Rap Việt, được yêu thích bởi phong cách âm nhạc độc đáo và cá tính riêng biệt.", // Thêm thông tin bio nếu có
      artistCover: "./images/chimotdemnuathoi.png" 
    },

    {
      id: 11,
      title: "Đánh Đổi",
      artist: "Obito",
      src: "./assets/sounds/y2mate.com _ Obito  Đánh Đổi ft MCK.mp3",
      cover: "./images/danhdoi.jpg",
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "",
      lyrics: "Lyrics for Đánh Đổi by Obito ft. MCK", 
      artistBio: "Obito tên thật là Phạm Trần Phương Duy, một rapper trẻ tài năng được biết đến với những ca khúc có giai điệu bắt tai và lời rap ý nghĩa. Anh là một phần của cộng đồng rap đang phát triển mạnh mẽ tại Việt Nam.", // Thêm thông tin bio nếu có
      artistCover: "./images/danhdoi.jpg" 
    },

    {
      id: 12,
      title: "Buồn hay vui",
      artist: "VSOUL, RPT MCK, Obito, Ronboogz",
      src: "./assets/sounds/y2mate.com - BUỒN HAY VUI  VSOUL x MCK x Obito x Ronboogz x Boyzed  Official Audio .mp3",
      cover: "./images/buonhayvui.png",
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "",
      lyrics: "Intro: VSOUL\n Em đang buồn, buồn, buồn, buồn hay vui?\n Môi em cười nhưng nước mắt của em tuôn rơi\n Em đang buồn, buồn, buồn, buồn hay vui?\n Môi em cười nhưng nước mắt của em tuôn rơi\n Em đang buồn, buồn, buồn, buồn hay vui? (Buồn hay vui?)\n Môi em cười nhưng nước mắt của em tuôn rơi (Nước mắt em rơi)\n Em đang buồn, buồn, buồn, buồn hay vui? (Buồn hay vui?)\n Môi em cười nhưng nước mắt của em tuôn rơi (Oh, yeah)\n \n Verse 1: VSOUL\n Mascara em nhòe, xin đừng che giấu (No, no, no)\n Và nếu có thể, em cứ hãy để cho anh lau (Cho anh lau)\n Mọi thứ yên lặng kể từ ngày mà họ phai dấu (Ooh, yeah)\n Giọt mưa trên mi xát vào những vết thương ấy đau (Ooh-ooh)\n Em cứ gọi dù là ở bất cứ nơi đâu\n Anh vẫn như vậy, vẫn là người sẽ ở đây thôi\n Đừng để nỗi buồn này cũng chỉ một mình em thấu (VSOUL)\n Call up my phone, you will never feel alone\n \n Chorus: VSOUL\n Em hãy cười, cười, cười, cười lên đi (Tell me all your feeling)\n Anh không muốn để em với những dòng lệ trên mi\n Anh muốn em nhìn vào màn hình và nhìn anh đi\n Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy (Nah-nah-nah)\n Em hãy cười, cười, cười, cười lên đi (Babe)\n Anh không muốn để em với những dòng lệ trên mi (No, no, no)\n Anh muốn em nhìn vào màn hình và nhìn anh đi (Babe)\n Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy (Ah)\n \n Refrain: RPT MCK\n Yah-yeah, yah-yah, yah-yeah, yah\n Yah-yeah, yah-yah, yah-yeah, yah\n Yah-duh, yah-dah, yah-duh, yah\n Yah-duh, dah-dah, duh-duh (Ah)\n \n Verse 2: RPT MCK\n Callin' to my phone, nói chuyện nào\n Callin' to my phone, yah (You come here, come and come)\n Yêu em nhưng mà em chưa đồng ý, muốn trao những cái hôn, yeah\n Dáng thon, yeah, okay, em fashion khiến cho anh khoái hơn, yah\n Và đêm nay là mưa to không về được, nước rơi trên mái tôn, yah\n You're the one for me\n Con tim em đưa anh xem xem nào, thật là to\n Give it to me, I give it to you, đơn giản là nhận và cho\n Từng bước một, từng bước một, từng bước một\n Anh chắc chắn, yeah, we gonna fall in love\n Cho anh say mắt môi\n \n Chorus: RPT MCK\n Em hãy cười, cười-cười-cười-cười lên đi (Okay, turn on, nah-nah-nah)\n Đừng để nỗi buồn nó mắc kẹt lại ở trên mi (Có lẽ không biết đau)\n Nhiều lúc anh ngại dù em bảo là phải nhìn em đi (là phải nhìn em đi), yah\n Nhìn em ôm anh, chưa bao giờ mà anh nghĩ suy, yah\n \n Refrain: RPT MCK\n Callin' to my phone, yah\n Callin' to my phone\n Callin' to my phone\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone\n \n Refrain: Obito\n Hurt, hurt, baby, rất rất đau\n Hurt, hurt, baby, rất rất đau\n Hurt, hurt, baby, rất rất đau\n Hurt, hurt, baby, rất rất đau\n \n Verse 3: Obito\n Baby, 2 A.M. in the morning (In the morning)\n Tự hỏi dòng suy nghĩ của em ra sao, you got me fallin' (Got me fallin')\n Girl, ain't no trap, just good vibe when you callin' (When you callin')\n Chỉ cần dòng tin nhắn đến đón em, I'ma ballin'\n Đừng để trái tim ta phai tàn, để nụ hồng lại héo đi\n Nước mắt rơi trong đêm lạnh, nụ cười nàng lại méo đi\n Cứ trao nhau môi ngọt, bảo chuyện buồn nó xéo đi (Xéo đi)\n Hãy cứ khóc đi, anh đây rồi, tay người đâu anh kéo đi\n Điệu nhạc lướt đi trên cung đàn\n Ngàn ánh sao muôn màu, anh với em\n Màu đôi mắt em soi tâm hồn, người thấy không?\n Em không cần buồn mỗi đêm\n \n Chorus: Obito\n Em hãy cười, cười, cười, cười lên đi\n Mặt xinh kia đừng, đừng để những giọt lệ trên mi\n Anh muốn em nhìn vào màn hình và nhìn anh đi\n Vì anh hôn em chưa bao giờ mà anh nghĩ suy\n \n Refrain: Obito\n Hurt, hurt, baby (Baby), rất rất đau\n Hurt, hurt, baby, rất rất đau (Đau)\n Hurt, hurt, baby (Baby), rất rất đau\n Hurt, hurt, baby, rất rất đau\n \n Verse 4: Ronboogz\n Anh gục ngã từ ngay cầu môn nên hay phải ra sân bằng cáng\n Khi em cười xinh tựa như bình minh làm anh phải ra cân bằng sáng\n Bao buồn vui mà em vội cất ở đâu vào khi ta chạm trán\n Chờ đến một hôm mà em vụn vỡ thì nó lại đi ra làm loạn\n Anh lặng im và chỉ sợ em khóc ngay (Ngay)\n Niềm vui là những báu vật em chôn thật sâu ở bên gốc cây (Cây)\n Em nói rằng, Anh đừng đi, không phải ngại ngùng chi, lỡ em trót say \n  Thì tối nay bàn tay mình đan vào nhau ở trên tóc mây \n Gây hoang mang bằng vài câu lan man để nhẹ nhàng chạm đôi bên\n Nhìn làn mây lang thang từ từ bay sang ngang, mềm như vị ngọt môi em\n Anh chẳng biết em buồn hay vui\n Nhưng rồi một ngày mới nó vẫn đang chờ đây thôi\n Để ta lặng lẽ chìm vào trong bóng đêm\n Bài hát thường nghe tựa như con sóng êm\n Những thứ mà em vẫn nên, nên, nên mau chóng quên\n Dồn hết vào trong màn đêm, đêm, đêm, ta phóng lên\n \n Refrain: Ronboogz\n Duh-duh, dah-dah, duh-duh-duh\n Duh-duh, dah-dah, duh-duh-ah\n Duh-duh, dah-dah, duh-duh-duh\n Duh-duh, dah-dah, duh-duh-ah\n \n Refrain: Obito\n Hurt, hurt, baby (Baby), rất rất đau\n Hurt, hurt, baby, rất rất đau (Đau)\n Hurt, hurt, baby (Baby), rất rất đau\n Hurt, hurt, baby, rất rất đau\n \n Outro: RPT MCK\n Callin' to my phone, yah\n Callin' to my phone\n Callin' to my phone\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone, yah\n Callin' to my phone\n ",
      artistBio: "VSOUL, RPT MCK, Obito và Ronboogz là những nghệ sĩ nổi bật trong giới Hip-Hop và R&B Việt Nam, được biết đến với phong cách âm nhạc đa dạng và khả năng kết hợp ăn ý trong các dự án chung.", // Thêm thông tin bio nếu có
      artistCover: "./images/buonhayvui.png" 
    },

    {
      id: 14,
      title: "Đom Đóm - Remix",
      artist: "Jack-j97",
      src: "./assets/sounds/DomDomLeMonRemix-JackG5R-6898454.mp3",
      cover: "./images/j98.jpg", 
      duration: 210,
      genre: "Pop",
      album: "Đom Đóm",
      year: 1997,
      lyrics: "Verse 1:\n Người giờ còn đây không, thuyền này liệu còn sang sông\n Buổi chiều dài mênh mông, lòng người giờ hòa hay đông\n Hồng mắt em cả bầu trời đỏ hoen\n Ta như đứa trẻ ngây thơ, quên đi tháng ngày ngu ngơ\n Người là ngàn mây bay, mình là giọt sầu chia tay\n Người cạn bầu không say, còn mình giãi bày trong đây!\n Này gió ơi! Đừng vội vàng lắng nghe được không?\n \n Chorus:\n Gió ơi xin đừng lấy em đi\n Hãy mang em về chốn xuân thì\n Ngày nào còn bồi hồi tóc xanh\n Ngày nào còn trò chuyện với anh\n Em nói em thương anh mà, nói em yêu anh mà\n Cớ sao ta lại hóa chia xa\n Đóa phong lan lặng lẽ mơ màng\n Nàng dịu dàng tựa đèn phố Vinh\n Đẹp rạng ngời chẳng cần cố xinh\n \n Dạo:\n Hạt ngọc rơi rớt trên mái nhà, sau luống cà, như thế là\n \n Rap:\n Xa nhau, xa nhau, thôi thì nỗi nhớ hà cớ gì người mang\n Bên nhau không lâu, như là tờ giấy người thấy nghìn trang\n Vậy hãy để màu nắng phiêu du, phiêu du trên đỉnh đầu\n Và sẽ nói em nghe em nghe câu chuyện này là\n Cả bầu trời vàng đỏ, tím, xanh xanh\n Em luôn tồn tại ở trong trái tim anh\n \n Verse 2:\n Thuở mới niên thời tay nắm tay\n Cành lá me vàng ôm đắm say\n Nhẹ nhàng lá rơi, đọng lại vấn vương ven đường\n \n Chorus:\n Gió ơi xin đừng lấy em đi\n Hãy mang em về chốn xuân thì\n Ngày nào còn bồi hồi tóc xanh\n Ngày nào còn trò chuyện với anh\n Em nói em thương anh mà, nói em yêu anh mà\n Cớ sao ta lại hóa chia xa\n Đóa phong lan lặng lẽ mơ màng\n Nàng dịu dàng tựa đèn phố Vinh\n Đẹp rạng ngời chẳng cần cố xinh\n \n Bridge:\n Yêu em nhiều lòng này nhói đau\n Thương em nhiều, cạn tình biển sâu, biển sau anh hứa\n Nếu có ước muốn ngược thời gian\n Nhắm mắt cố xóa dòng đời này ái phong trần này vỡ tan\n Đành lòng sao em xé nát tâm can\n Họa kỳ thư theo bóng trăng vàng\n Giá như bây giờ, giá như em ở đây\n",
      artistBio: "Trịnh Trần Phương Tuấn (sinh ngày 12 tháng 4 năm 1997), thường được biết đến với nghệ danh Jack – J97 (hoặc đơn giản là Jack), là một ca sĩ, nhạc sĩ, rapper và diễn viên người Việt Nam.",
      artistCover: "./images/j98.jpg" 
    },

    {
      id: 15,
      title: "Thiên Lý Ơi",
      artist: "Jack-j97",
      src: "./assets/sounds/ThienLyOi-JackJ97-13829746.mp3",
      cover: "./images/thienlyoi.png", 
      duration: 210,
      genre: "Pop",
      album: "Đom Đóm",
      year: 1997,
      lyrics: "Intro:\n Thiên Lý ơi em có thể ở lại đây không?\n Biết rằng ngoài trời mưa rồng nhiều cô đơn lắm em\n Thiên Lý ơi em chỉ mong người bình yên thôi\n Nắm tay chặt đôi môi rồi ngồi giữa lương đôi\n \n Verse 1:\n Ngày hôm nay trời trông xanh đẹp như tranh\n Cùng dạo vòng quanh cả thế giới đường vội nhanh\n Một hình chi nhạt ký yêu thương đời mình ác phu vơ\n Về tình đầu em ơi\n Ngày hôm ấy là cô bé tu đôi mới\n Vậy mà giờ đã lớn trời ngây ngất mặc về cười\n Chạy đi dưới sương mưa khen tôi\n Vì ngượng ngại cứ xa để thiệt vời\n \n Verse 2:\n Anh ở vùng quê khu nghèo khó đo\n Có trăm điều khó\n Muốn lên thành phố nên phải cố sao cho hùng ảnh nó\n Thế rồi gặp em nhưng vừng vỡ đã lỡ đêm lại nhớ\n Nó gọi đến em\n Thiên Lý ơi em có thể ở lại đây không?\n Biết rằng ngoài trời mưa rồng nhiều cô đơn lắm em\n Thiên Lý ơi em chỉ muốn ngồi bình yên với\n Nắm tay chặt nỗi môi rồi ngồi giữa lương đô môi\n \n Chorus:\n Em yêu anh, em nặng yêu tương ái\n Hay em đang cô đơn chờ?\n Một giây trôi tương lai, sao cũng yêu ngay bây giờ\n Mà em chờ anh những ngày thơ, đêm nay có nàng mơ\n Vơ vơ như kẻ đồng thơ, ngó một mình đây dùa lại ngất ngơ\n \n Bridge:\n Người thư phép của người anh, lời mong lòng thấy ngất ngơ\n Bầu trời nào mình từng ngọt ngào giờ kết thây nắng tây\n Áo em ghé bay nhẹ lấy\n Ánh hoa bồng về khu mèo khó no\n Khó trong điều khó\n Muốn nghĩa thành phố nên phải cố\n Sao cho một ngày nọ\n Thế giới gặp nhau như vùng vỡ na\n Lỡ đêm lại nhớ\n Nhớ\n \n Verse 3:\n Cỡ này tuyên nền, mất cô đơn mất sống\n Thiên Lý ơi, em có thể ở lại đây không?\n Ít sáng ngoài trời mưa sông, nhiều cô đơn lắm em\n Thiên Lý ơi, em chỉ muốn người bình yên vô đi\n Lắm tay hình sặt nỗi mơ vơi, sao ngợi giữa nước rồi\n \n Outro:\n Người là giấc mơ phiêu bầu\n Lặng lẽ như là gió đông đêm lạnh sâu sâu\n Giờ trời làm mắt em thêm hồng\n Một đời hơn nên anh phải nghe lòng\n Trời ngần thơ duyên chúng ta thành thù\n Chúng ta thành đôi ơi, em có thể hỡi lại đêm khó\n Biết chẳng mai trời mưa sáng, nhiều câu tâm lòng\n Thiên Lý ơi, em chỉ muốn nói đừng nhìn anh\n Nóng tay vì trong nỗi môi, rồi ngồi giữa lưng đồi\n",
      artistBio: "Trịnh Trần Phương Tuấn (sinh ngày 12 tháng 4 năm 1997), thường được biết đến với nghệ danh Jack – J97 (hoặc đơn giản là Jack), là một ca sĩ, nhạc sĩ, rapper và diễn viên người Việt Nam.",
      artistCover: "./images/thienlyoi.png" 
    },

    {
      id: 16,
      title: "Là Một Thằng Con Trai",
      artist: "Jack-j97",
      src: "./assets/sounds/lamotthangcontrai.mp3",
      cover: "./images/lamotthangcontrai.png", 
      duration: 210,
      genre: "Pop",
      album: "Đom Đóm",
      year: 1997,
      lyrics: "Intro:\n Là 1 thằng con trai\n Thằng con trai\n Là 1 thằng con trai\n Thằng con trai\n Là 1 thằng con trai\n \n Verse 1:\n Nghèo như anh, màu trắng đôi bàn tay\n Rượu này không say\n Vậy uống cho vơi đầy\n Rồi mình kể nhau nghe, chuyện đêm mưa\n Chẳng có ô mà che\n Phố xá đêm\n Ai vô tình thôi cũng vì\n \n Chorus:\n Vì rằng ngày mai, mai, mai, mai\n Em bước đi cùng ai\n Anh lẻ loi\n Bờ môi khẽ run anh buồn\n Tiếng pháo vu quy\n Muốn giữ em đừng đi\n Nhưng cớ sao\n Mình chẳng nói nhau câu gì\n Vì rằng ngày mai, mai, mai, mai\n Em bước đi cùng ai\n Anh lẻ loi\n Bờ môi khẽ run anh buồn\n Tiếng pháo vu quy\n Muốn giữ em đừng đi\n Nhưng cớ sao\n Mình chẳng nói nhau câu gì\n \n Bridge:\n Vung tay hỉ nộ ái ố\n Cái số trời định\n Rất tiếc là thân cô\n Hồ đồ viết lên\n Trang tình yêu này vô bổ\n Khổ cả chặng đường\n Khi tờ giấy này photo\n Dù có nỗi nhớ muốn kêu tên\n Những ký ức mãi không quên\n Giờ này có được gì\n Người là đóa dã quỳ\n Chẳng thể hóa diệu kỳ\n \n Verse 2:\n Là 1 thằng con trai\n Nghèo như anh, màu trắng đôi bàn tay\n Rượu này không say\n Vậy uống cho vơi đầy\n Rồi mình kể nhau nghe, chuyện đêm mưa\n Chẳng có ô mà che\n Phố xá đêm\n Ai vô tình thôi cũng vì\n \n Chorus:\n Vì rằng ngày mai, mai, mai, mai\n Em bước đi cùng ai\n Anh lẻ loi\n Bờ môi khẽ run anh buồn\n Tiếng pháo vu quy\n Muốn giữ em đừng đi\n Nhưng cớ sao\n Mình chẳng nói nhau câu gì\n Vì rằng ngày mai, mai, mai, mai\n Em bước đi cùng ai\n Anh lẻ loi\n Bờ môi khẽ run anh buồn\n Tiếng pháo vu quy\n Muốn giữ em đừng đi\n Nhưng cớ sao\n Mình chẳng nói nhau câu gì\n \n Outro:\n Chào nhé, anh chúc yên bình\n Sau tất cả, ta vẫn là người nhà\n Và đừng khóc, xin giữ món quà\n Cho mối tình, cho ước mơ của mình\n Vì rằng ngày mai, mai, mai, mai\n Em bước đi cùng ai\n Anh lẻ loi\n Bờ môi khẽ run anh buồn\n Tiếng pháo vu quy\n Muốn giữ em đừng đi\n Nhưng cớ sao\n Mình chẳng nói nhau câu gì\n Là một thằng con trai\n Thằng con trai\n Là một thằng con trai\n Thằng con trai\n 1,2,3 let's go\n Là một thằng con trai\n",
      artistBio: "Trịnh Trần Phương Tuấn (sinh ngày 12 tháng 4 năm 1997), thường được biết đến với nghệ danh Jack – J97 (hoặc đơn giản là Jack), là một ca sĩ, nhạc sĩ, rapper và diễn viên người Việt Nam.",
      artistCover: "./images/lamotthangcontrai.png" 
    },

    {
      id: 17,
      title: "Anh chẳng thể",
      artist: "Phạm Kỳ",
      src: "./assets/sounds/AnhChangThe-PhamKy-6915970.mp3",
      cover: "./images/anhchangthe.png", 
      genre: "Lofi",
      album: "",
      lyrics: "Verse 1:\n Anh chẳng thể nói lời ngọt ngào như bao người\n Anh chẳng thể hát được bài tình ca em thích\n Anh không hề biết cách dành tặng em những bất ngờ\n Nên cũng chẳng dám nói ra là đã yêu\n \n Pre-Chorus:\n Thay lời anh gửi với gió vài câu hát\n Êm đềm như làn mây trôi biển xanh ngát\n Câu tình ca này không hay thì xin em đừng xua tay\n Bao ngày mong chờ anh mơ về em đây\n Đắng cay nơi này em ơi người có thấy\n Mất em sẽ buồn\n Sẽ đau khi cách xa nên anh chẳng thể\n \n Chorus:\n Vì anh chẳng muốn thấy em khóc\n Càng không thể nói cho em biết\n Tình yêu này vẫn cứ vẹn nguyên như ngày đầu tiên\n Vì anh sợ mất thứ duy nhất\n Muốn giữ em thật lâu\n Yêu em đậm sâu\n Vì một mai nói ra liệu ta có còn bên nhau nữa không\n \n Rap:\n Có nỗi nhớ, đêm về anh tự thu mình trong giấc mơ sâu\n Có tình yêu, không thể nói làm cho lòng anh xác xơ đi nhiều\n Yêu và xa và quên\n Thương là đau là nhớ\n Gió vấn vương sao mây hững hờ\n Những xót xa đâu ai có ngờ\n Khi màn đêm dần buông lời\n Anh dạo bước chân giữa lối quen\n Với một chút men nhấm môi\n Sắc màu tối tràn ngập khắp nơi\n Lối về bỗng dần xa vời\n Và nơi nào ta sẽ có em đến suốt đời\n \n Outro:\n Nếu lỡ một mai\n Câu ca này nói nên lời\n Vì ai\n Thì xin\n Xin em đừng xua tay\n",
      artistBio: "Phạm Kỳ là một ca sĩ trẻ với chất giọng ấm áp, chuyên thể hiện những bản Ballad và Lofi nhẹ nhàng, chạm đến cảm xúc của người nghe.",
      artistCover: "./images/anhchangthe.png" 
    },

    {
      id: 18,
      title: "Đặt trái tym lên bàn",
      artist: "Tùng",
      src: "./assets/sounds/dattraitymlenban.mp3",
      cover: "./images/dattraitymlenban.png", // Cập nhật cover phù hợp nếu có
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Con chim một mình vẫn sẽ hát hay dù cho người xem yêu thương tầm thường\n Anh đây một mình vẫn sẽ vỗ tay khi nghe những điều khờ dại yêu đương\n Dù anh biết trước sẽ có lẽ mất tất cả khi dám nói những câu thề\n Và con chim kia ra đi anh vẫn muốn sẽ có lúc quay về\n \n Verse 2:\n Nên sau tất cả mà vẫn thiết tha trong mỗi lần yêu như yêu lần đầu\n Sai lầm là điều đã qua nhưng vẫn sai phạm những lần như nhau\n Dù anh biết trước ba năm sau em bỗng chợt yêu ai như yêu lần đầu\n Từ đây cho đến lúc đấy anh vẫn muốn sẽ cứ thế bắt đầu\n \n Chorus:\n Dù anh biết trước..\n Anh vẫn đặt trái tim lên bàn\n Nếu em không màng\n Anh có mỗi hai bàn tay,\n Có gì để bàn đây\n Anh vẫn đặt trái tim lên bàn, đã luôn sẵn sàng\n Anh biết sao mỗi lần đau thì có thể có lần sau\n Anh vẫn đặt trái tim lên bàn\n Đặt trái tim lên bàn\n Anh vẫn đặt trái tim lên bàn\n Đặt trái tim lên bàn\n \n Verse 3:\n Em mang về nhà hoặc là bỏ qua\n Con chim vẫn ca bài ca bình thường\n Sau cùng là chuyện chúng ta có dám vỡ vụn để lại yêu thương\n Và em biết trước có những lúc thấy đúng\n Và đôi khi không những bởi vì\n Yêu nên sẽ luôn yêu cho dù mọi thứ chẳng có lý gì\n \n Verse 4:\n Sau ba thập kỷ mà mình đã yêu ta không còn lo mất thêm điều gì\n Ta chỉ thường chẳng thể dám yêu khi không có gì để mà cho đi\n Và em biết trước anh đã ước em bước về đi nhưng em đã không hề\n Học yêu khi ta cho đi nhưng cũng đôi lúc biết cách nhận về\n \n Chorus:\n Và em biết trước..\n Anh sẽ đặt trái tim lên bàn\n Nếu em không màng\n Anh có mỗi hai bàn tay,\n Có gì để bàn đây\n Anh vẫn đặt trái tim lên bàn, đã luôn sẵn sàng\n Anh biết sau mỗi lần đau thì có thể có lần sau\n Anh vẫn đặt trái tim lên đôi tay em đừng nói gì\n \n Bridge:\n Nếu đêm về thì\n Trái tim nhiều khi\n Có con chim về bên nơi đây\n Chẳng còn muốn đi\n Cánh chim của trời sẽ bay về nơi có em\n Biết yêu trong đời chỉ khi qua rồi\n Chỉ khi xong xuôi\n Chỉ khi đã muộn rồi\n \n Outro:\n Giữ trái tim này nếu trong một ngày bỗng thấy giật mình\n Tình yêu đi qua.\n Anh vẫn đặt trái tim lên bàn\n Nếu em không màng\n Anh có mỗi hai bàn tay,\n Có gì để bàn đây\n Anh vẫn đặt trái tim lên bàn đã luôn sẵn sàng,\n Anh biết sao mỗi lần đau thì có thể có lần sau,\n Anh vẫn đặt trái tim\n Vẫn đặt trái tim\n Anh vẫn đặt trái tim\n Vẫn đặt trái tim.\n",
      artistBio: "Tùng (Tùng Acoustic) là một ca sĩ, nhạc sĩ trẻ được biết đến qua các bản nhạc lofi và acoustic mộc mạc, sâu lắng, thể hiện cảm xúc chân thành trong từng ca từ.",
      artistCover: "./images/dattraitymlenban.png" // Thêm đường dẫn ảnh nghệ sĩ
    },

    {
      id: 19,
      title: "Mất Kết Nối",
      artist: "Dương - DOMIC",
      src: "./assets/sounds/MatKetNoi-DuongDomic-16783113.mp3",
      cover: "./images/matketnoi.png", // Cập nhật cover phù hợp nếu có
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Intro:\n Nỗi nhớ em trong đêm thật dài\n Thêm lý do cho anh tồn tại\n Để lại chạm vào bờ môi ấy dịu dàng\n Lời thì thầm ngọt ngào bên tai\n \n Ta mất nhau thật rồi em ơi\n Tan vỡ hai cực đành chia đôi\n Anh sẽ luôn ghi nhớ em trong từng tế bào\n Vậy mà dừng lại như thế sao\n \n Verse 1:\n Chẳng cần vật chất, chẳng cần Spotlight\n Chỉ cần vài nốt nhạc hòa cùng cây mic\n Từ chối cuộc vui đi về một nơi xa\n Vì bận ngồi đây thả thêm một vài câu ca\n \n Giữa đời có được mấy\n D O M I C\n Nhưng có lẽ giờ này, em đã ngủ say\n Còn anh thì vẫn mang\n \n Chorus:\n Nỗi nhớ em trong đêm thật dài\n Thêm lý do cho anh tồn tại\n Để lại chạm vào bờ môi ấy dịu dàng\n Lời thì thầm ngọt ngào bên tai\n \n Ta mất nhau thật rồi em ơi\n Tan vỡ hai cực đành chia đôi\n Anh sẽ luôn ghi nhớ em trong từng tế bào\n Vậy mà dừng lại như thế sao\n \n Verse 2:\n Cuộc gọi nhỡ cho em hàng đêm đến tận 200 lần\n Dòng ký ức trong em về anh bây giờ đang phai dần\n Quay gót rời đi, không để lại gì\n Bay vút qua tầm tay\n Sao còn vương vấn để làm gì?\n \n Bọn mình kết thúc thật rồi, hết sức thật rồi\n Phải không em ơi?\n Chuyện tình có khúc phải lòng, có lúc phải rời\n Vậy đến lúc rồi\n Và có lẽ giờ này, em đã ngủ say\n Còn anh thì vẫn mang\n \n Chorus:\n Nỗi nhớ em trong đêm thật dài\n Thêm lý do cho anh tồn tại\n Để lại chạm vào bờ môi ấy dịu dàng\n Lời thì thầm ngọt ngào bên tai\n \n Ta mất nhau thật rồi em ơi\n Tan vỡ hai cực đành chia đôi\n Anh sẽ luôn ghi nhớ em trong từng tế bào\n Vậy mà dừng lại như thế sao\n \n Bridge:\n Trong anh hay là trong em đã đổi thay bao nhiêu suy nghĩ\n Yêu thương nay còn đâu\n Anh còn yêu, nghe hơi vô lý\n Ta mất kết nối thật rồi\n Đã mất kết nối thật rồi em ơi\n \n Trong anh hay là trong em đã đổi thay bao nhiêu suy nghĩ\n Yêu thương nay còn đâu\n Anh còn yêu, nghe hơi vô lý\n Ta mất kết nối thật rồi\n Đã mất kết nối thật rồi em ơi\n \n Outro:\n Ta mất nhau thật rồi em ơi\n Tan vỡ hai cực đành chia đôi\n Anh sẽ luôn ghi nhớ em trong từng tế bào\n Vậy mà dừng lại như thế sao\n",
      artistBio: "Dương - DOMIC là nghệ sĩ trẻ với phong cách âm nhạc độc đáo, thường thể hiện những ca khúc Pop và R&B mang màu sắc riêng biệt, tạo dấu ấn trong lòng khán giả.",
      artistCover: "./images/matketnoi.png" // Thêm đường dẫn ảnh nghệ sĩ
    },

    {
      id: 20,
      title: "Dù cho tận thế",
      artist: "Erik",
      src: "./assets/sounds/DuChoTanThe-Erik-36691650.mp3",
      cover: "./images/duchotanthe.png", // Cập nhật cover phù hợp nếu có
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Anh có nỗi sợ, sợ ta mất nhau\n Tình yêu bắt đầu không phải để tìm nỗi đau\n Sợ giây phút này chẳng còn thấy em bên anh về sau\n Nhiều khi nóng giận, nhiều khi cãi nhau để rồi cuối cùng ta lại trở về với nhau\n Đôi tay này cần nâng niu vì em là người anh yêu\n \n Chorus:\n Dù cho tận thế vẫn yêu em, luôn yêu em\n Đừng hòng ai dành lấy anh không buông, anh không buông\n Dẫu cho thời gian khiến anh quên lãng\n Vẫn nhớ một mình em vì em xứng đáng\n Tận sâu tiềm thức anh yêu em, luôn yêu em\n Thật tâm anh chỉ muốn em bên mình mãi\n Không cho phép em đến với một ai\n Nếu như anh vẫn tồn tại\n \n Verse 2:\n Trời sẽ bớt lạnh rồi mây sẽ tan dù mưa sẽ tạnh khi mặt trời ghé ngang\n Em có biết rằng tình yêu vốn không như mặt hồ yên ắng\n Từng cái vỗ về\n Từng cái nắm tay\n Từng cái nhíu mày khi gặp nhiều điều đắng cay\n Và từng khóc trên vai nhau\n Rồi cùng ngủ thiếp đi trong yên bình\n \n Chorus:\n Dù cho tận thế vẫn yêu em, luôn yêu em\n Đừng hòng ai dành lấy anh không buông, anh không buông\n Dẫu cho thời gian khiến anh quên lãng\n Vẫn nhớ một mình em vì em xứng đáng\n Tận sâu tiềm thức anh yêu em, luôn yêu em\n Thật tâm anh chỉ muốn em bên mình mãi\n Không cho phép em đến với một ai\n Nếu như anh vẫn tồn tại\n \n Bridge:\n Dù cho trái đất hôm nay tan thành ra nhiều hướng\n Dù cho tận thế cũng sẽ ôm chặt người anh thương\n Chỉ cần có em bên mình là những phút giây yên bình\n Dẫu có nhắm mắt vẫn không buông\n \n Chorus:\n Dù cho tận thế anh không buông tay em đâu\n Đừng hòng ai dành lấy anh không buông, anh không buông\n Dẫu cho thời gian khiến anh quên lãng\n Vẫn nhớ một mình em vì em xứng đáng\n Tận sâu tiềm thức anh yêu em, luôn yêu em\n Thật tâm anh chỉ muốn em bên mình mãi\n Không cho phép em đến với một ai\n Nếu như anh vẫn tồn tại\n Yêu em sẽ không bao giờ sai mỗi khi anh còn tồn tại\n",
      artistBio: "Erik tên thật là Lê Trung Thành, là một ca sĩ nổi tiếng của V-Pop với chất giọng nội lực, khả năng biểu cảm tốt và nhiều bản hit Ballad được khán giả yêu thích.",
      artistCover: "./images/duchotanthe.png" 
    },

    {
      id: 21,
      title: "Đi giữa trời rực rỡ",
      artist: "Ngô Lan Hương",
      src: "./assets/sounds/DiGiuaTroiRucRoFromDiGiuaTroiRucRo-NgoLanHuong-16686603.mp3",
      cover: "./images/digiatroirucro.png", 
      duration: 210,
      genre: "Pop",
      album: "",
      lyrics: "Verse 1:\n Mát lành như dòng suối\n Tâm hồn mới chớm đôi mươi\n Vô tư nơi rừng núi, chưa từng ghé chốn xa xôi\n Vào một ngày nắng xanh, lảng tránh nhân duyên sắp đặt\n Để rồi mình đi về phía chân đồi\n Phía bên kia đồi có bầu trời mênh mông\n Không ai biết trước chuyện chi, có phải như mình ngóng trông\n Lắng nghe tim này vững niềm tin ta mang\n Tuổi trẻ này thênh thang, có ngại chi ta sẵn sàng\n \n Chorus:\n Và ta đi đi vượt hết núi đồi, giai điệu của mây trời, đưa về nơi ngập tràn ánh nắng\n Và ta đi đi vượt hết núi đồi, phiêu lưu với cuộc đời, mang hành trang kiêu hãnh ngút ngàn\n Còn chần trừ chi hãy sống hết mình, sống trọn phút giây chân tình\n Thanh xuân đang chờ, bình minh cuộc đời thật đẹp như mơ\n Và sống hết mình, dẫu trái tim còn đầy bỡ ngỡ\n Thênh thang bước đi giữa trời rực rỡ\n \n Verse 2:\n Phía bên kia đồi có dòng người xoay xoay\n Gian nan khó khăn về tay, đôi lần cam go lắm thay\n Lắng nghe tim này, vững niềm tin ta mang\n Tuổi trẻ mình thênh thang có ngại chi ta sẵn sàng\n \n Chorus:\n Và ta đi đi vượt hết núi đồi, giai điệu của mây trời, đưa về nơi ngập tràn ánh nắng\n Và ta đi đi vượt hết núi đồi, phiêu lưu với cuộc đời, mang hành trang kiêu hãnh ngút ngàn\n Còn chần chờ chi hãy sống hết mình, sống trọn phút giây chân tình\n Thanh xuân đang chờ, bình minh cuộc đời thật đẹp như mơ\n Và sống hết mình, dẫu trái tim còn đầy bỡ ngỡ\n Thênh thang bước đi giữa trời rực rỡ\n \n Bridge:\n Như một vì tinh tú em lấp lánh trên bầu trời rộng lớn\n Em chưa bao giờ quên đi mất rằng mình là ai\n Vô tư và kiêu hãnh em biết hiện tại này mình đang sống\n Hoạ một bức tranh cuộc đời em mong\n \n Chorus:\n Sống hết mình, sống trọn phút giây chân tình\n Thanh xuân đang chờ, bình minh cuộc đời thật đẹp như mơ\n Và sống hết mình, dẫu trái tim còn đầy bỡ ngỡ\n Thênh thang bước đi giữa trời rực rỡ\n Sống hết mình, sống trọn (bước ta điiiiiiiii.....)\n Thanh xuân đang chờ, bình minh cuộc đời thật đẹp như mơ\n Và sống hết mình, dẫu trái tim còn đầy bỡ ngỡ\n Thênh thang bước đi giữa trời rực rỡ\n Thênh thang bước đi giữa trời rực rỡ\n Thênh thang bước đi giữa trời rực rỡ\n",
      artistBio: "Ngô Lan Hương là một ca sĩ trẻ có chất giọng trong trẻo, sở trường thể hiện những ca khúc Pop mang thông điệp tích cực, truyền cảm hứng về tuổi trẻ và cuộc sống.",
      artistCover: "./images/digiatroirucro.png" 
    },

    {
      id: 22,
      title: "Nằm Bên Anh",
      artist: "Minh Đinh, Hà An Huy",
      src: "./assets/sounds/NamBenAnh-MinhDinhHaAnHuy-35927681.mp3",
      cover: "./images/nambenanh.png", 
      duration: 210,
      genre: "Pop",
      album: "",
      lyrics: "Verse 1:\n Và khi ông trời đang yên giấc say\n Là khi ánh trăng cũng sáng và tròn đầy\n Là khi thành phố đã vắng người\n Chẳng thấy tiếng nói cười\n Của một ai\n \n Và hết một ngày sao trôi qua quá lâu\n Với bao nhiêu những con số đau đầu\n Em hãy chọn hết suy nghĩ thừa\n Bỏ hết và khóa cửa\n Để gần lại bên anh\n \n Chorus:\n Cho bao lo toan nằm xuống khi anh đưa vào trong\n Để cho cánh tay anh ôm em vào lòng\n Bừng lên vào giữa đêm\n Đừng lo gì nữa em\n Vì điều ngọt ngào trao em luôn luôn là mãi mãi\n \n Rồi mai khi em bật khóc nơi phương trời xa\n Thì xin chớ quên cánh tay anh là nhà\n Tựa như làn gió mát đong đưa\n Cùng dư vị ướt át trong mưa\n Vào sâu\n Khi em nằm bên anh\n \n Verse 2:\n Xem từng hạt mưa rơi\n Bầu trời muốn em ở lại\n Kim đồng hồ buông lơi\n Anh không muốn em thở dài\n Khi đôi môi chạm nhau\n Ta coi thế gian này hòa trong đôi mắt ấy\n \n Khao khát môi kề môi rơi từng nhịp\n Ngập ngừng lả lướt đôi mình feeling so deep\n Đừng ngại ngần hôn lên đôi môi\n Chỉ cần anh không lôi thôi\n Rồi gần lại bên anh\n \n Chorus:\n Cho bao lo toan nằm xuống khi anh đưa vào trong\n Để cho cánh tay anh ôm em vào lòng\n Bừng lên vào giữa đêm\n Đừng lo gì nữa em\n Vì điều ngọt ngào trao em luôn luôn là mãi mãi\n \n Rồi mai khi em bật khóc nơi phương trời xa\n Thì xin chớ quên cánh tay anh là nhà\n Tựa như làn gió mát đong đưa\n Cùng dư vị ướt át trong mưa\n Vào sâu\n Khi em nằm bên anh\n \n Outro:\n Vị ngọt trao em\n Vị ngọt trao em\n Vị ngọt trao em\n Vị ngọt trao em\n",
      artistBio: "Minh Đinh và Hà An Huy là hai nghệ sĩ trẻ tài năng của V-Pop, thường xuyên hợp tác trong các dự án âm nhạc mang đến những bản Pop Ballad ngọt ngào và lãng mạn.",
      artistCover: "./images/nambenanh.png" 
    },

    {
      id: 23,
      title: "Một Đời",
      artist: "14 Casper, Bon, buitruonglinh",
      src: "./assets/sounds/MotDoi-14CasperBonNghiem-8776989.mp3",
      cover: "./images/motdoi.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Vì yêu em\n Anh chẳng ngại đường dài phía trước\n Là ngày bên em, những con phố\n Có hoa bay bao sắc màu\n Những con bướm chẳng còn buồn\n Và những khúc ca\n Sẽ thêm màu yêu thương\n Ngày hôm nay\n Đôi ta mãi sẽ là của nhau\n \n Pre-Chorus:\n Những cơn gió sẽ về\n Khi mùa đông ghé qua\n Nhưng anh chẳng lo\n Vì đã có em ở đây rồi\n Phút giây ấy để dành cho mãi mãi\n Ta mỉm cười nhìn về tương lai\n Em à\n \n Chorus:\n Ngày hôm nay cho anh được nói\n Một đời thương em\n Một đời yêu em\n Đoạn đường tương lai\n Ta sẻ chia khốn khó\n Một đời bên nhau\n Gần nhau mãi không rời\n Tình yêu của anh chỉ là như thế\n Một đời cho ta\n Một đời đi qua\n Cùng nhau về sau\n Dù giận hờn buồn vui\n Phong ba sóng gió\n Hãy nở nụ cười mà em xứng đáng\n Phần đời còn lại để anh lo toan\n Muôn lối dẫn ta về chung\n Một đời thênh thang\n \n Verse 2:\n Ngày không em\n Anh như ngọn đèn hải đăng chớm tắt\n Chỉ một ánh mắt\n Khiến ta ngỡ\n Chốn hoang sơ hết khô cằn\n Phút giây ấy để dành cho hai ta\n Khúc hòa ca gửi lại ngày tháng qua\n Một đời như thế\n Chẳng có chữ lìa xa\n \n Chorus:\n Một đời thương em\n Một đời yêu em\n Đoạn đường tương lai\n Ta sẻ chia khốn khó\n Một đời bên nhau\n Gần nhau mãi không rời\n Tình yêu của anh chỉ là như thế\n Một đời cho ta\n Một đời đi qua cùng nhau về sau\n Dù giận hờn buồn vui\n Phong ba sóng gió\n Hãy nở nụ cười mà em xứng đáng\n Phần đời còn lại để anh lo toan\n Muôn lối dẫn ta về chung\n Một đời thênh thang\n \n Outro:\n Một đời thương em\n Một đời cho ta\n Một đời đi qua cùng nhau về sau\n Dù giận hờn buồn vui\n Phong ba sóng gió\n Hãy nở nụ cười mà em xứng đáng\n Phần đời còn lại để anh lo toan\n Muôn lối dẫn ta về chung\n Một đời thênh thang\n Hãy nở nụ cười mà em xứng đáng\n Phần đời còn lại để anh lo toan\n Muôn lối dẫn ta về chung\n Một đời thênh thang\n",
      artistBio: "14 Casper, Bon Nghiêm và Bùi Trường Linh là những nghệ sĩ trẻ đầy triển vọng trong làng nhạc Việt, được biết đến với những bản Ballad sâu lắng, dễ đi vào lòng người.",
      artistCover: "./images/motdoi.png" 
    },

    {
      id: 24,
      title: "Xuân Thì",
      artist: "Phan Mạnh Quỳnh",
      src: "./assets/sounds/XuanThi-PhanManhQuynh-16756142.mp3",
      cover: "./images/xuanthi.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Gặp em trong những người bạn thân một ngày mùa đông\n Nhiều năm xa cách kể từ lúc ấy chẳng còn chờ mong\n Và thời gian đã nhuộm màu chính ta\n Nên giờ mình khác xưa, đôi nếp nhăn đầu mùa\n \n Verse 2:\n Giờ thôi xao xuyến nhưng còn bâng khuâng như chuyện vừa qua\n Chuyện thời thương mến chỉ bằng đan tay hôn vội vài giây\n Và dù ta cũng có niềm chưa vui mất ngàn ngày để vui\n Nhưng đã qua cả rồi khi vui hãy nhớ\n \n Chorus:\n Tình buồn không phải lúc nào cũng chỉ để quên đi\n Tình buồn lưu giữ bao nhiêu mộng mơ lúc xuân thì\n Tại mưa tại nắng hay muôn niềm thương\n Đã vấn vương rồi như sương, một thời mãi xa\n \n Để rồi nghĩ tới ta đau nhẹ tênh giữa trái tim\n Nụ cười nước mắt sau những bão giông đã ngủ yên\n Và nhìn lại ta xem ta có hạnh phúc với chính ta ngày hôm nay\n Có khi bước không chung đường vậy lại hay\n \n Verse 3:\n Cảnh xưa nơi cũ những miền ta qua cũng nhiều đổi thay\n Mộng mơ hoa tuyết khắp trời trắng xóa đôi tà áo bay\n Giờ còn bóng dáng hai người an nhiên sau không ít những chênh vênh\n \n Outro:\n Mỉm cười với nhau lần đầu kể từ nỗi đau\n Có khi bước không chung đường, có khi mất nhau\n Có khi bước không chung đường vậy lại hay\n",
      artistBio: "Phan Mạnh Quỳnh là một nhạc sĩ, ca sĩ nổi tiếng với những bản Ballad sâu lắng, lời ca đầy chất thơ và giai điệu giản dị nhưng đi vào lòng người.",
      artistCover: "./images/xuanthi.png" 
    },

    {
      id: 25,
      title: "Nàng Thơ",
      artist: "Hoàng Dũng",
      src: "./assets/sounds/NangTho-HoangDung-6413381.mp3",
      cover: "./images/nangtho.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "Nàng Thơ",
      lyrics: "Verse 1:\n Em, ngày em đánh rơi nụ cười vào anh\n Có nghĩ sau này em sẽ chờ\n Và vô tư cho đi hết những ngây thơ\n Anh, một người hát mãi những điều mong manh\n Lang thang tìm niềm vui đã lỡ\n Chẳng buồn dặn lòng quên hết những chơ vơ\n \n Pre-Chorus:\n Ta yêu nhau bằng nỗi nhớ chưa khô trên những bức thư\n Ta đâu bao giờ có lỗi khi không nghe tim chối từ\n Chỉ tiếc rằng\n \n Chorus:\n Em không là nàng thơ\n Anh cũng không còn là nhạc sĩ mộng mơ\n Tình này nhẹ như gió\n Lại trĩu lên tim ta những vết hằn\n Tiếng yêu này mỏng manh\n Giờ tan vỡ, thôi cũng đành\n Xếp riêng những ngày tháng hồn nhiên\n Trả lại...\n \n Verse 2:\n Mai, rồi em sẽ quên ngày mình khờ dại\n Mong em kỷ niệm này cất lại\n Mong em ngày buồn thôi ướt đẫm trên vai\n Mai, ngày em sải bước bên đời thênh thang\n Chỉ cần một điều em hãy nhớ\n Có một người từng yêu em tha thiết vô bờ\n \n Chorus:\n Em không là nàng thơ\n Anh cũng không còn là nhạc sĩ mộng mơ\n Tình này nhẹ như gió\n Lại trĩu lên tim ta những vết hằn\n Tiếng yêu này mỏng manh\n Giờ tan vỡ, thôi cũng đành\n Xếp riêng những ngày tháng hồn nhiên\n Trả hết cho em\n",
      artistBio: "Hoàng Dũng là một ca sĩ, nhạc sĩ với phong cách âm nhạc Pop và R&B đặc trưng, nổi tiếng với những bản Ballad da diết và ca từ lãng mạn.",
      artistCover: "./images/nangtho.png" 
    },

    {
      id: 26,
      title: "Ánh sao và bầu trời",
      artist: "T.R.I x Cá",
      src: "./assets/sounds/AnhSaoVaBauTroi-TRI-7085073.mp3",
      cover: "./images/ánhaovabauutroi.png",
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Chưa bao giờ tôi thấy, em cười nhiều như hôm nay\n Chưa bao giờ tôi thấy, mắt em long lanh thế này\n Em say mê nói về anh ta, về cuộc hẹn hò ngày hôm qua\n Người mà luôn làm em ngạc nhiên với những món quà\n \n Chorus:\n Ngỡ như rằng mình sẽ vui, khi em nói có người mới\n Thế nhưng trong lòng chơi vơi, con tim vỡ ra thành trăm mảnh rồi\n Chỉ là một giây buông tay, giờ đành lỡ nhau, cả một đời\n Em có thêm một ánh sao, tôi mất bầu trời\n \n Verse 2:\n Muốn nói tôi vẫn còn yêu (em)\n Muốn giữ lấy đôi bờ vai (em)\n Muốn nói em ơi đừng đi, đừng đi về nơi có anh ta đang đứng chờ\n Muốn nắm tay em một lần (nữa)\n Cùng quay về lại con phố (xưa)\n Nụ hôn đầu tiên mình trao dưới mưa em đã quên chưa?\n \n Bridge:\n Em, em đừng bao giờ khóc\n Hãy hạnh phúc nhé xin đừng khóc sẽ có người luôn làm em mỉm cười\n Còn điều gì đọng lại ở tim anh\n Dù mọi chuyện giờ đã qua nhanh anh sẽ cố giữ cố giữ\n Dù rất muốn nói ra\n Anh rất nhớ em đêm ngày chẳng thể nào ngủ được\n I really really miss you babe\n \n Chorus:\n Ngỡ như rằng mình sẽ vui, khi em nói có người mới\n Thế nhưng trong lòng chơi vơi, con tim vỡ ra thành trăm mảnh rồi\n Chỉ là một giây buông tay, giờ đành lỡ nhau, cả một đời\n Em có thêm một ánh sao, tôi mất bầu trời\n \n Verse 3:\n Muốn nói tôi vẫn còn yêu (em)\n Muốn giữ lấy đôi bờ vai (em)\n Muốn nói em ơi đừng đi, đừng đi về nơi có anh ta đang đứng chờ\n Muốn nắm tay em một lần (nữa)\n Cùng quay về lại con phố (xưa)\n Nụ hôn đầu tiên mình trao dưới mưa em đã quên chưa?\n \n Outro:\n Mong cho em luôn vui và cười như lúc này\n Dù anh sẽ chẳng ở mãi bên em\n Vì giờ đã có người thay thế anh\n Xin người kia sẽ chẳng để lệ rơi mắt em\n Sẽ luôn thật quan tâm em\n",
      artistBio: "T.R.I và Cá là hai nghệ sĩ trẻ với phong cách âm nhạc Pop và Indie Pop, được biết đến qua những ca khúc mang đậm cảm xúc và lời ca ý nghĩa.",
      artistCover: "./images/ánhaovabauutroi.png"
    },

    {
      id: 27,
      title: "Để mị nói cho mà nghe",
      artist: "Hoàng Thùy Linh",
      src: "./assets/sounds/DeMiNoiChoMaNghe-HoangThuyLinh-6153588.mp3",
      cover: "./images/deminoichomanghe.png", 
      duration: 210,
      genre: "V-Pop",
      album: "",
      lyrics: "Verse 1:\n Để Mị nói cho mà nghe\n Tâm hồn này chẳng để lặng lẽ\n Thương cha xót mẹ\n Thôi thì mặc phận đời mình chơi vơi\n \n Để Mị nói cho mà nghe\n Hết năm nay Mị vẫn còn trẻ\n Xuân đương tới rồi\n Nên Mị cũng muốn đi chơi\n \n Chorus:\n Này là mình đi theo giấc mơ sớm mai gọi mời\n Nơi vòng tay ấm êm chẳng rời\n Hoa ban trắng nở đầy con bản nọ\n Hương sắc còn chưa phai\n \n Đời mình đâu có mấy vui cớ sao lại buồn\n Biết ngày mai trắng đen hay tròn vuông\n Em không bắt quả pao rơi rồi\n Tiếc không một đời đơn côi\n \n Rap:\n Mị còn trẻ Mị còn muốn đi chơi\n Thanh xuân sao lại phải nghỉ ngơi\n Hoa ban trắng trên nương chớm nở\n Đẹp như tâm hồn em còn ngây thơ\n \n Em làm gì đã có người yêu\n Em còn đang sợ ế đây này\n Vậy tại sao quả pao không nắm trên tay\n Để bao trai làng chìm đắm trong mê say\n \n Mùa xuân này, Mị muốn xúng xính trong váy hoa\n Không đi làm sao biết ngoài kia một mai là sương hay nắng toả\n Cơ hội này Mị sẽ nắm lấy, Mị chẳng cần một ai dắt tay\n Và hết hôm nay, Mị sẽ chuồn khỏi nơi đây!\n \n Verse 2:\n Để Mị nói cho mà nghe\n Tâm hồn này chẳng để lặng lẽ\n Thương cha xót mẹ\n Thôi thì mặc phận đời mình chơi vơi\n \n Để Mị nói cho mà nghe\n Hết năm nay Mị vẫn còn trẻ\n Xuân đương tới rồi\n Nên Mị cũng muốn đi chơi\n \n Chorus:\n Này là mình đi theo giấc mơ sớm mai gọi mời\n Nơi vòng tay ấm êm chẳng rời\n Hoa ban trắng nở đầy con bản nọ\n Hương sắc còn chưa phai\n \n Đời mình đâu có mấy vui cớ sao lại buồn\n Biết ngày mai trắng đen hay tròn vuông\n Em không bắt quả pao rơi rồi\n Tiếc không một đời đơn côi\n",
      artistBio: "Hoàng Thùy Linh là một ca sĩ, diễn viên nổi tiếng của Việt Nam, được biết đến với phong cách âm nhạc độc đáo kết hợp giữa Pop hiện đại và âm hưởng dân gian, cùng với những màn trình diễn cuốn hút.",
      artistCover: "./images/deminoichomanghe.png" 
    },

    {
      id: 28,
      title: "Từ Đó",
      artist: "Phan Mạnh Quỳnh",
      src: "./assets/sounds/TuDoMatBiecOst-PhanManhQuynh-6182376.mp3",
      cover: "./images/tudo.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "Mắt Biếc OST",
      lyrics: "Intro:\n Và hồn tôi từ đó là khúc ca vang trong ngần\n Làm đôi môi rạng rỡ tình ban đầu\n Hòa vào cây, vương vào nắng và giấc mơ tôi có nàng\n Trong bài ca, ta bước thênh thang\n \n Verse 1:\n Khi dừng chân, nhặt chiếc lá rơi trong gió chiều\n Và hoàng hôn chợt đến làm tôi nhớ\n Khi mùa xuân, nhành hoa tím em đưa tay cài\n Nghe từ tim rung lên hân hoan\n \n Chorus:\n Và hồn tôi từ đó là khúc ca vang trong ngần\n Làm đôi môi rạng rỡ tình ban đầu\n Hòa vào cây, vương vào nắng và giấc mơ tôi có nàng\n Trong bài ca, ta bước thênh thang\n \n Breakdown:\n La-la, la-là-la, la-la là-la-là-la-là, la-lá-lá-là\n La-là-la-la, là-la-la-la-la-la-lá\n \n Bridge:\n Thấy nhớ chiếc lá vừa rơi\n Chiều nổi gió, có những mộng mơ\n Ngậm nhành cỏ dại trên môi, tôi khác một ngày\n Từ hôm nay, tôi đã biết yêu em\n \n Verse 2:\n Nơi bình yên, niềm vui giữa tháng năm học trò\n Cỏ đồng xanh, phượng thắm, đạp xe qua chợ vãn và\n Em cùng tôi là muôn nốt âm thanh diệu kỳ\n Bản tình ca sương mai chỉ ta lắng nghe\n \n Chorus:\n Và hồn tôi từ đó là khúc ca vang trong ngần\n Làm đôi môi rạng rỡ tình ban đầu\n Hòa vào cây, vương vào nắng và giấc mơ tôi có nàng\n Trong bài ca, ta bước thênh thang\n \n Outro:\n Vì tôi có em, hồn tôi từ đó...\n Hòa vào cây, vương vào nắng và giấc mơ tôi có nàng\n Trong bài ca, ta bước thênh thang\n Vì tôi có em...\n",
      artistBio: "Phan Mạnh Quỳnh là một nhạc sĩ, ca sĩ nổi tiếng với những bản Ballad sâu lắng, lời ca đầy chất thơ và giai điệu giản dị nhưng đi vào lòng người.",
      artistCover: "./images/tudo.png" 
    },

    {
      id: 29,
      title: "Tình Yêu Buông Tha Cho Chúng Ta",
      artist: "Trungg I.U, Lâm Bảo Ngọc",
      src: "./assets/sounds/TinhYeuBuongThaChoChungTa-TrunggIULamBaoNgoc-17143675.mp3",
      cover: "./images/tinhyeuubuongthachochungta.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Anh cũng đã chấp nhận\n Mình chia cắt vốn là điều hiển nhiên\n Tại sao nỗi buồn cứ đến rồi đi?\n Mặc kệ con tim làm phiền lí trí?\n \n Đầu mùa đổ mưa từng cơn trên vai\n Như em nặng trĩu đầy những nỗi niềm\n Biết trái tim anh còn hình bóng em\n Nhưng chắc anh đang ở bên người…\n \n Verse 2:\n Anh cũng đã chấp nhận\n Mình yếu đuối không thể nào cùng em\n Trải qua những ngày thanh xuân tuyệt vời\n Giờ đã có người lo buồn vui nơi em\n \n Đi hết cả một quãng đời dài\n Tới nơi cô đơn ở lại với em…\n Thế mới biết thực sự trên đời này\n Chỉ có riêng anh hiểu em thôi\n \n Chorus:\n Dẫu có yêu đến bao lâu\n Mà chẳng thể bình yên ở trong nhau…\n Phải chăng duyên kiếp mình chỉ ngắn đến thế thôi em?\n Đành chịu ngàn đớn đau?\n \n Phải làm sao để tình yêu buông tha cho chúng ta?\n Anh biết anh mất em rồi…\n Chẳng phải người đã nói vì anh tất cả?\n \n Verse 3:\n Em cũng đã chấp nhận\n Mình yếu đuối không thể nào cùng anh\n Trải qua những ngày thanh xuân tuyệt vời\n Giờ đã có người lo buồn vui nơi anh\n \n Đi hết cả một quãng đời dài\n Tới nơi cô đơn ở lại với anh…\n Thế mới biết thực sự trên đời này\n Chỉ có riêng em hiểu anh thôi\n \n Chorus:\n Dẫu có yêu đến bao lâu\n Mà chẳng thể bình yên ở trong nhau…\n Phải chăng duyên kiếp mình chỉ ngắn đến thế thôi anh?\n Đành chịu ngàn đớn đau?\n \n Phải làm sao để tình yêu buông tha cho chúng ta?\n Em biết em mất anh rồi…\n Chẳng phải người đã nói vì em tất cả?\n \n Bridge:\n Anh biết để em quay về đây còn khó hơn cả việc chết đi…\n Khi anh bỏ lại mình em để chạy theo tình yêu anh mong đợi\n Anh xin lỗi…\n Rồi mai kia đời người vắng bóng em\n Tất cả sẽ qua nhanh…\n Anh mong em quên đi…\n \n Chorus:\n Dẫu có yêu đến bao lâu\n Mà chẳng thể bình yên ở trong nhau…\n Phải chăng duyên kiếp mình chỉ ngắn đến thế thôi em?\n Đành chịu ngàn đớn đau?\n \n Phải làm sao để tình yêu buông tha cho chúng ta?\n Anh biết anh mất em rồi…\n Chẳng phải người đã nói vì anh tất cả?\n",
      artistBio: "Trungg I.U và Lâm Bảo Ngọc là những giọng ca trẻ được yêu thích trong dòng nhạc Pop Ballad, nổi bật với khả năng truyền tải cảm xúc sâu sắc và những bản tình ca buồn lãng mạn.",
      artistCover: "./images/tinhyeuubuongthachochungta.png" 
    },

    {
      id: 30,
      title: "Những kẻ mộng mơ",
      artist: "Noo Phước Thịnh, Lâm Bảo Ngọc",
      src: "./assets/sounds/NhungKeMongMo-ForestStudioNooPhuocThinh-36308354.mp3",
      cover: "./images/nhungkemongmo.png", 
      duration: 210,
      genre: "Pop Ballad",
      album: "",
      lyrics: "Verse 1:\n Biển, vẫn cứ thế trông về nơi xa\n Kìa hoàng hôn rực rỡ và lấp lánh những nơi biển qua\n Bờ cát vẫn nằm đợi sóng xô về, nhưng biển kia chẳng thể\n Lại nhìn phía chân trời, cuộn làn sóng kia vội, tìm hoàng hôn xa để kết đôi\n \n Chorus:\n Đừng mộng mơ nữa, hỡi biển ơi!\n Chân trời xa lắm chẳng có ai đợi\n Phía bên kia đại dương cũng chỉ có\n Bờ cát nâng niu biển thôi\n Đừng mộng mơ nữa, hỡi kẻ mộng mơ!\n Mặt trời tận nơi góc vũ trụ bao la\n Hoàng hôn đó chỉ là, từng tia sáng mong manh từ nơi xa\n Và chỉ có anh bên em kế bên em khi gục ngã\n \n Verse 2:\n Thủy triều vẫn thế đầy rồi lại vơi\n Và lại mang biển sóng ngày đến tối đi lạnh lùng vậy thôi\n Bờ cát giữ biển lại mỗi khi về, những biển kia chẳng thể\n Lại nhìn phía chân trời, cuộn làn sóng kia vội, tìm hoàng hôn xa để kết đôi\n \n Chorus:\n Đừng mộng mơ nữa, hỡi biển ơi!\n Chân trời xa lắm chẳng có ai đợi\n Phía bên kia đại dương cũng chỉ có\n Bờ cát nâng niu biển thôi\n Đừng mộng mơ nữa, hỡi kẻ mộng mơ!\n Mặt trời tận nơi góc vũ trụ bao la\n Hoàng hôn đó chỉ là, từng tia sáng mong manh từ nơi xa\n Và chỉ có anh bên em kế bên em khi gục ngã\n \n Bridge:\n Ôm em thế nhưng em yêu lại đi\n Đừng lặng im như thế biết sẽ đớn đau sao em lại đi\n Phía bên kia đại dương cũng chỉ có bờ cát lặng im\n Hoàng hôn ánh sáng xa tận ngút ngàn, từ góc vũ trụ lặng yên\n",
      artistBio: "Noo Phước Thịnh là một trong những ca sĩ Pop hàng đầu tại Việt Nam, nổi tiếng với giọng hát ấm áp, khả năng trình diễn lôi cuốn và nhiều bản hit đình đám. Lâm Bảo Ngọc là một giọng ca đầy nội lực, được biết đến qua các cuộc thi âm nhạc lớn.",
      artistCover: "./images/nhungkemongmo.png"
    },
    {
      id: 31,
      title: "Không Phải Gu ",
      artist: "HIEUTHUHAI",
      src: "./assets/sounds/KhongPhaiGu-HIEUTHUHAI-11966359.mp3",
      cover: "./images/khongphaigu.png", 
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "Tuyển tập Hiếu Thứ Hai",
      lyrics: "Chorus:\n Không phải gu\n 11 giờ tối là là lên lounge hút bóng thì chắc chắn đó là không phải gu\n Fanpage quán bar nào em cũng có ảnh cười với hàm răng sứ thì là không phải gu\n Trên bio ghi no twitter, không phải gu\n Khó để anh phải hit dù nhắm mắt\n Vì là không phải gu\n \n Verse 1:\n Anh không hôn và cũng không go down nếu như không phải su\n Comment toàn nói nhạc đẹp trai thì anh không cãi luôn, vì ông trời bắt anh trông phải cool\n Đường cong này, anh cua mượt\n All in vào, là vua cược\n Đua coi ai tới đỉnh trước thì anh thua cuộc\n Và cảm giác như không có ai anh không thể cua được\n Diễn viên hay người mẫu venus\n Em còn lớn hơn anh, đoán y hệt\n Vậy mà muốn kêu anh là ba đường\n Mỗi lần anh rock full cây adidas\n Chuyện tình trước của em nhiều đắng cay, nên giờ cần tìm đến anh để thử nếm vị ngọt\n Vậy mình không cùng gu\n Vì nhà em không hề khó nhưng mà em quen anh em sẽ bị đòn\n Và anh thích những người business kinh doanh, làm ăn, nhập hàng về buôn nà\n Gu của anh là mấy cô khó đoán chứ không phải nhìn phát là biết làm nghề gì luôn nà\n Hình em gửi trên mạng cũng có đầy rồi mà xem một lần rồi thôi không phải lưu\n Lần đầu gặp em muốn đi ăn gì? “Anhhh”\n Là điển hình của việc không phải gu\n \n Chorus:\n Không phải gu\n 11 giờ tối là là lên lounge hút bóng thì chắc chắn đó là không phải gu\n Fanpage quán bar nào em cũng có ảnh cười với hàm răng sứ thì là không phải gu\n Trên bio ghi no twitter, không phải gu\n Khó để anh phải hit dù nhắm mắt\n Vì là không phải gu\n \n Verse 2:\n Na-na-na-nah, không phải gu đâu\n Cười cười lấy tay vịn vịn, là đang bị thân quá mức mình nhu cầu\n Nói chuyện chữ được chữ có, do hút bóng tới mức nó hư đầu\n Vẫn dây dưa với bạn trai cũ, motherfucker, 1 thằng ngu lâu\n But I can take you down, mặc dù anh biết em chẳng phải gu anh\n Không có 1 đường cong nào mà anh lái không rành\n Nếu muốn hôn anh thì phải khéo, biết nhìn phải trái xung quanh (watch out)\n Còn nếu thương anh thì phải thương luôn cả bạn gái của anh\n Gu anh girl ít nói, đang lạc lối đi kiếm tình yêu\n Gu anh không thích xài tiền thối, cần thì gọi để có tiền tiêu\n Cái gì cũng có giá cả, nhưng lời nào trả thì cũng phải kiêu\n Anh biết trông anh thì khá giả, nhưng anh vẫn luôn luôn keep it real\n \n Chorus:\n Không phải gu\n 11 giờ tối là là lên lounge hút bóng thì chắc chắn đó là không phải gu\n Fanpage quán bar nào em cũng có ảnh cười với hàm răng sứ thì là không phải gu\n Trên bio ghi no twitter, không phải gu\n Khó để anh phải hit dù nhắm mắt\n Vì là không phải gu\n \n Bridge:\n Tiếng bước chân ai nhẹ tiến thêm gần lại và ngồi riêng một góc trên tầng 2\n Hé đôi môi ngoan em khẽ gọi bồi bàn đang vội tay cầm bóng tay cầm chai rượu\n Bucellati luôn đeo trên ngực, chuông reo liên tục như là số máy tổng đài\n Combo after combo keep comin, hit em up till sun rise\n Facebook, instagram đăng single status như thể là chưa ai chinh phục em được\n Bar club quanh thủ đô này booking đều quen mặt cô nàng sinh hoạt đêm muộn\n Lia đôi mắt xem thường all the girls with ‘em fast fashion\n Aston Martin thường rinh về dinh thự nhưng mà claiming Independent\n Đóa hồng phai tàn, walkin 2 hàng, that’s a long night\n Sunglasses Versace, tay che mặt yea phong thái\n Viên nhộng xanh đỏ đặt trên bàn, chọn 1 trong 2\n Khuyên em rằng take that red one để mà biết là không phải gu\n",
      artistBio: "HIEUTHUHAI tên thật là Trần Minh Hiếu, là một rapper trẻ nổi tiếng với phong cách trình diễn cuốn hút và những bản rap ý nghĩa, được giới trẻ yêu mến.",
      artistCover: "./images/khongphaigu.png"
    },
        {
      id: 32,
      title: "Sắp Nổi Tiếng ",
      artist: "HIEUTHUHAI",
      src: "./assets/sounds/SapNoiTieng-HIEUTHUHAI-11966369.mp3",
      cover: "./images/sapnoitieng.png", 
      duration: 210,
      genre: "Hip-Hop/Rap",
      album: "Tuyển tập Hiếu Thứ Hai",
      lyrics: "Verse 1:\n Vẫn là công việc đó giống như là mọi ngày, cố gắng để viết thêm 1 verse thôi\n Nếu mà hay có thể bỏ vào album, viết vần và để cho thơ trôi\n Trước mắt của tao là quá nhiều cơ hội, như là Cobb tao đang sống ở trong mơ boy\n Không cần hỏi thằng nào work hard, cánh tay này sinh ra nó chỉ để giơ thôi\n Tao cũng từng là một thằng lạc lối, âm nhạc là tất cả thứ mà tao biết\n Trong tay thì chỉ có mỗi giấy và bút, nên beat là thứ duy nhất mà tao giết\n Con tim này cũng đã từng yêu rất nhiều, love song là tất cả thứ mà tao viết\n Thành công với tao là một người lạ, tụi tao đang cố gắng học cách giao tiếp\n \n Verse 2:\n Tao nghiện chiến thắng và đây là giờ vô cơn\n Đi càng xa, mất những mối quan hệ và trong lời họ nói tao thành thằng vô ơn\n Cứ thêm một bước là câu từ thô hơn\n Give no * because life goes on\n Nhưng trước giờ đâu có ai từng nói, nói với tao đây là hành trình cô đơn\n Yup okay, để dành tia nắng sau mây\n Tham vọng của tao quá lớn, tao đã thành con sói lâu nay\n Bởi vì tao muốn okay, tao sẽ đánh đổi, okay\n Ở đây không có chim sẻ, nên là tao không phải dâu tây\n \n Verse 3:\n Tụi nó nói tao nổi tiếng chỉ nhờ đẹp trai, trong khi đó là thứ tụi nó mong có\n Đi thử 1 cây mang giày của tao nếu như mày nói rap như tao không khó\n Một vài năm nữa quay lại kiểm chứng, những lời tao nói sẽ không bay trong gió\n Và top 5 cũng không còn phải là top nữa, nếu không có tên tao trong đó\n Nhìn những người ở top đầu trong ngành với con ngoan vợ xinh\n Tao biết là họ cũng phải bắt đầu từ đâu đó trước khi có một căn penthouse bự kinh\n Đó cũng là thứ mà tao nhắm tới, paranoid và stress nó nằm ngoài dự tính\n Tiếp nhận đánh giá từ người tao tôn trọng, tụi mày chưa hề làm cho tao mất tự tin\n \n Chorus:\n Killing the game ai có thể nói tao sai\n Bảo an ở xung quanh tao chẳng cố ra oai\n Đứng ngay ở chân tường, vẫn phải ngoái ra sau\n Having paranoid nhiều giọng nói trong đầu\n 80 trên freeway bật ghế ra sau\n Chẳng có thời gian để mà tao ngủ ngon đâu\n Chẳng biết thành như này cũng được đã bao lâu\n Pray for my soul\n \n Verse 4:\n Tao vẫn luôn là tao mà\n Từ thời soundcloud tới lúc almost famous\n Thức trắng 5 ngày còn chẳng sao mà\n Giảng đường, 2 jobs là lý do mà hay mệt\n Buy-in sức khỏe là lao đầu vô game\n Trò chơi âm nhạc này là tao all-in\n Nên là mỗi lần đặt bút chính xác là thâu đêm\n Nói chuyện với mic còn nhiều hơn với mẹ chỉ vì cố đi xa\n \n Verse 5:\n Vỗ lên ngực như là gorilla\n Trong khi đám bạn thì tụi nó đi bar\n Còn tao viết nhạc cho tụi nó đi bar\n Thứ tụi nó hit trong đó có shisha, tao hit từ track trong bài có guitar\n Chỉ với suy nghĩ tao chịu khó ghi ra\n Ai cũng muốn bằng, tao cần bodyguard\n Giờ ai cũng muốn bằng, tao cần bodyguard\n Cho tiền vào bao\n \n Verse 6:\n Bước xuống sân khấu cả hoa hậu đang chào tao\n Tao biết với đà này thì tao sẽ giàu mau nhưng tao không bán linh hồn để mà viết thứ tào lao\n Cuz im better than that, đi qua màn khác, bây giờ tự biết mình giỏi nên không còn cần lời khen\n Người ta thương nói càng chăm chỉ càng gặp may, tao sẽ trên đỉnh rất lâu, khuyên tụi mày nên làm quen\n Dòng nước ngược xiết\n Tất cả cột mốc được sinh ra cũng chỉ để cho tao vượt tiếp\n Không thể tin là mọi người hoài nghi không biết thằng này liệu có còn viết được hit\n Tao đã làm quá nhiều lần để có thể gọi là may mắn, * that shiet\n \n Verse 7 (New):\n Tao đốt cháy mic, như ngọn lửa chẳng tàn\n Mỗi câu từ là đạn, bắn thẳng vào màn\n Đường dài còn phía trước, tao chẳng ngại gian nan\n Từ góc phố bụi bặm tới ánh đèn sân khan\n Tụi mày nói tao mơ, nhưng tao sống thật\n Mỗi giấc mộng tao viết, là máu trong huyết mạch\n Không cần fame giả tạo, tao xây từ đáy\n Top chart là nhà, tao về đó mỗi ngày\n",
      artistBio: "HIEUTHUHAI tên thật là Trần Minh Hiếu, là một rapper trẻ nổi tiếng với phong cách trình diễn cuốn hút và những bản rap ý nghĩa, được giới trẻ yêu mến.",
      artistCover: "./images/sapnoitieng.png"
    }



  ],
  playlists: [],
  queue: [],
  favorites: [],
  currentTrack: null,
  currentTrackIndex: -1,
  isPlaying: false,
  shuffle: false,
  repeat: "off",
  history: [], // Stores full track objects, but should be mapped to IDs for saving
  language: "vi"
};

const translations = {
  vi: {
    home: "Trang chủ",
    search: "Tìm kiếm",
    library: "Thư viện",
    favorites: "Yêu thích",
    queue: "Hàng đợi",
    create_playlist: "Tạo playlist",
    notification_added_queue: "Đã thêm '{title}' vào hàng đợi",
    notification_added_favorites: "Đã thêm '{title}' vào yêu thích",
    notification_removed_favorites: "Đã xóa '{title}' khỏi yêu thích",
    notification_added_playlist: "Đã thêm '{title}' vào '{playlist}'",
    notification_removed_from_playlist: "Đã xóa '{title}' khỏi playlist '{playlist}'",
    notification_created_playlist: "Đã tạo playlist '{name}'",
    notification_deleted_playlist: "Đã xóa playlist '{name}'",
    notification_shuffle: "Xáo trộn: {state}",
    notification_repeat: {
      off: "Tắt lặp lại",
      all: "Lặp lại tất cả",
      one: "Lặp lại một bài"
    },
    track_info: "Thông tin bài hát",
    artist: "Ca sĩ",
    album: "Album",
    genre: "Thể loại",
    duration: "Thời lượng",
    lyrics: "Lời bài hát",
    now_playing: "Đang phát",
    back: "Quay lại",
    about_artist: "Về nghệ sĩ",
    related_tracks: "Bài hát liên quan",
    on: "Bật",
    off: "Tắt",
    no_song_playing: "Không có bài hát",
    select_song_to_play: "Chọn một bài để bắt đầu",
    empty_queue: "Hàng đợi trống. Thêm bài hát vào đây nhé!",
    empty_queue_hint: "Bạn có thể thêm bài hát từ trang chủ hoặc thư viện.",
    no_favorites_yet: "Bạn chưa có bài hát yêu thích nào. Hãy thêm vào nhé!",
    no_playlists_yet: "Chưa có playlist nào. Hãy tạo cái mới nhé!",
    playing_playlist: 'Đang phát playlist "{name}"',
    shuffling_playlist: 'Đang xáo trộn playlist "{name}"',
    empty_playlist: "Playlist này chưa có bài hát nào.",
    back_to_library: "Quay lại thư viện",
    back_to_library_all: "Quay lại tất cả mục thư viện",
    playlist_type_label: "Playlist",
    tracks_count_label: "bài hát",
    play_all_btn: "Phát tất cả",
    shuffle_all_btn: "Xáo trộn",
    no_description: "Không có mô tả",
    unknown_album: "Album không xác định",
    no_lyrics: "Không có lời bài hát.",
    no_artist_bio: "Không có thông tin tiểu sử cho nghệ sĩ này.",
    no_related_tracks: "Không có bài hát liên quan.",
    error_playing_track: "Không thể phát bài hát này.",
    resumed_playback: 'Đã tiếp tục phát "{title}"',
    paused_playback: 'Đã tạm dừng "{title}"',
    now_playing_notification: 'Đang phát "{title}"',
    play_action: "Phát",
    add_to_queue_action: "Thêm vào hàng đợi",
    add_to_playlist_action: "Thêm vào playlist",
    add_to_favorites_action: "Thêm vào yêu thích",
    remove_from_favorites_action: "Xóa khỏi yêu thích",
    share_action: "Chia sẻ",
    track_info_action: "Thông tin bài hát",
    play_playlist_action: "Phát Playlist",
    share_playlist_action: "Chia sẻ Playlist",
    share_track_message: 'Nghe "{title}" của {artist}: {src}',
    share_item_action: 'Chia sẻ {itemType}',
    share_item_message: 'Khám phá {itemType} "{name}" trên Music App!',
    link_copied_notification: 'Đã sao chép liên kết "{title}"',
    no_share_link: "Không thể tạo liên kết chia sẻ cho mục này.",
    already_in_favorites: 'Bài hát "{title}" đã có trong yêu thích!',
    already_in_playlist: 'Bài hát "{title}" đã có trong playlist "{playlist}"!',
    login_title: "Đăng nhập",
    register_title: "Đăng ký",
    email_placeholder: "Nhập email của bạn",
    password_placeholder: "Nhập mật khẩu",
    name_placeholder: "Nhập tên của bạn",
    remember_me: "Ghi nhớ tôi",
    forgot_password: "Quên mật khẩu?",
    login_btn: "Đăng nhập",
    register_btn: "Đăng ký",
    login_with_google: "Đăng nhập với Google",
    login_with_facebook: "Đăng nhập với Facebook",
    register_link: "Đăng ký",
    login_link: "Đăng nhập",
    playlist_name_placeholder: "Nhập tên playlist",
    playlist_description_placeholder: "Mô tả playlist của bạn",
    choose_photo_btn: "Chọn ảnh",
    cancel_btn: "Hủy",
    create_btn: "Tạo",
    notifications_title: "Thông báo",
    add_to_playlist_modal_title: 'Thêm "{title}" vào Playlist',
    choose_playlist_label: "Chọn playlist",
    no_playlists_found: "Không tìm thấy playlist nào",
    add_btn: "Thêm",
    select_playlist_prompt: "Vui lòng chọn một playlist!",
    recent_list_title: "Nghe gần đây",
    recommended_list_title: "Được tạo riêng cho bạn",
    chart_list_title: "Bảng xếp hạng ",
    show_all: "Hiện tất cả",
    all_recent_tracks: "Tất cả bài hát đã nghe gần đây",
    all_recommended_tracks: "Tất cả bài hát được tạo riêng cho bạn",
    all_chart_tracks: "Tất cả bài hát trong bảng xếp hạng ",
    all_related_tracks: `Tất cả bài hát liên quan đến "{title}"`,
    filter_all: "Tất cả",
    filter_playlists: "Playlist",
    filter_artists: "Ca sĩ",
    filter_albums: "Album",
    filter_genres: "Thể loại",
    play_btn: "Phát",
    favorite_btn: "Yêu thích",
    show_more_lyrics: "Hiện thêm",
    collapse_lyrics: "Thu gọn",
    view_more_artist: "Xem thêm",
    shuffle_btn_label: "Xáo trộn",
    prev_btn_label: "Bài trước",
    play_pause_btn_label: "Phát hoặc tạm dừng",
    next_btn_label: "Bài tiếp theo",
    repeat_btn_label: "Lặp lại",
    lyrics_btn_label: "Lời bài hát",
    queue_btn_label: "Hiển thị hàng đợi",
    volume_slider_label: "Điều chỉnh âm lượng"
  },
  en: {
    home: "Home",
    search: "Search",
    library: "Library",
    favorites: "Favorites",
    queue: "Queue",
    create_playlist: "Create playlist",
    notification_added_queue: "Added '{title}' to queue",
    notification_added_favorites: "Added '{title}' to favorites",
    notification_removed_favorites: "Removed '{title}' from favorites",
    notification_added_playlist: "Added '{title}' to '{playlist}'",
    notification_removed_from_playlist: "Removed '{title}' from playlist '{playlist}'",
    notification_created_playlist: "Created playlist '{name}'",
    notification_deleted_playlist: "Deleted playlist '{name}'",
    notification_shuffle: "Shuffle: {state}",
    notification_repeat: {
      off: "Repeat off",
      all: "Repeat all",
      one: "Repeat one"
    },
    track_info: "Track Info",
    artist: "Artist",
    album: "Album",
    genre: "Genre",
    duration: "Duration",
    lyrics: "Lyrics",
    now_playing: "Now Playing",
    back: "Back",
    about_artist: "About artist",
    related_tracks: "Related Tracks",
    on: "On",
    off: "Off",
    no_song_playing: "No song playing",
    select_song_to_play: "Select a song to start",
    empty_queue: "Queue is empty. Add songs here!",
    empty_queue_hint: "You can add songs from Home or Library.",
    no_favorites_yet: "You don't have any favorite songs yet. Add some!",
    no_playlists_yet: "No playlists yet. Create a new one!",
    playing_playlist: 'Now playing playlist "{name}"',
    shuffling_playlist: 'Shuffling playlist "{name}"',
    empty_playlist: "This playlist has no songs.",
    back_to_library: "Back to Library",
    back_to_library_all: "Back to all library items",
    playlist_type_label: "Playlist",
    tracks_count_label: "songs",
    play_all_btn: "Play All",
    shuffle_all_btn: "Shuffle",
    no_description: "No description",
    unknown_album: "Unknown Album",
    no_lyrics: "No lyrics available.",
    no_artist_bio: "No artist biography available for this artist.",
    no_related_tracks: "No related tracks found.",
    error_playing_track: "Cannot play this track.",
    resumed_playback: 'Resumed playback of "{title}"',
    paused_playback: 'Paused playback of "{title}"',
    now_playing_notification: 'Now playing "{title}"',
    play_action: "Play",
    add_to_queue_action: "Add to Queue",
    add_to_playlist_action: "Add to Playlist",
    add_to_favorites_action: "Add to Favorites",
    remove_from_favorites_action: "Remove from Favorites",
    share_action: "Share",
    track_info_action: "Track Info",
    play_playlist_action: "Play Playlist",
    share_playlist_action: "Share Playlist",
    share_track_message: 'Listen to "{title}" by {artist}: {src}',
    share_item_action: 'Share {itemType}',
    share_item_message: 'Discover {itemType} "{name}" on Music App!',
    link_copied_notification: 'Copied link for "{title}"',
    no_share_link: "Cannot create share link for this item.",
    already_in_favorites: 'Song "{title}" is already in favorites!',
    already_in_playlist: 'Song "{title}" is already in playlist "{playlist}"!',
    login_title: "Login",
    register_title: "Register",
    email_placeholder: "Enter your email",
    password_placeholder: "Enter your password",
    name_placeholder: "Enter your name",
    remember_me: "Remember me",
    forgot_password: "Forgot password?",
    login_btn: "Login",
    register_btn: "Register",
    login_with_google: "Login with Google",
    login_with_facebook: "Login with Facebook",
    register_link: "Register",
    login_link: "Login",
    playlist_name_placeholder: "Enter playlist name",
    playlist_description_placeholder: "Describe your playlist",
    choose_photo_btn: "Choose photo",
    cancel_btn: "Cancel",
    create_btn: "Create",
    notifications_title: "Notifications",
    add_to_playlist_modal_title: 'Add "{title}" to Playlist',
    choose_playlist_label: "Choose playlist",
    no_playlists_found: "No playlists found",
    add_btn: "Add",
    select_playlist_prompt: "Please select a playlist!",
    recent_list_title: "Recently Played",
    recommended_list_title: "Made for you",
    chart_list_title: "V-Pop Charts",
    show_all: "Show All",
    all_recent_tracks: "All Recently Played Tracks",
    all_recommended_tracks: "All Tracks Made For You",
    all_chart_tracks: "All Tracks in V-Pop Charts",
    all_related_tracks: `All Tracks related to "{title}"`,
    filter_all: "All",
    filter_playlists: "Playlists",
    filter_artists: "Artists",
    filter_albums: "Albums",
    filter_genres: "Genres",
    play_btn: "Play",
    favorite_btn: "Favorite",
    show_more_lyrics: "Show More",
    collapse_lyrics: "Collapse",
    view_more_artist: "View More",
    shuffle_btn_label: "Shuffle",
    prev_btn_label: "Previous Track",
    play_pause_btn_label: "Play or Pause",
    next_btn_label: "Next Track",
    repeat_btn_label: "Repeat",
    lyrics_btn_label: "Lyrics",
    queue_btn_label: "Show Queue",
    volume_slider_label: "Adjust Volume"
  }
};

function saveHistory() {
  // Store only relevant data (e.g., track IDs instead of full objects for history, queue, favorites)
  localStorage.setItem("musicHistory", JSON.stringify(musicLibrary.history.slice(-50).map(t => t.id))); // Keep last 50 history entry IDs
  
  if (musicLibrary.currentTrack) {
    localStorage.setItem("currentTrackInfo", JSON.stringify({ // Renamed from "currentTrack" to avoid confusion
      id: musicLibrary.currentTrack.id,
      currentTime: audio.currentTime,
      // currentTrackIndex is derivable from queue, so not strictly needed but kept for direct restore
      index: musicLibrary.currentTrackIndex, 
      isPlaying: musicLibrary.isPlaying,
    }));
  } else {
    localStorage.removeItem("currentTrackInfo");
  }
  
  // Always save player states, even if no track is playing
  localStorage.setItem("currentVolume", audio.volume); 
  localStorage.setItem("musicShuffleState", musicLibrary.shuffle);
  localStorage.setItem("musicRepeatState", musicLibrary.repeat);

  localStorage.setItem("musicQueue", JSON.stringify(musicLibrary.queue.map(t => t.id)));
  localStorage.setItem("musicFavorites", JSON.stringify(musicLibrary.favorites.map(t => t.id)));
  
  localStorage.setItem("musicPlaylists", JSON.stringify(musicLibrary.playlists.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      cover: p.cover,
      tracks: p.tracks.map(t => t.id) // Save only track IDs
  }))));
  localStorage.setItem("musicLanguage", musicLibrary.language); 
}

function loadHistory() {
  const getTrackById = (id) => musicLibrary.tracks.find(t => t.id === id);

  const historyData = localStorage.getItem("musicHistory");
  if (historyData) {
    const historyIds = JSON.parse(historyData);
    // Map IDs back to full track objects, filtering out any missing tracks
    musicLibrary.history = historyIds.map(getTrackById).filter(Boolean);
  }

  const queueData = localStorage.getItem("musicQueue");
  if (queueData) {
    const queueIds = JSON.parse(queueData);
    musicLibrary.queue = queueIds.map(getTrackById).filter(Boolean);
  }

  const favoritesData = localStorage.getItem("musicFavorites");
  if (favoritesData) {
      const favoriteIds = JSON.parse(favoritesData);
      musicLibrary.favorites = favoriteIds.map(getTrackById).filter(Boolean);
  }

  const playlistsData = localStorage.getItem("musicPlaylists");
  if (playlistsData) {
      const storedPlaylists = JSON.parse(playlistsData);
      musicLibrary.playlists = storedPlaylists.map(p => ({
          ...p,
          tracks: p.tracks.map(getTrackById).filter(Boolean) // Map track IDs back to full objects
      }));
  }

  // Load player states first
  const savedVolume = localStorage.getItem("currentVolume");
  if (savedVolume !== null) {
      audio.volume = parseFloat(savedVolume);
      // It's good practice to update the volume slider UI immediately after loading
      const volumeSlider = document.querySelector("#volume-slider");
      if (volumeSlider) {
          volumeSlider.value = audio.volume;
      }
  }

  const savedShuffleState = localStorage.getItem("musicShuffleState");
  if (savedShuffleState !== null) {
      musicLibrary.shuffle = JSON.parse(savedShuffleState);
  }

  const savedRepeatState = localStorage.getItem("musicRepeatState");
  if (savedRepeatState) {
      musicLibrary.repeat = savedRepeatState;
  }

  // Restore current track info
   const currentTrackInfoData = localStorage.getItem("currentTrackInfo");
  if (currentTrackInfoData) {
    const { id, currentTime, index, isPlaying } = JSON.parse(currentTrackInfoData);
    const track = getTrackById(id);
    if (track) {
      musicLibrary.currentTrack = track;
      audio.src = track.src;
      audio.currentTime = currentTime;

      // Ensure currentTrackIndex is consistent with the loaded queue and currentTrack
      const foundIndexInQueue = musicLibrary.queue.findIndex(t => t.id === id);
      if (foundIndexInQueue !== -1) {
          musicLibrary.currentTrackIndex = foundIndexInQueue;
      } else {
          // If the current track is not found in the loaded queue, add it to the beginning
          musicLibrary.queue.unshift(track);
          musicLibrary.currentTrackIndex = 0;
      }

      // KHI TẢI LẠI TRANG, LUÔN ĐẶT isPlaying VỀ FALSE BAN ĐẦU
      // Để ngăn nút tạm dừng hiển thị nếu không có tương tác phát nhạc rõ ràng
      musicLibrary.isPlaying = false; // <--- THAY ĐỔI QUAN TRỌNG NHẤT
      audio.pause(); // Đảm bảo âm thanh dừng phát khi tải lại trang
    } else {
        // If currentTrack cannot be found, clear it
        musicLibrary.currentTrack = null;
        musicLibrary.currentTrackIndex = -1;
        musicLibrary.isPlaying = false; // Đảm bảo là false
        audio.pause(); // Đảm bảo âm thanh dừng
    }
  } else {
      // If no current track was saved, ensure state is reset
      musicLibrary.currentTrack = null;
      musicLibrary.currentTrackIndex = -1;
      musicLibrary.isPlaying = false; // Đảm bảo là false
      audio.pause();
  }

  // Load language preference
  const savedLanguage = localStorage.getItem("musicLanguage");
  if (savedLanguage && translations[savedLanguage]) {
      musicLibrary.language = savedLanguage;
  }
}

/**
 * Returns a list of random tracks, excluding a specific track ID if provided.
 * @param {number} count The number of random tracks to return.
 * @param {number | null} excludeTrackId The ID of the track to exclude from the results.
 * @returns {Array<Object>} An array of random track objects.
 */
function getRandomTracks(count, excludeTrackId = null) {
    let availableTracks = musicLibrary.tracks;
    if (excludeTrackId !== null) {
        availableTracks = musicLibrary.tracks.filter(t => t.id !== excludeTrackId);
    }
    const shuffled = [...availableTracks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}