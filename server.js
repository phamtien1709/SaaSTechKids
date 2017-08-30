const express = require('express');

let app = express();

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/cvstrap.html')
});

app.get('/read', (req, res) => {
  res.sendFile(__dirname + '/public/readfile.html')
});

app.listen(6969, () => {
  console.log('server is up');
});
