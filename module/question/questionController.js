const fs = require('fs');
const path = require('path');
const questionModel = require('./questionSchema');

const QuestionFile = path.join(__dirname + '/question.json');

//Working with question file
const getQuestionList = () => {
  try {
    let result = JSON.parse(fs.readFileSync(QuestionFile, { encoding : 'utf-8' }));
    return result;
  } catch (err) {
    return [];
  }
}

const saveQuestionList = (questionList) => {
  try {
    fs.writeFileSync(QuestionFile, JSON.stringify(questionList), { encoding : 'utf-8'});
  } catch (err) {
    console.log(err);
  }
}
//End working with question file;

//Working with question, question list
const saveQuestion = (id, question) => {
  let questionList = getQuestionList();

  questionList[id] = question;
  saveQuestionList(questionList);
}

const addNewQuestion = (question, callback) => {
  let questionList = getQuestionList();
  let newQuestion = {
    question,
  };
  questionModel.create(newQuestion, (err, question) => {
    if (err) {
      console.log(err);
    } else {
      callback(question);
    };
  });
}

const answerQuestion = (id, answer) => {
  let question = getQuestionById(id);
  let answerResult = getAnswer(answer);

  if (answerResult) {
    if (answerResult == 'no') {
      question.no = question.no + 1;
    } else if (answerResult == 'yes') {
      question.yes = question.yes + 1;
    } else {
      console.log('invalid answer');
    }

    saveQuestion(id, question);
    return id;
  } else {
    return null;
  }
}

const getAnswer = (answer) => {
  if (answer.yes == 'yes') {
    return 'yes';
  } else if (answer.no == 'no') {
    return 'no';
  }
  return '';
}

const getQuestionById = (id) => {
  let questionList = getQuestionList();

  try {
    return questionList[id];
  } catch (err) {
    console.log(err);
    return null;
  }
}

const getRandomQuestion = () => {
  let questionList = getQuestionList();
  let id = Math.floor(Math.random() * (questionList.length - 1))
  let question = questionList[id];

  question.id = id;
  return question;
}

//End working with question, question list

module.exports = {
  answerQuestion,
  getQuestionById,
  addNewQuestion,
  getRandomQuestion
}
