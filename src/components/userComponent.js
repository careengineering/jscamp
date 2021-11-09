//DERS 3 - 08.11.2021
//File: src\components\userComponent.js

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/users.js" 
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


