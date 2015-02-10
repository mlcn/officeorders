Template.newOrder.open = function() { if (Session.get('show_new_restaurant')){ Session.set('show_new_restaurant', true); return 'open'}}
Template.newOrder.events(
{
  "click .new_restaurant": function()
  {
    Session.set('show_new_restaurant', true);
  }
});

Template.newOrder.helpers(
{
  addNewRestaurant: function()
  {
    return Session.get('show_new_restaurant');
  }
})