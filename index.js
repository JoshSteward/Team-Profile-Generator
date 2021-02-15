const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const employees = [];

// * Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.


function init(){
    htmlStart();
    addMembers();
  }
  init();

function addMembers(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        },
        {
        type: 'input',
        message: 'Please input your id',
        name: 'id',
        },
        {
        type: 'input',
        message: 'Please input your email',
        name: 'email',
        },
        {
        type: 'list',
        message: 'What is your role?',
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name:'role'
        },
    
        {
            type: 'list',
            message: 'Would you like to add more members?',
            choices: [
                "Yes",
                "No"
            ],
            name:'moreMembers'
        }
    ])
    .then(function({name, id, email, role, moreMembers}) {
        let newMember
        if (role==="Engineer"){
            newMember = new Engineer(name, id, email);
        } else if (role==="Intern"){
                newMember = new Intern(name, id, email);
        } else {
            newMember = new Manager(name, id, email);
        }
        employees.push(newMember);
        console.log(newMember);
        startHtml(newMember)
        .then(function() {
            console.log(moreMembers);
            if (moreMembers === "Yes"){
                addMembers();
            } else {
                endHtml();
            }
                
        });
    })
}

function htmlStart(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
            fs.writeFile("./output/team.html", html, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("start");
}

function startHtml(member){
    console.log("In startHtml ", member);
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer"){
            data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
            </ul>
            </div>
        </div>`;
        } else if (role  === "Intern"){
            data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
            </ul>
            </div>
        </div>`;
        } else {
        data = `
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
            </ul>
            </div>
        </div>`;
    }
    console.log("adding team member");
    fs.appendFile("./output/team.html", data, function (err) {
        if (err) {
            return reject(err);
        };
        return resolve();
    });
    
});
}

function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

