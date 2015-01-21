Orders = new Mongo.Collection("orders")

if (Meteor.isClient) {

  Template.location.helpers({
    address: function()
    {
      console.log(Session.get('address'));

      return Session.get('address');
    }
  })

  Template.body.helpers(
  {
    neworderpressed: function()
    {
        return Session.get('addneworder-visible')
    }
  })

  Template.body.rendered = function()
  {
    if (Session.get('address') == undefined)
    {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geo  = new google.maps.Geocoder();
        geo.geocode({'location': new google.maps.LatLng(position.coords.latitude, 
          position.coords.longitude)}, function(results, status)
        {
          if (status = google.maps.GeocoderStatus.OK)
          {
            Session.set('address', results[0].formatted_address);
          }
          else
          {
            Session.set('address', 'Error getting your address');
          }
        })
      });
    }
    if (Session.get('addneworder-visible') == undefined)
    {
      Session.set('addneworder-visible', false);
    }
  }

  Template.body.events(
  {
    "click .add" : function(event)
    {
      event.preventDefault();
      event.stopPropagation();
      var addnewordervisible=Session.get('addneworder-visible');
      if (addnewordervisible === false || undefined)
      {
        addnewordervisible=true;
      }
      else
      {
        addnewordervisible=false;
      }
      Session.set('addneworder-visible', addnewordervisible);
    }
  }
  );
}

if (Meteor.isServer) {
  Meteor.startup(function () {
// code to run on server at startup
});
}
