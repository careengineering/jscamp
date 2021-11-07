function addToChart(productName){
    console.log("Sepete eklendi : " + productName)
}

addToChart("Elma") //Sonuç: Sepete eklendi : Elma
addToChart("Yumurta") //Sepete eklendi : Yumurta

function addToChart2(productName="Elma",quantity){ //default değer boş bırakılırsa elma olur
    console.log("Sepete eklendi : " + productName + " adet :" + quantity)
}

addToChart2() //Sonuç:Sepete eklendi : Elma adet :undefined
addToChart2("Yumurta",10) //Sonuç:Sepete eklendi : Yumurta adet :10
let dolarDun=9.50
let sayHello=()=> { //fonsiyon olarak tanımladı
    console.log("Hello World")
}
sayHello() //Sonuç:Hello World

let sayHello2=function(){
    console.log("Hello World2")
}
sayHello2() //Sonuç:Hello World2

function addToCart2(productName,quantity,unitPrice){
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma" , unitPrice:10 , quantity:5}//obje kapsüllemek

function addToCart3(product) {
    console.log("Ürün :" + product.productName) //Sonuç: Ürün :Elma
    console.log("Adet :" + product.quantity)//Sonuç:Adet :5
    console.log("Fiyat :" + product.unitPrice)//Sonuç:Fiyat :10
}

addToCart3(product1)

//objeler arrayler referans tiptir.
let product2 = {productName:"Elma" , unitPrice:10 , quantity:5} //stack ve heap kısmında yer alıyor.
let product3 = {productName:"Elma" , unitPrice:10 , quantity:5}
product2=product3 //adrese atandığı için bağlantı kuruyor
product2.productName="KARPUZ"
console.log(product3.productName)//Sonuç: KARPUZ

//sayılar değer tiptir.
let sayi1=10
let sayi2=20
sayi1=sayi2 //sayi1 e sayi2 ye değer atanıyor ve aradaki bağ bitiyor.
sayi2=100 // sayi2 100 oldu ilişkilendirme yok
console.log(sayi1)//Sonuç: 20


function addToCart4(products) {
    console.log(products)

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
/* Sonuç: 
}
Array(3) [ {…}, {…}, {…} ]
0: Object { productName: "Elma", unitPrice: 10, quantity: 5 }
1: Object { productName: "Armut", unitPrice: 10, quantity: 5 }
2: Object { productName: "Karpuz", unitPrice: 10, quantity: 5 }
length: 3
<prototype>: Array []
*/

function add(...numbers) { //... rest operatörü gönderilen tüm değerleri arraye yazar. başka parapetre gönderilecekse önce yaz bunu sona bırak
    let total=0
    for(let i=0;i<numbers.length;i++){
       total=total+numbers[i]  
    }
    console.log(total)
}

add(20,30) //Sonuç: 50
add(20,30,40) //Sonuç: 90
add(20,30,40,50) //Sonuç: 140


let numbers=[30,10,500,600,120]
console.log(numbers) //Sonuç: Array(5) [ 30, 10, 500, 600, 120 ]
console.log(...numbers) //Sonuç:30 10 500 600 120
console.log(Math.max(...numbers)) //Sonuç: 600

let [icAnadolu,marmara,karadeniz]=["İç Anadolu","marmara","karadeniz"] //değişkenlere değer atandı
console.log(icAnadolu) //Sonuç:İç Anadolu
console.log(marmara) //Sonuç:marmara
console.log(karadeniz) //Sonuç:İç karadeniz

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu) //Sonuç:Object { name: "İç Anadolu", population: "20M" }
console.log(marmara) //Sonuç:Object { name: "Marmara", population: "30M" }
console.log(icAnadolu.name) //Sonuç:İç Anadolu
console.log(icAnadoluSehirleri) //Sonuç:Array [ "Ankara", "Konya" ]


let newProductName, newUnitPrice, newQuantity
({
    productName:newProductName,
    unitPrice:newUnitPrice,
    quantity:newQuantity}
    =
{
    productName:"Elma" , 
    unitPrice:10 ,
    quantity:5
})

console.log(newProductName) //Sonuç:Elma
