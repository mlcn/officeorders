Template.offices.events(
{
  "click .officeitem": function()
  {
    var itemOpen = Session.get('edit-' + this._id);
    Session.set('edit-' + this._id, !itemOpen);
    Offices.find({_id: {$ne: this._id}}).forEach(function(o)
    {
      Session.set('edit-' + o._id, false);
    })
  }
});

Template.offices.helpers(
{
  offices: function()
  {
    return Offices.find();
  }
});

Template.officeView.helpers(
{
  officeID: function()
  {
    return this.companyTitle;
  }
}
  )


Template.office.helpers(
{
 edit : function()
 {
  return Session.get('edit-' + this._id);
}
});

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

