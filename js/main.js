var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }



  // Найти элемент с классом swiper-slide и текстом "Slide 1"
var slideElement = document.querySelector('.swiper-slide:contains("Slide 1")');


if (slideElement) {
    // Создать новый элемент изображения
    var imgElement = document.createElement('img');
    imgElement.src = 'image/image 5.svg';
    imgElement.alt = 'Описание изображения';

    slideElement.innerHTML = '';
    
    slideElement.appendChild(imgElement);
}