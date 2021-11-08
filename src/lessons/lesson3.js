//DERS 3 - 08.11.2021

let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

// <------------ MAP ------------>
cart.map(product=>console.log(product.productName)) //sepeti dolaş her product için name yazdır
/*Sonuç:
Telefon 
Bardak 
Kalem 
Şarj Cihazı
Kitap
Pot*/

console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
/*Sonuç:
console.log("</ul>")
<ul>
<li>Telefon : 12000</li> 
<li>Bardak : 60</li>
<li>Kalem : 20</li>
<li>Şarj Cihazı : 200</li>
<li>Kitap : 90</li> 
<li>Pot : 750</li>
</ul>*/

// <------------ FILTER ------------>
let quantityOver2 = cart.filter(product=>product.quantity>2) //bu şarta uyuyorsa yeni arraye ata. And operatörü vs eklenebilir.
console.log(quantityOver2)

/*0: Object { id: 1, productName: "Telefon", quantity: 3, … }​
1: Object { id: 5, productName: "Kitap", quantity: 3, … }​
2: Object { id: 6, productName: "Pot", quantity: 5, … }
......*/

// <------------ REDUCE ------------>
let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0) //acc:accumulator sıfır atandı.
console.log(total) //Sonuç:13120

// <------------ DEĞER ATAMA/REFERANS TİP ATAMA FARKI ------------>
//SPA:Single page app

function addToCart(sepet){
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20}) //bellekteki aynı adrese gider
}

addToCart(cart)
console.log(cart)

/* Sonuç: referans tiplerde atama adrese yapıldığından hepsi eklendi
Array(7) [ {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
0: Object { id: 1, productName: "Telefon", quantity: 3, … }
1: Object { id: 2, productName: "Bardak", quantity: 2, … }
2: Object { id: 3, productName: "Kalem", quantity: 1, … }
3: Object { id: 4, productName: "Şarj Cihazı", quantity: 2, … }
4: Object { id: 5, productName: "Kitap", quantity: 3, … }
5: Object { id: 6, productName: "Pot", quantity: 5, … }
6: Object { id: 7, productName: "Ruhsat", quantity: 1, … } */

let sayi =10
function sayiTopla(number){
    number+=1
}

sayiTopla(sayi)
console.log(sayi) //Sonuç:10. değer tiplerde atama yapılır işi biter adresleme gibi değildir.
