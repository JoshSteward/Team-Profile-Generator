const Employee = require('./Engineer.js');

class Engineer extends Employee {
    constructor(name, id, email){
        super(name, id, email);
    }
    get role(){
        return "Engineer";
    }

}

module.exports = Engineer;