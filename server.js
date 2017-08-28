const express = require('express');

let app = express();

app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
  res.sendFile(__dirname = '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname = '/public/cvstrap.html')
});

app.get('/read', (req, res) => {
  res.sendFile(__dirname = '/public/readfile.html')
});

app.listen(6969, () => {
  console.log('server is up');
});
