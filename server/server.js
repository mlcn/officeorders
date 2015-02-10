Meteor.methods({
    addNewOffice: function (doc) {
        if (Meteor.userId()) {
            Offices.insert({
                company: doc.company,
                room: doc.room,
                floor: doc.floor,
                domain: doc.domain,
                geoAddress: doc.geoAddress,
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
