const router = require('express').Router();
const { getQuestionById, getRandomQuestion } = require('./questionController');

router.get('/', (req, res) => {
  let question = getRandomQuestion();

  res.render('home', {
    question    : question,
    questionView: "class='active'"
  });
});

router.get('/ask', (req, res) => {
  res.render('ask', {
    askView: "class='active'"
  });
});

router.get('/question/:id', (req, res) => {
  let id = req.params.id;

  res.render('question', {
    question    : getQuestionById(id),
    questionView: "class='active'"
  });
})

module.exports = router;
