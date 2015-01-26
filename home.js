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

Router.route('/offices/:company', function () {
  this.render('officeView', {
    data: function () {
      return Offices.findOne({companyTitle: this.params.company});
    }
  });
},{
  name: 'office.single'
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
  },
  geoLatitude: {
    type: Number,
    optional:true,
  },
  geoLongitude:
  {
    type: Number,
    optional: true,
  },
  geoAddress:
  {
    type: String,
    optional: true,
  },
  activeOrders: {
    type: Number,
    optional: true,
    min: 0
  },
  companyTitle: {
    type: String,
    optional: true,
  },
  dateAdded: {
    type: Date,
    optional: true,
  },
  dateDeleted:
  {
    type: Date,
    optional: true
  },
  user:
  {
    type: String,
    optional: true,
  }
});
//=============================

Offices.attachSchema(Schemas.Offices);

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
          Session.set('address', results[0].formatted_address);
        }
        else
        {
          Session.set('address', 'Error getting your address');
        }
      })
    });
  }

  Template.location.rendered = function() {
    window.onload = function() {
      var autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),{types: ['geocode'] }
        );
      google.maps.event.addListener(autocomplete, 'place_changed', function()
      {
        var place = autocomplete.getPlace();
        Session.set('address', place.formatted_address);
      })
    }
  };
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
// code to run on server at startup
});
}
