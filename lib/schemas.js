Schemas = {};

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

GeoSchema = new SimpleSchema(
{
  geoLatitude: {
    type: Number,
  },
  geoLongitude:
  {
    type: Number,
  }
})

AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    max: 50
  },
  postcode: {
    type: String,
    max: 5
  },
  loc: {
    type: GeoSchema,
    optional: true
  }
});

Schemas.Restaurants = new SimpleSchema(
{
  name: {
    type: String,
    max: 500,
    label: "Restaurant Name"
  },
  kitchen: {
    type: String,
    max: 100,
    label: "Kitchen"
  },
  address: {
    type: AddressSchema
  }
});
//=============================

Offices.attachSchema(Schemas.Offices);
Restaurants.attachSchema(Schemas.Restaurants);