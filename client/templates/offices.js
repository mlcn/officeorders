AutoForm.hooks({
  addOfficeForm: {
    before: {
      "addNewOffice": function(doc)
      {
        doc.geoAddress = Session.get('address');
        return doc;
      }
    },
    onSuccess: 
    
    function()
    {
        Router.go('offices.all'); //load new route
        return false;
      }
    }
  })

