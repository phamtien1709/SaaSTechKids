const express = require('express');
const Router = express.Router();
const {getRandomQuestion, answerQuestion, addNewQuestion, getQuestionById} = require('./questionController.js');

Router.get('/', (req, res) => {

});

Router.get('/question', (req, res) => {
  getRandomQuestion((err, question) => {
    if (err == null) {
      res.send(question);
    } else {
      if (err == "No question Found") {
        res.send("No question Found");
      } else {
        res.send(question);
      }
    }
  });
});

Router.post('/question', (req, res) => {
  addNewQuestion(req.body.question, (err, question) => {
    if (err == null) {
      res.redirect(`/question/${question.id}`);
    }
  });
});

Router.post('/question/:id', (req, res) => {
  getQuestionById(req.params.id, (err, question) => {
    if (req.body.choice === 'yes') {
      question.yes += 1;
    } else {
      question.no += 1;
    }
    answerQuestion(question, (err, updatedQuestion) => {
      res.redirect(`/question/${updatedQuestion.id}`);
    });
  });
});

module.exports = Router;
