function initMap() {
        var ehbc = {lat: 38.338484, lng: -85.705709};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: ehbc,
          scrollwheel: false
        });
        var marker = new google.maps.Marker({
          position: ehbc,
          map: map
        });
      }
