const fs = require('fs');

const saveFile = (filename, data) => {
  fs.writeFileSync(filename, data);
};

const readFile = (filename) => {
  return fs.readFileSync(filename, { encoding : 'utf-8'});
};

module.exports = {
  saveFile,
  readFile
};
