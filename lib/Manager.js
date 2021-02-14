const Manager = require('./Intern.js');

class Manager extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }
    get role(){
        return "Manager";
    }

}

module.exports = Manager;