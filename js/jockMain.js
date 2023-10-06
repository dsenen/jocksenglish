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

  var monthWord = today.getMonth();

  switch(monthWord) {
    case 0:
      monthWord = 'January';
      break;
    case 1:
      monthWord = 'February';
      break;
    case 2:
      monthWord = 'March';
      break;
    case 3:
      monthWord = 'April';
      break;
    case 4:
      monthWord = 'May';
      break;
    case 5:
      monthWord = 'June';
      break;
    case 6:
      monthWord = 'July';
      break;
    case 7:
      monthWord = 'August';
      break;
    case 8:
      monthWord = 'September';
      break;
    case 9:
      monthWord = 'October';
      break;
    case 10:
      monthWord = 'November';
      break;
    case 11:
      monthWord = 'December';
      break;
  }

  var dayNumber = today.getDate()

  $('#date').html(monthWord + today.getFullYear());

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  day = updateTime(day);
  $("#clock").html(hour);
  var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */

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