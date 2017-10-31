
function saveAsJson(circles)
{
	var json = {};
	json.circles = new Array();
	print("json.circles:");


	for(var i=0;i<circles.length;i++)
	{
		var circ = circles[i];
		var item = circ.toJson();
		append(json.circles,item);
	}

	var optimizeSize = false;
	saveJSON(json,"circles.json",optimizeSize);
}


function loadFromJson(url)
{
	var json = loadJSON(url);
	print("json:" + json.features);

	circles = new Array();

	for(var i=0;i<json.circles.length;i++)
	{
		var circJson = json.circles[i];
		var circObj = circle();
		circle.fromJson(circJson);
		append(circles,circObj);
	}
}