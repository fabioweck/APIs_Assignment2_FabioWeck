//Please run the server with Node to load all the content and API's

const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


const api = require('./api'); //imported APIs to be used by the server
app.use(api);

let listen = () => { console.log('*** Listening on port 3051 ***')}; //Function to display server status on console
app.listen(3051, listen);


