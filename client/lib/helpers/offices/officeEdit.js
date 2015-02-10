Template.office.helpers(
{
 edit : function()
 {
  return Session.get('edit-' + this._id);
}
});