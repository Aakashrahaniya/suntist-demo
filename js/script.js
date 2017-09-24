jQuery(document).ready(function(){

	/* Get form input values */
	function result() {
		var name = jQuery("#name").val();
		var age = jQuery("#age").val();
		var gender = jQuery("input[name='gender']:checked").val();

		if(name && age && gender){
			var html = "<tr><td>"+name+"</td><td>"+age+"</td><td>"+gender+"</td></tr>";
			return html;
		} else{
			alert('Please fill all fields');
		}
	};

	/* Show form data in table on form submit */
	jQuery("#submit").click(function(e){
		e.preventDefault();
		jQuery(".submitted-content tbody").append(result);
		jQuery(this).closest('form')[0].reset();
	});

	/* form clear value on submit */
	function clearVal() {
		jQuery("#name").val("");
		jQuery("#age").val("");
		jQuery("input[name='gender']").attr('checked',false);
	}
});

/* Get API DATA */
function getApiData() {
	jQuery.ajax({ 
		type: "GET", 
		contentType: "application/json; charset=utf-8", 
		url: "https://api.suntist.com/aboutus/?format=json",
		dataType: "json", 
		success: function (data) 
		{
		    jQuery(".content-heading").append(data.results[0].category);
		    jQuery(".inner-content p").append(data.results[0].description);
		}, 
		error: function (result)
		{ 
			jQuery(".inner-content p").append("No content available"); 
		} 
	});
}
getApiData();