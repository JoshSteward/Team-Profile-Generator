const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;