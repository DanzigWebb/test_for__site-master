// галерея на нативном js

function showPicture () {
    var photos = [
        'assets/img/pic-1.png',
        'assets/img/min-2.png',
        'assets/img/min-3.png',
        'assets/img/min-4.png',
    ];


    var thumbnails = document.querySelectorAll('.gallery__photo-preview');
    var fullPhoto = document.querySelector('.full-photo');

    var addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
        fullPhoto.src = photo;
    });
    };

    for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
    }
    
}
//меню гамбургер

function openNav () {
    let buttonMenu = document.querySelector('.gamburger-menu');
    let nav = document.querySelector('.header-menu');
    console.log(nav)
    buttonMenu.onclick = function(e) {
      // задержка анимации гамбургера
      function openOnClick () {
        buttonMenu.classList.toggle('is-active');
  
      };
      setTimeout(openOnClick, 100)
      nav.classList.toggle('is-active');
    }
  }
// вызов скриптов
showPicture ();
openNav ();
// табы на jQuery

$(".sidebar-tabs-item").not(":eq(1)").hide();
$(".sidebar-tabs__tab").click(function() {
	$(".sidebar-tabs__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".sidebar-tabs-item").hide().eq($(this).index()).fadeIn()
}).eq(1).addClass("active");




