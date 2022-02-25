const dgram = require('dgram');
const message = new Buffer('Server?');
const socket = dgram.createSocket('udp4');
const axios = require('axios');
socket.on('listening', function () {
	socket.setBroadcast(true);
	setInterval(() => {
		socket.send(message, 0, message.length, 5555, '255.255.255.255');
	}, 5000);
});

socket.on('message', function (message, remote) {
	//console.log('CLIENT RECEIVED: ', remote.address + ':' + remote.port +' - ' + message);
	const myObj = JSON.parse(message);
	random = myObj.random;
	random2 = myObj.random2;



	//const params = new URLSearchParams();
	//params.append('random1', 'value1');
	// paios.post('/foo', params);
});


socket.bind('8888');
