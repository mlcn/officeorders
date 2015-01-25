Meteor.methods({
    addNewOffice: function (doc) {
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
});
