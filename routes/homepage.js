
exports.checkPlaces = function(req,res) {

	var source = req.param("source");
	var destination = req.param("destination");
	console.log(source + "     " + destination);
	
	var json_response;
	
	if(source !== destination) {
		json_response = {"statusCode" : 200};
		res.send(json_response);
	} else {
		json_response = {"statusCode" : 401};
		res.send(json_response);
	}
};