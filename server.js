const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');

const questionApiRouter = require('./module/question/questionApiRouter');
const questionViewRouter = require('./module/question/questionViewRouter');


let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', questionViewRouter);
app.use('/api/question', questionApiRouter);


app.get('/about', (req, res) => {
  let questionList = [{ id : 1, question : 'test'}, {id : 2, question : 'test1'}]
  res.render('about',{ questionList });
});

app.use(express.static(__dirname + '/public'));
// localhost
mongoose.connect(config.connectionString, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connect success');
  }
});

// mlab
// mongoose.connect('mongodb://admin:admin@ds141264.mlab.com:41264/web8', (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log('connect success');
//   }
// });

app.listen(config.port, () => {
  console.log('server is up');
});
