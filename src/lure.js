import lure from 'commander';
import inquirer from 'inquirer';

lure.version('0.0.1');

lure.command('new')
  .description('bootstrap a new project')
  .action(() => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Project name:",
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

lure.parse(process.argv);
