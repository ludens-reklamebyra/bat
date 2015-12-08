import program from 'commander';
import inquirer from 'inquirer';

program.version('0.0.1');

program.command('new')
  .description('bootstrap a new project')
  .action(() => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Project name:",
        validate: value => {
          if (value.length > 0) return true;
          return `You need a project name`;
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'What kind of project?',
        choices: ['Wordpress', 'Express']
      }
    ];

    inquirer.prompt(questions, answers => {
      console.log(JSON.stringify(answers));
    });
  });

program.parse(process.argv);
