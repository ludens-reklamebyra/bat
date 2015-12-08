'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1');

_commander2.default.command('new').description('bootstrap a new project').action(function () {
  var questions = [{
    type: "input",
    name: "name",
    message: "Project name:",
    validate: function validate(value) {
      if (value.length > 0) return true;
      return 'You need a project name';
    }
  }, {
    type: 'list',
    name: 'type',
    message: 'What kind of project?',
    choices: ['Wordpress', 'Express']
  }];

  _inquirer2.default.prompt(questions, function (answers) {
    console.log(JSON.stringify(answers));
  });
});

_commander2.default.parse(process.argv);
