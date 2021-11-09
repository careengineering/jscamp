//DERS 3 - 08.11.2021
//File: src\crossCuttingConcerns\logger.js

export class BaseLogger {
    log(data){
        console.log("Default logger: " + data)
    }
}

export class ElasticLogger extends BaseLogger {
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data){
        console.log("Logged to Mongo" + data)
    }
}