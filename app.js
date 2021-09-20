const express = require('express');
const app = express();

const config = require('config');
const helmet = require("helmet");
const debug = require('debug')('app:debug');

if (app.get('env') == 'development') {
    console.log('Application Name: ' + config.get('name'));
    debug('Development environment...');
}

app.use(express.json());
app.use(express.static('public'));
app.use(helmet());

const port = process.env.PORT || 3000; // PORT - Environment variable
app.listen(port, () => console.log(`Listening on port ${port}...`));