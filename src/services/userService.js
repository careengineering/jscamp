//DERS 4 - 18.11.2021
//File:src\services\userService.js metot havuzu

import { users } from "../data/users.js" //sonuna js eklemeyi unutma
import DataError from "../models/dataerror.js"

export default class UserService { 
    constructor(loggerService){
        this.employees=[] 
        this.customers=[] 
        this.errors=[]
        this.loggerService =loggerService
    }
    
    load(){
        for (const user of users) {
            switch(user.type){
                case "customer"  :
                    this.customers.push(user)
                    break;
                    case "employee"  :
                        this.employees.push(user)
                        break;
                    default:
                        this.errors.push(new DataError("Wrong user type",user))
                        break;                    
            }
            console.log(user)
        }
    }






    add(user) { 
       // this.users.push(user)
        this.loggerService.log(user)
    }

    list() { 
       // return this.users
    }

    getById(id) { 
        //return this.users.find(u=>u.id===id) //verdiğin şarta göre data döndür
    }
}
