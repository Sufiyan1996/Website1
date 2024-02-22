const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);
// geocodeAddress();
function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function geocodeAddress() {
  var address = 'Mumbai';//document.getElementById('addressInput').value;
  var url = 'https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(address) + '&format=json';

  fetch(url)
  .then(response => response.json())
  .then(data => {
      if (data && data.length > 0) {
          var latitude = parseFloat(data[0].lat);
          var longitude = parseFloat(data[0].lon);
          var map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: latitude, lng: longitude},
              zoom: 15
          });
          var marker = new google.maps.Marker({
              position: {lat: latitude, lng: longitude},
              map: map,
              title: address
          });
      } else {
          alert('Location not found.');
      }
  })
  .catch(error => console.error('Error:', error));
}