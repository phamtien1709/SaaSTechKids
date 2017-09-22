const express = require('express');
const Router = express.Router();
const {getRandomQuestion} = require('./questionController.js');
Router.get('/', (req, res) => {
  getRandomQuestion((err, question) => {
    if (err == "No question Found") {
        res.render('askQuestion', {nav: `/`, askview: true});
    } else {
      res.render('askQuestion', {nav: `/question/${question._id}`, askview: true});
    }
  });
});

module.exports = Router;
