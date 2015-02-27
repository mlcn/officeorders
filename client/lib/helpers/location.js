Template.location.rendered = function() {
    window.onload = function() {
      var autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),{types: ['geocode'] }
        );
      google.maps.event.addListener(autocomplete, 'place_changed', function()
      {
        var place = autocomplete.getPlace();
        Session.set('address', place);
      })
    }
  };