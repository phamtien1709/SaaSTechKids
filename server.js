const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-Parser');
const addQuestionRouter = require('./router/addQuestionRouter');
const askRouter = require('./router/askRouter');
const apiRouter = require('./router/apiRouter');
const readFileRouter = require('./router/readFileRouter');



let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));

// get Router
app.use('/', askRouter);
app.use('/ask', addQuestionRouter);
app.use('/read', readFileRouter);
app.use('/question', apiRouter);

//render handlebars
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/api', (req, res) => {
  res.send('<h1>This page is useless of you!</h1>')
});


app.listen(6969, () => {
  console.log('server is up');
});
