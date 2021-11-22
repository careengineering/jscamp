//DERS 3 - 08.11.2021
//File: src\components\userComponent.js

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js" 
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService (logger1)

let user1 = new User(1, "Engin", "Demiroğ", "İstanbul") 
let user2 = new User(2, "Ahmet", "Kazan", "İzmir") 

userService.add(user1)
userService.add(user2) 

console.log(userService.list())
console.log(userService.getById(2))

/*Sonuç:
Array [ {…}, {…} ]
Object { id: 2, firstName: "Ahmet", lastName: "Kazan", city: "İzmir" }*/


console.log("---------------------")

//DERS 4 - 18.11.2021
//File: src\components\userComponent.js
userService.load()

/*Sonuç:
Object { id: 1, firstName: "Engin", lastName: "Demirog", city: "Ankara", age: 36, creditCardNumber: "123456", type: "customer" }
userService.js:8:8
Object { id: 2, firstName: "Mustafa", lastName: "Sansar", city: "İstanbul", age: 22, creditCardNumber: "654321", type: "customer" }
userService.js:8:8
Object { id: 3, firstName: "Cansu", lastName: "Değirmen", city: "İstanbul", age: 20, salary: 8000, type: "employee" }
userService.js:8:8
Object { id: 4, firstName: "Ali", lastName: "As", city: "Bolu", age: 20, salary: 8500, type: "employee" }*/

console.log(userService.customers)
console.log(userService.employees)

/*Sonuç:

0: Object { id: 1, firstName: "Engin", lastName: "Demirog", … }
​1: Object { id: 2, firstName: "Mustafa", lastName: "Sansar", … }
​
​0: Object { id: 3, firstName: "Cansu", lastName: "Değirmen", … }
1: Object { id: 4, firstName: "Ali", lastName: "As", … }*/

console.log(userService.errors)

/*Sonuç:
0: Object { message: "Wrong user type", data: {…} }*/