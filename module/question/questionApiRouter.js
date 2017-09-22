const router = require('express').Router();

const { answerQuestion, getQuestionById, addNewQuestion, getRandomQuestion } = require('./questionController'); //ES6 destructuring

router.post('/', (req, res) => {
  let question = req.body.question;

  addNewQuestion(question, (question) => {
    res.redirect(`/question/${question._id}`);
  });

  // // promise
  // addNewQuestion(question)
  //   .then(question) => res.redirect(`/question/${question._id}`)
  //   .catch(err) => console.log(err);
});

router.post('/:id', (req, res) => {
  console.log('post');
  let id = answerQuestion(req.params.id, req.body);

  if (id) {
    res.redirect(`/question/${id}`);
  } else {
    res.redirect(`/`);
  }
});

router.get('/', (req, res) => {
  let question = getRandomQuestion();
  console.log(question);
  res.send(question);
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  let question = getQuestionById(id);

  res.send(question);
})

module.exports = router;
