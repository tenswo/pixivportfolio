// 다크모드
function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }


$(document).ready(function(){
     //리사이징 할때마다 새로고침
     var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });
    // 사이드 메뉴
    $("TMenu").click(function(){
        $("menu").addClass("on");
    });
    $("mclose").click(function(){
        $("menu").removeClass("on");
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// 슬라이드 배너
$(function(){
    $(".banner .slidebanner").slick();
});
// 이미지 팝업
document.querySelectorAll('.illust img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup_image').style.display = 'block';
        document.querySelector('.popup_image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup_image span').onclick = () =>{
    document.querySelector('.popup_image').style.display = 'none';
}

document.querySelectorAll('.illust1 img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup_image').style.display = 'block';
        document.querySelector('.popup_image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup_image span').onclick = () =>{
    document.querySelector('.popup_image').style.display = 'none';
}
// 이미지 슬라이드
$(function() {
    $('.three').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed:1500,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});

// 탑 스크롤
$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn("on");
        } else {
            $('#topBtn').fadeOut("on");
        }
    });

    $("#topBtn").click(function() {
        $('html ,body').animate({scrollTop : 0},10);
    });
});
// 리모컨 필터
// $(window).scroll(function() {
//     if($(this).scrollTop() > 100) {
//         $('.filter').fadeIn("on");
//     } else {
//         $('.filter').fadeOut("on");
//     }
// });
// 필터
$(function() {
    let data;

    $(".filter span").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    // THREE 클릭 시 초기화
    $("#THREE").on("click", function() {
        $('#TWO, #ONE').off('detach');
    });
    // TWO 클릭 시 두번째 요소 삭제
    $("#TWO").on("click", function() {
        data = $(".sec02").detach();
    });
    $("#THREE").on("click", function() {
        $(".sec01").append(data);
    });
    // ONE 클릭 시 두번째 요소 삭제
    $("#ONE").on("click", function() {
        data = $(".sec02, .sec03").detach();
    });
    $("#TWO").on("click", function() {
        $(".sec02").append(data);
    });
});