Template.offices.helpers(
{
  offices: function()
  {
  	var address = Session.get('address');
  	var postcode  = null;
  	if (address!==null && address.address_components!=null)
  	{
  		for (var i =0; i< address.address_components.length; i++)
  		{
  			if (address.address_components[i].types[0] === 'postal_code')
  			{
  				postcode = address.address_components[i].long_name;
  				break;
  			}
  		}
   	}
  	if (postcode === null)
  	{
  		return Offices.find();
  	}
  	else
  	{
    	return Offices.find({'location.postcode': postcode});
  	}
  }
});