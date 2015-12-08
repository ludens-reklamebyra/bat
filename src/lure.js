import lure from 'commander';
import inquirer from 'inquirer';

lure.version('0.0.1');

lure.command('new')
  .description('bootstrap a new project')
  .action(() => {
    let projectType;
    let projectName;
    const projectTypes = [
      {
        type: 'list',
        name: 'projectType',
        message: 'What kind of project?',
        choices: ['Wordpress', 'Express']
      },
    ];

    inquirer.prompt({
      type: "input",
      name: "name",
      message: "Project name:",
    }, answer => {
      projectName = answer.name;

      inquirer.prompt(projectTypes, answer => {
        projectType = answer.projectType;

        console.log(`Hello ${projectName} of type ${projectType} 🍻`);
      });
    });
  });

lure.parse(process.argv);
