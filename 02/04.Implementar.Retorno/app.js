(function(){
	var connection = new WebSocket('ws://html5rocks.websocket.org/echo');

	// When the connection is open, send some data to the server
	connection.onopen = function () {
	  connection.send('Ping'); // Send the message 'Ping' to the server
	};

	// Log errors
	connection.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};

	// Log messages from the server
	connection.onmessage = function (e) {
  		console.log('Server: ' + e.data);
	};
});


var API = (function(){
	var wsUri = 'ws://echo.websocket.org/',
		webSocket;

	function connect(){
		webSocket = new WebSocket(wsUri);
		webSocket.onopen = function(evt) { writeOutput("CONNECTED"); };
		webSocket.onclose = function(evt) { writeOutput("DISCONNECTED"); };
		webSocket.onmessage = function(evt) { writeOutput("RESPONSE: " + evt.data); };
		webSocket.onerror = function(evt) { writeOutput("ERROR: " + evt.data); };
	}

	function writeOutput(message){
		console.log("Output: ", message);
	}

	function sendToWS(val) {
		if (webSocket.readyState != webSocket.OPEN) {
			writeOutput("NOT OPEN");
			return;
		}

		writeOutput("SENT: " + val);
		webSocket.send(val);
		return;
	}

	(function(){
		if (WebSocket) {
			writeOutput("---------------------WebSocket supported---------------------");
			connect();

			sendToWS("Yeah!");
		}
	})();

	return sendToWS;

})();