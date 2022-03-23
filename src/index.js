const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const { exit } = require('process');

const basePromptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter team member\'s name:',
    },
    {
        type: 'list',
        name: 'title',
        message: 'Select the team member\'s title:',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the team member\'s ID number:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the team member\'s email address:'
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter the team member\'s office number:',
        when(answers){
            return answers.title === 'Manager'
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the team member\'s github user name:',
        when(answers){
            return answers.title === 'Engineer'
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the team member\'s school:',
        when(answers){
            return answers.title === 'Intern'
        }
    }
  ]);
};

const exitPrompt = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'another',
            message: 'Enter another team member?',
        },
    ]);
};


let preamble = "<!DOCTYPE html\>\n<html\>\n<head\>\n<title>My Team Dashboard</title\>\n<link rel=\"stylesheet\" href=\"../dist/style.css\"\>\n</head\>\n<body\>\n<header\>\n<h1>My Team</h1\>\n</header\>\n<div id=\"panel_area\"\>\n"
const postscript = "</div\>\n</div\>\n<script src=\"./script.js\"></script>\n</body\>\n</html>"
generateHTML = (toAdd) => {
    switch(toAdd.getRole()){
        case 'Manager':
           preamble = preamble.concat(`<div class = \"panel\">\n<div class = \"panel_header\"><div class = \"panel_header_div\">${toAdd.name}</div\><div class = \"panel_header_div\">&#9749 Manager</div\></div\>\n<div class = \"panel_body\"><div class = \"panel_div\">ID: ${toAdd.id}</div\>\n<div class = \"panel_div\">Email: <a class = \"email\" href= \"mailto:${toAdd.email}\">${toAdd.email}</a\></div\>\n<div class = \"panel_div\">Office number: ${toAdd.office}</div\>\n</div\>\n</div\>\n`);
            break;   
        case 'Engineer':
            preamble = preamble.concat(`<div class = \"panel\">\n<div class = \"panel_header\"><div class = \"panel_header_div\">${toAdd.name}</div\><div class = \"panel_header_div\">&#128083 Engineer</div\></div\>\n<div class = \"panel_body\"><div class = \"panel_div\">ID: ${toAdd.id}</div\>\n<div class = \"panel_div\">Email: <a class = \"email\" href= \"mailto:${toAdd.email}\">${toAdd.email}</a\></div\>\n<div class = \"panel_div\">GitHub: <a class = \"github\" href= \"https://github.com/${toAdd.github}\"> ${toAdd.github}</a\></div\>\n</div\>\n</div\>\n`);
            break;   
        case 'Intern':
            preamble = preamble.concat(`<div class = \"panel\">\n<div class = \"panel_header\"><div class = \"panel_header_div\">${toAdd.name}</div\><div class = \"panel_header_div\">&#127891 Intern</div\></div\>\n<div class = \"panel_body\"><div class = \"panel_div\">ID: ${toAdd.id}</div\>\n<div class = \"panel_div\">Email: <a class = \"email\" href= \"mailto:${toAdd.email}\">${toAdd.email}</a\></div\>\n<div class = \"panel_div\">School: ${toAdd.school}</div\>\n</div\>\n</div\>\n`);
            break;   
    }
    return(preamble + postscript);
  
}

const run = () => {  
    basePromptUser()
    .then((answers) => {
        switch(answers.title){
            case 'Manager': 
                newTeamMember = new Manager(answers.name, answers.id, answers.email, answers.office);            
                break;
            case 'Engineer': 
                newTeamMember = new Engineer(answers.name, answers.id, answers.email, answers.github);
                break;
            case 'Intern': 
                newTeamMember = new Intern(answers.name, answers.id, answers.email, answers.school);
                break;       
        }
        return answers;    
    })
    .then(() => {
        fs.writeFileSync('dist/index.html', generateHTML(newTeamMember));
        console.log("HTML file (dist/index.html) written."); 
    })
    .then(() => exitPrompt())
    .then((answers) => {if(!answers.another){
        process.exit();
     }}) 
    .then(() => run())
    .catch((err) => console.error(err));
};


run();
