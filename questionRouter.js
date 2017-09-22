const express = require('express');
const Router = express.Router();
const {getRandomQuestion, getQuestionById} = require('./questionController.js');

Router.get('/', (req, res, next) => {
  res.render('questionid');
})

Router.get('/:id', (req, res) => {
  getQuestionById(req.params.id, (err, question) => {
    getRandomQuestion((err, newQuestion) => {
      if (err == null) {
        res.render('questionid', {
          question: question.question,
          nYes: question.yes,
          nNo: question.no,
          nav: `/question/${newQuestion._id}`,
          answerview: true
        });
      }
    });
  });
});

module.exports = Router;
