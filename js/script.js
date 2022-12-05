const d = new Date().getFullYear();
document.getElementById('credit').innerHTML = d;

$(document).ready(function () {
var silder = $(".owl-carousel");
silder.owlCarousel({
  autoplay: true,
  autoplayTimeout: 2500,
  items: 1,
  stagePadding: 20,
  center: true,
  nav: false,
  margin: 50,
  dots: true,
  loop: true,
  responsive: {
      0: { items: 1 },
      480: { items: 2 },
      575: { items: 2 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 }
  }
});
});

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

$(document).click(function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");               
  var _opened = $navbar.hasClass("in");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
      $navbar.collapse('hide');
  }
});