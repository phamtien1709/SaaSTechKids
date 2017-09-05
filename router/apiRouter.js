const express = require('express');
const Router = express.Router();
const fileController = require('./../js/fileController');

Router.get('/', (req, res) => {

});

Router.post('/question', (req, res, next) => {
  let jsonData = {
    id: fileController.getTotalQuestion(),
    question: req.body.question,
    yes: 0,
    no: 0
  };

  if (fileController.getTotalQuestion() == 0) {
    stringData = JSON.stringify(jsonData);
  } else {
    stringData = ",\n" + JSON.stringify(jsonData);
  }
  fileController.appendFileSync('question.txt', stringData);
  res.redirect(`/question/${jsonData.id}`);
});

Router.post('/question/:id', (req, res) => {
  question = fileController.getListQuestion();
  if (req.body.choice === 'yes') {
    question[req.params.id].yes += 1;
  } else {
    question[req.params.id].no += 1;
  }
  let saveString = "";
  for (i = 0; i < question.length; i++) {
    if (i == 0) {
      saveString += JSON.stringify(question[i]);
    } else {
      saveString += ",\n" + JSON.stringify(question[i]);
    }
  }
  fileController.saveFileSync('question.txt', saveString);
  res.redirect(`/question/${req.params.id}`);
});

module.exports = Router;
