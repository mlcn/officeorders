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