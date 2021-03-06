const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/public/img/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(port, () => {
    console.log("server is up")
});

// for macOS package.json: "devserver": "/usr/local/bin/live-server"