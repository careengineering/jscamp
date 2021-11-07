let sayi1=10
sayi1=”Engin Demirog”
let student = {id:1, name:”Engin”}

function save(ogrenci, puan=10) {
    console.log(ogrenci.name + “ : “ + puan)
}

save(student);
//save(50) çalışmaz 50 nin name özelliği yok
//save(student,100); dersek default değeri bırakır puana 100 yazar

/*function save(puan=10,ogrenci) yazıp save(student); denirse hata verir çünkü puana değer atayamaz. öğrenciyide alamaz burda save(undefined, student); yazarsak Engin:10 verir. undefined diyince veri yollamadım default al demek mantıken default parametre varsa sona yazılır!!!!
*/
 
let students = [“A” , “B” , “C” ]
console.log(students)

let students2 = [student, {id:2, name:”Halit”,”Ankara”, {city:”İstanbul”}]
console.log(students2)

//rest:geriye kalanlar

let showProducts = function (id,...products) {
console.log(id)
console.log(products) 
//dizidir. products[0] yazarsak sadece ilk eleman yazılır
}

//spread
console.log(Math.max(1,2,3,50,4,60,14)) // Sonuç: 60
console.log(Math.max([1,2,3,50,4,60,14])) // Sonuç: Nan (not a number)

let points = [1,2,3,50,4,60,14]  
console.log(...points) //Sonuç:1 2 3 50 4 60 14 ayırarak yazdı
console.log(Math.max(...points)) // Sonuç: 60

console.log(..."ABC","D",..."EFG","H") //Sonuç:A B C D E F G H ayırdı


//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations //diziyi sırayla değişkenlere atadı
console.log(small) //Sonuç:10000
console.log(medium) //Sonuç:20000
console.log(high) //Sonuç:30000
console.log(veryHigh) //Sonuç:40000
console.log(maximum) //Sonuç:100000

function someFunction([small1],number)
{ console.log(small1)}

someFunction(populations)

let category={id:1,name:"içecek"}
console.log(category.id) //Sonuç:1
console.log(category["name"]) //Sonuç:içecek

let {id,name}=category
console.log(id) //Sonuç:1
console.log(name) //Sonuç:içecek


class Customer{
    constructor(id,customerNumber){
        this.id=id;
        this.customerNumber=customerNumber;
    }

}
console.log(customer.customerNumber)

let customer = new Customer(1,"1235");//Sonuç:1235
//prorotype
customer.name="Abuzer"
console.log(customer.name) //Sonuç:Abuzer

Customer.bisey="Bişey"
console.log(Customer.bisey) //Sonuç:Bişey

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}
let products = [
    {id:1, name: "Acer Laptop" , unitPrice:15000},
    {id:2, name: "Asus Laptop" , unitPrice:16000},
    {id:3, name: "Hp Laptop" , unitPrice:13000},
    {id:4, name: "Dell Laptop" , unitPrice:12000},
    {id:5, name: "Casper Laptop" , unitPrice:17000},
]

console.log("<ul>")
products.map(product => console.log('<li>${product.name}</li>')) //tırnak?
console.log("</ul>")

let filteredProducts =products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts) //filtreleme

let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal) //sepet toplamı

