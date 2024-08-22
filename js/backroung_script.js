const images = [
    'img/mainslide_mob01.jpg',
    'img/mainslide_mob02.jpg',
    'img/mainslide_mob03.jpg',
];
let currentIndex = 0;

var elements = document.querySelectorAll('.myClass');

function changeBackground() {
    elements.forEach(function(element) {
        element.style.backgroundImage = `url(${images[currentIndex]})`;
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center";
        element.style.position = "fixed";  // 화면에 고정
        element.style.top = "0";           // 화면의 최상단에 위치
        element.style.left = "0";          // 화면의 좌측에 위치
        element.style.width = "100%";      // 화면 가로를 다 차지하도록 설정
        element.style.height = "100%";     // 화면 세로를 다 차지하도록 설정
        element.style.zIndex = "9999";     // 다른 콘텐츠 위에 오도록 설정
    });
    
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();