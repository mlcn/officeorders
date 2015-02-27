if (Meteor.isClient) {

  UI.registerHelper("address", function()
    {
      return Session.get('address');
    }
  );


  Template.body.rendered = function()
  {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geo  = new google.maps.Geocoder();
      geo.geocode({'location': new google.maps.LatLng(position.coords.latitude, 
        position.coords.longitude)}, function(results, status)
      {
        if (status = google.maps.GeocoderStatus.OK)
        {
          Session.set('address', results[0]);
        }
        else
        {
          Session.set('address', 'Error getting your address');
        }
      })
    });
  }

  
  
}