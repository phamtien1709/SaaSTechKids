const express = require('express');
const Router = express.Router();
const {getRandomQuestion, getQuestionList} = require('./questionController.js');

Router.get('/', (req, res) => {
  getQuestionList((err, questions) => {
    if (err == null) {
      if (questions.length === 0) {
        res.render('home', {
          question: "No question in database",
          visibility: 'hidden',
          nav: `/`
        });
      } else {
        getRandomQuestion((err, question) => {
          if (err == null) {
            getRandomQuestion((err, questionRandom) => {
              if (err == null) {
                res.render('home', {
                  question: question.question,
                  href: `/api/question/${question._id}`,
                  nav: `/question/${questionRandom._id}`
                });
              }
            });
          }
        });
      }
    }
  });
});

module.exports = Router;
