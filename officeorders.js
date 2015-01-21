if (Meteor.isClient) {
  Template.location.helpers({
    address: function()
    {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geo  = new google.maps.Geocoder();
        geo.geocode({'location': new google.maps.LatLng(position.coords.latitude, 
          position.coords.longitude)}, function(results, status)
        {
          if (status = google.maps.GeocoderStatus.OK)
          {
            console.log(results[0].formatted_address);
            Session.set('address', results[0].formatted_address);
          }
          else
          {
            Session.set('address', 'Error getting your address');
          }
        })
      });
      return Session.get('address');
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
