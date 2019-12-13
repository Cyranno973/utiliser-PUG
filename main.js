navigator.geolocation.getCurrentPosition(success, error)

	function success(pos){
		console.log(pos);
		console.log('latitude : '+pos.coords.latitude);
		console.log('longitude : '+pos.coords.longitude);
		
	}
	function error(){
		console.log('non localiser');
		
	}