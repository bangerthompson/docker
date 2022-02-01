const EXPRESS = require('express');
const APP = EXPRESS();
const HOST = '0.0.0.0';
const EXPOSED_IP = '192.168.50.101';
const PORT = 8080;

APP.get('/', (req,res) => {
	// res.set('Content-Type', 'text/html');
	// res.send('Hello to this bright and wonderful world.  Josh can go and...');
	res.json( { message: 'Hello to this bright and wonderful world.  A ray of sunshine to you.' } );
});

APP.listen(PORT, HOST);
console.log(`server running, on http://${EXPOSED_IP}:${PORT}`);
