const express = require('express');
const fileController = require ('./../js/fileController');
const Router = express.Router();

Router.get('/', (req, res) => {
  let question;
  if (fileController.getTotalQuestion() === 0) {
    question = 'Chưa có câu hỏi nào trong bộ câu hỏi!';
    res.render('home', {
      question,
      visibility : 'hidden'
    });
  }
  else {
    listQuestion = fileController.getListQuestion();
    question = listQuestion[Math.floor((Math.random() * listQuestion.length))];
    res.render('home', {
      question  : question.question,
      href      : `/question/${question.id}/vote`
    });
  };
});

module.exports = Router;
