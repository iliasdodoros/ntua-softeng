const colors = require('colors/safe');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');

const app = require('./app');

// fancy log
colors.enable();
const log = (x) => { console.log(colors.cyan.underline(x)); }

// app server
const server_port = process.env.PORT || 4000;
http.createServer(app).listen(server_port, () => { log(`Running https on port: {${server_port}}.`) });


// DB
mongoose.set('strictQuery', true);
const uri = `mongodb+srv://el19206:softeng2235@cluster0.gaa0ude.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);
