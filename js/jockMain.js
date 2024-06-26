$(window).on('scroll', function (e) {
  //console.log('Scrolled!');
  var quienesDistance = $('.r1').offset().top;
  //console.log(quienesDistance);
  var distanceScrolled = $(window).scrollTop();
  //console.log('distanceScrolled', distanceScrolled);
  if (distanceScrolled >= quienesDistance) {
    $('nav').addClass('bg-dark');
    $('nav').addClass('navbar-dark');
    $('nav').removeClass('navbar-light');
    $('.dropdown-item').removeClass('drop_down_transp');
    $('.dropdown-menu').removeClass('drop_down_transp');
    $('.nav-link').removeClass('navbar-light-ltcol');
  } else {
    $('header nav').removeClass('bg-dark');
    $('header nav').removeClass('navbar-dark');
    $('header nav').addClass('navbar-light');
    $('.dropdown-item').addClass('drop_down_transp');
    $('.dropdown-menu').addClass('drop_down_transp');
    $('.nav-link').addClass('navbar-light-ltcol');
  }
});

// These next lines hide the dropdown-menu when the links in the menu are clicked.

let cond = true;

$("#espec, #espec0, #espec1, #espec2, #espec3, #espec4, #espec5, #espec6, #espec7").on('click', function () {
  $('#navbarNavDropdown').collapse('hide');
  $('.r1').css("color", "rgba(255,255,0,1)");
  $('.r2').css("color", "rgba(255,255,255,1)");
  if (cond === false) {
    cond = true;
  }
});

$("span.navbar-toggler-icon").on('click', function () {
  if (cond === true) {
    $('.r1').css("color", "rgba(0,0,0,0)");
    cond = false;
  } else if (cond === false) {
    $('.r1').css("color", "rgba(255,255,255,1)");
    cond = true;
  }
});

///////////////////////////////////////////////////////

function currentTime() {
  var today = new Date();
  if (today.getDate() < 25 && today.getMonth() <= 5) {
    $('.date').html(today.getFullYear() - 1974 - 1);
  } else {
    $('.date').html(today.getFullYear() - 1974);
  }
}

currentTime();

///////////////////////////////////////////////////////

function initMap() {
  // The Academia's location
  const academia = { lat: 42.11744, lng: -8.81170 };
  // The map, centered at Academia
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: academia,
    streetViewControl: false,
    mapTypeId: 'satellite',
  });
  // The marker, positioned at Academia
  const marker = new google.maps.Marker({
    position: academia,
    title: "Centro Comercial Ramallosa, Local 22.",
    map: map,
  });
  map.setTilt(0);
}
