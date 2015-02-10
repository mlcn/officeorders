Template.newRestaurant.events(
{
  "click .abort": function()
  {
    Session.set('show_new_restaurant', false);
  }
});