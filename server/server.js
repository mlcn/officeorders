Meteor.methods({
    addNewOffice: function (doc) {
        if (Meteor.userId()) {
            var geolocation = {latitude: doc.googlePlace.geometry.location.D,
                               longitude: doc.googlePlace.geometry.location.k};
            var location = 
            Offices.insert({
                company: doc.company,
                room: doc.room,
                floor: doc.floor,
                domain: doc.domain,
                location: 
                        {street_number: doc.googlePlace.address_components[0].long_name,
                        street: doc.googlePlace.address_components[1].long_name,
                        locality: doc.googlePlace.address_components[2].long_name,
                        state: doc.googlePlace.address_components[3].long_name,
                        country: doc.googlePlace.address_components[4].long_name,
                        postcode: doc.googlePlace.address_components[5].long_name,
                        location: geolocation},
                         
                summary: doc.summary,
                activeOrders: 0,
                companyTitle: doc.company.replace(/\s/g,'-'),
                dateAdded: new Date(),
                user: Meteor.userId()
            });
        }
    },
    addNewRestaurant: function(doc)
    {
        if (Meteor.userId())
        {
            Restaurants.insert({
                name: doc.name,
                cuisine: doc.cuisine,
                address: doc.address,
                open_from: doc.open_from,
                closed_from: doc.closed_from,
                delivery_time_est: doc.delivery_time_est,
                loc: doc.loc,
                min_order: doc.minorder,
                max_order: doc.maxorder,
                user: Meteor.userId()
                });
        }
    }
});
