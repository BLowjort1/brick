//checkDesc
var k=true;
function showMoreDesc() {
    if (k==true){
          if (document.getElementById("ShowMore").className = 'active') {
              document.getElementById("ShowMore").classList.remove("active");
              document.getElementById("Hidden").innerText="Скрыть";
          }
    }
  else
      k=true;
}
function HidDesc() {
    if (document.getElementById("ShowMore").className != 'active')
    {
        document.getElementById("ShowMore").classList.add('active');
        document.getElementById("Hidden").innerText="Показать больше";
        k=false;
    }
}


// slider

$(".b-slider__content").slick({
    infinite: false,
    arrow: false,
    slidersToShow: 1,
    slidersToScroll: 1,
    appendArrows: $('.b-slider__controllers'),
    prevArrow: '<a class="b-slider__prev"><img src="img/prev.svg"></a>',
    nextArrow: '<a class="b-slider__next"><img src="img/next.svg"></a>',
});

var ColectionSlides = document.getElementsByClassName('b-slide__img');
var ColectionColors = document.getElementsByClassName('b-b-colors__item');

function ChangeColor() {
    for (var i = 1; i<=ColectionSlides.length; i++)
    {
        ColectionSlides[i-1].src="img/"+ this.value +"-0"+i+".jpg";

    }
}
document.getElementById('b-colors__black').onclick = function () {
    for (var i = 1; i<=ColectionSlides.length; i++)
    {
        ColectionSlides[i-1].src="img/"+ this.value +"-0"+i+".jpg";

    }
}
document.getElementById('b-colors__white').onclick = function () {
    for (var i = 1; i<=ColectionSlides.length; i++)
    {
        ColectionSlides[i-1].src="img/"+ this.value +"-0"+i+".jpg";

    }
}


$("select").on('change', function(){
    $('[type=submit]').prop('disabled', false);
});

document.getElementsByClassName('select-size')[0].onchange = function () {
    document.getElementById('btnAddToCart').disabled = false;
}
