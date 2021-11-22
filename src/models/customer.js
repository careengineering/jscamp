//DERS 4 - 18.11.2021
//File:src\models\customer.js

import User from "./user.js"

export default class Customer extends User {
    constructor(id,firstName,lastName,city,age, creditCardNumber){
        super(id,firstName,lastName,city,age) //User constructorında çalışır      
        this.creditCardNumber=creditCardNumber      
    }
}