Schemas = {};

//============ Schemas ========
GeoSchema = new SimpleSchema(
{
  latitude: {
    type: Number,
    decimal: true,
  },
  longitude:
  {
    type: Number,
    decimal: true,
  }
})

AddressSchema = new SimpleSchema({
  street_number: {
    type: String,
    max: 50
  },
  street: {
    type: String,
    max: 200
  },
  locality: {
    type: String,
    max: 200
  },
  state: {
    type: String,
    max: 200
  },
  country: {
    type: String,
    max: 200
  },
  postcode: {
    type: String,
    max: 6
  },
  location: {
    type: GeoSchema,
    optional: true
  }
});

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
  location: {
    type: AddressSchema,
    optional: true
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