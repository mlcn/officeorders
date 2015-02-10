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

//=============================

Offices.attachSchema(Schemas.Offices);