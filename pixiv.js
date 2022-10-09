function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
$(function(){
    $(".banner .slidebanner").slick();
});
// $('.banner').slick();
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