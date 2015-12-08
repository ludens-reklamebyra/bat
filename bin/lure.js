'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1');

_commander2.default.command('new').description('bootstrap a new project').action(function () {
  var projectType = undefined;
  var projectName = undefined;
  var projectTypes = [{
    type: 'list',
    name: 'projectType',
    message: 'What kind of project?',
    choices: ['Wordpress', 'Express']
  }];

  _inquirer2.default.prompt({
    type: "input",
    name: "name",
    message: "Project name:"
  }, function (answer) {
    projectName = answer.name;

    _inquirer2.default.prompt(projectTypes, function (answer) {
      projectType = answer.projectType;

      console.log('Hello ' + projectName + ' of type ' + projectType + ' 🍻');
    });
  });
});

_commander2.default.parse(process.argv);
