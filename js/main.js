$(function() {
  $(document).ready(function () {
    console.log("JavaScript Loaded"); // デバッグ用

    // 背景のスライド
    $('.slick').slick({
      fade: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
    });

    // slider1の初期化
    $('.slider1').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
          },
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
       
      ]
      
    });

    // slider2の初期化
    $('.slider2').slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      rtl: true, 
      // 反転用の設定を追加
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: false,
      verticalSwiping: false,
      infinite: true,
      focusOnSelect: false,
      cssEase: "linear",
      pauseOnDotsHover: false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
          },
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  });

  $('.slider3').slick({
    vertical: true,         
    autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: 3,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    dots: false,
    arrows: false,

    responsive: [
      {
      
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
})



  //よくあるご質問
$('.qa-title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".qa-box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});




//フェードイン
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 150) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});


});

