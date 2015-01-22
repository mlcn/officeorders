Orders = new Mongo.Collection("orders")
Offices = new Mongo.Collection("offices");

var Schemas = {};

//============ Routers ===========
Router.route('/', function () {
    this.render('offices');
},{
    name:'offices.all'
});

Router.route('/offices/add', function () {
    this.render('addOffice');
},{
    name: 'office.add'
});
//=============================

//============ Schemas ========
Schemas.Offices = new SimpleSchema({
    company: {
        type: String,
        label: "Company name",
        max: 200
    },
    room: {
        type: String,
        label: "Room #",
        optional: true
    },
    floor: {
        type: String,
        label: "Floor",
        optional: true
    },
    domain: {
        type: String,
        label: "Domain (e.g.softreactor.com)",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
});
//=============================

Offices.attachSchema(Schemas.Offices);

if (Meteor.isClient) {

  Template.location.helpers({
    address: function()
    {
          return Session.get('address');
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
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
// code to run on server at startup
});
}
