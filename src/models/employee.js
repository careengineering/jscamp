//DERS 4 - 18.11.2021
//File:src\models\employee.js

import User from "./user.js"

export default class Employee extends User {
    constructor(id,firstName,lastName,city,age, salary){
        super(id,firstName,lastName,city,age)   
        this.salary=salary      
    }
}
