var rootUrl = "https://api.niels-dingsbums.de/tictactoe/";
var state; 
var stateString = "";
xhttp = new XMLHttpRequest();
var url = rootUrl+"0/getState";

xhttp.responseType = "text";

xhttp.open("GET", url);
var j = 0;
xhttp.onreadystatechange = function() {
	if (j == 0) {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			if (xhttp.responseText != "") {
				state = xhttp.responseText;
				var n = 0;
				for (var i = 0; i < state.length; i++) {
					if (state[i].match(/[^,\[\]]/)) {
						if (n < 8) {
							stateString += state[i] + ",";
						}
						else {
							stateString += state[i];
						}
						n += 1;
					}
				}
				console.log(stateString);
				return;
			}
		}
		j += 1;
	}
}
xhttp.send();
return state;