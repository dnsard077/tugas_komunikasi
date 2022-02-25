const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('listening', function () {
    socket.setBroadcast(true)
	const address = socket.address();
	console.log('UDP socket listening on ' + address.address + ":" + address.port);
});

socket.on('message', function (message, remote) {
	console.log('SERVER RECEIVED:', remote.address + ':' + remote.port +' - ' + message);
	const raw_data = {
        random: Math.ceil(Math.random() * 100),
	    random2: Math.ceil(Math.random() * 100)
    };
    //var buf = new Buffer.from(raw_data.toString());
    const data = JSON.stringify(raw_data);
    

    
	socket.send(data, 0, data.length, remote.port, remote.address);
	//socket.send(JSON.stringify(response), 0);

});

socket.bind('5555');