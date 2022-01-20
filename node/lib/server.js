'use strict';

const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = 80;

app.get('/', (req,res) => {
	res.send('Hello to this bright and wonderful world.');
});

app.listen(PORT, HOST);
console.log(`server running, on http://${HOST}:${PORT}`);