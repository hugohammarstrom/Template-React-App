const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/git', function (req, res) {
  fs.readFile('./.git/refs/heads/master', 'utf8', function(err, contents) {
    res.json({id: contents});
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);