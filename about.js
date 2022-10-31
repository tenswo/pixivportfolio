function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
    
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