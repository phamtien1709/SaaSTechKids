const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-Parser');
const questionRouter = require('./router/questionRouter');
const askRouter = require('./router/askRouter');
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
app.use('/question', questionRouter);
app.use('/read', readFileRouter);

//render handlebars
app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(6969, () => {
  console.log('server is up');
});
