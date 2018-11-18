// JS Client for tictactoe sees


var rootUrl = "http://127.0.0.1:8000/"+"tictactoe"

function getStates(room) {
	var state;
	xhttp = new XMLHttpRequest();
	var url = rootUrl+"/getState"
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
  			console.log(n + ": " +this.responseText);
    		state = this.responseText;
  		}
  	};
	xhttp.send();
	return state.toString();
}

function updateState(room, n, state) {
	var url = rootUrl+room+"/updateState/"+n 
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

function getScores(room) {
	var scores;
	var url = rootUrl+room+"/getScores";
	xhttp = new XMLHttpRequest();

	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    		scores = this.responseText;
  		}
  	};

  	return scores.toString();
}

function updateScore(room, player, score) {
	var url = rootUrl+room+"/updateScore/"+player;

	xhttp = new XMLHttpRequest();
	xhttp.open("POST", url);
	xhttp.send(score)
}

function keksen(room) {
	console.log("Keeeeeeeksen!!!")

	for (var i = 0; i >= 30; i++) {
		var scores = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)]

		updateScore(room, 0, scores[0]);
		updateScore(room, 1, scores[1])
	}
}

