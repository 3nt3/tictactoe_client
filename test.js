var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.niels-dingsbums.de/tictactoe/0/getState");
xhttp.send();
xhttp.responseType = "text";
xhttp.onreadystatechange = function () {
	if (xhttp.readyState = XMLHttpRequest.DONE) {
		if (this.responseText != "") {
			console.log(this.responseText);
			return this.responseText.toString();
		}
	}
}