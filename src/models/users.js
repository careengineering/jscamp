//DERS 3 - 08.11.2021
//File:src\models\users.js

export default class User {
    constructor(id, firstName, lastName, city) { //oluşturucu
        this.id = id
        this.firstName = firstName //this şu class demek. şu clasta firstname oluştur onun değeride constructora gönderilen firstname olsun
        this.lastName = lastName
        this.city = city
        console.log()
    }
}

