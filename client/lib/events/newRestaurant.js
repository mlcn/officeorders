Template.newRestaurant.events(
{
  "click .btn-primary": function()
  {
    Session.set('show_new_restaurant', false);
    console.log("test");
  }
});