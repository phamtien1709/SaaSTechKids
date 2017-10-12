const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.json');

const homeRouter = require('./HomeRouter');
const askRouter = require('./AskRouter');
const apiRouter = require('./ApiRouter');
const questionRouter = require('./questionRouter');

let app = express();

mongoose.connect(config.connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', homeRouter);
app.use('/ask', askRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);

app.use(express.static(__dirname + '/public'));

let port = process.env.PORT || config.port;

app.listen(port, function() => {
  console.log('Server is ready at port' + port);
});
