var feedURL = "https://www.metaweather.com/api/location/15015372/";

$(document).on('pagecreate', '#feedPage', function(event) {
	
	
	// Use an HTML GET request to obtain data from an API
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, true);
	xmlhttp.send();
		
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    
    
	// parse the resulting JSON into Javascript Data Object 
	// you can use a live parser to inspect the contents of the JSON
	// http://json.parser.online.fr/ 
	var weather= JSON.parse(xmlhttp.responseText);
	
    weather.consolidated_weather[0].min_temp;  
    
        
    var sum = 0;
    for (var i =0; i<6; i=i+1) {
        
        console.log(weather.consolidated_weather[i].min_temp);
        
    }
        
        
	
	//Define Ractive binding
	var ractive = new Ractive({
    	el: 'container', <!-- where -->
    	template: '#myTemplate', <!-- how -->
    	data: { weather : weather.consolidated_weather } <!-- what - specify the list of weather reports using dot notation-->
	});
    }
    };
});