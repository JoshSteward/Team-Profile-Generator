const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }
    getRole(){
        return "Manager";
    }

}

module.exports = Manager;