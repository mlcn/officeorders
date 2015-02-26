var getRestaurants = function() {
		return Restaurants.find().fetch().map(function(it){
			console.log(it);
			return {value: it.name, id: it._id, name: it.name, kitchen: it.kitchen};
		});
	};

Template.newOrder.helpers({
		getRestaurants: function()
		{
			return getRestaurants();
		},
		opened: function(e) {
			console.log("dropdown is opened");
		},
		closed: function(e) {
			console.log("dropdown is closed");
		},
		selected: function(e, suggestion, dataset) {
			console.log("selected: " + suggestion.id);
		},
		autocompleted: function(e, suggestion, dataset) {
			console.log("autocompleted: " + suggestion.id);
		},
	});