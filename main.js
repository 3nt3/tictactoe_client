// JS Client for tictactoe sees


var rootUrl = "http://127.0.0.1:8000"

function getState(room, n) {
	var state;
	xhttp = new XMLHttpRequest();
	var url = rootUrl+"/tictactoe/"+room+"/getState/"+n
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
  			console.log(n + ": " +this.responseText);
    		state = this.responseText;
  		}
  	};
	xhttp.send();
	return state;
}

function updateState(room, n, state) {
	xhttp = new XMLHttpRequest();
	xhttp.open("POST", rootUrl+"/tictactoe/{0}/updateState/{1}".format(room, n));
	xhttp.send(state);
}

function createRoom(players) {
	xhttp = new XMLHttpRequest();
	xhttp.open("POST", rootUrl+"/tictactoe/createRoom");

	players = JSON.stringify(players);
	console.log(players);
	xhttp.send(players);
}

