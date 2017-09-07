const express = require('express');
const Router = express.Router();
const fileController = require('./../js/fileController');

Router.get('/', (req, res) => {
  res.render('questionDetails');
});

Router.get('/:id', (req, res) => {
  let question = fileController.getListQuestion();
  let getQuestion = question[req.params.id];
  res.render('questionDetails', {
    question : getQuestion.question,
    totalyes : getQuestion.yes,
    totalno  : getQuestion.no,
    layout   : 'sub'
  });
});

Router.post('/post', (req, res, next) => {
  let jsonData = {
    id        : fileController.getTotalQuestion(),
    question  : req.body.newQuestion,
    yes       : 0,
    no        : 0
  };

  if (fileController.getTotalQuestion() === 0){
    stringData = JSON.stringify(jsonData);
  }
  else {
    stringData = ',' + JSON.stringify(jsonData);
  };

  fileController.appendFileSync('question.txt', stringData);

  res.redirect(`/question/${jsonData.id}`);
});


Router.post('/:id/vote', (req, res) => {
  question = fileController.getListQuestion();
  console.log(question);
  if (req.body.choice === 'YES') {
    question[req.params.id].yes += 1;
  }
  else {
    question[req.params.id].no += 1;
  };
  console.log(question);
  let saveString = "";
  for(i = 0; i < question.length; i++) {
    if (i == 0) {
      saveString += JSON.stringify(question[i]);
    }
    else {
      saveString += ',' + JSON.stringify(question[i]);
    };
  };
  console.log(saveString);
  fileController.saveFileSync('question.txt', saveString);

  res.redirect(`/question/${req.params.id}`);
});

module.exports = Router;
