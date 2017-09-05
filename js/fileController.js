const fs = require('fs');

const saveFileSync = (filename, data) => {
  fs.writeFileSync(filename, data);
};

const readFileSync = (filename) => {
  return fs.readFileSync(filename, { encoding : 'utf-8'});
};

const appendFileSync = (filename, data) => {
  return fs.appendFileSync(filename, data," utf-8 ");
};

const getListQuestion = () => {
  let questionToString = `[${readFileSync('./question.txt')}]`;
  try {
    listQuestion = JSON.parse(questionToString);
    return listQuestion;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTotalQuestion = () => {
  return getListQuestion().length;
}

module.exports = {
  saveFileSync,
  readFileSync,
  appendFileSync,
  getListQuestion,
  getTotalQuestion
};
