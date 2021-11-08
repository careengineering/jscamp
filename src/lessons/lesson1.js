//DERS 1 - 18.10.2021

console.log("Merhaba Kodlama.io")
var dolarDun = 9.20
var dolarBugun = 9.30
console.log(dolarDun)

//JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30
{let dolarDun=9.10}
console.log(dolarDun)
//sonucu 9.30 verir. var kullanırsak bloktakini kabul ederdi.
const euroDun = 11.2
//euroDun=11 bu satırı yazarsak hata verir
console.log(euroDun)
//array:dizi
//camelCasing olarak tanımlama (PascalCasing de var)
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"] //dizi
let konutKredileri2=[12,"Emlak Konut Kredisi",["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]] //dizi

console.log(konutKredileri)
console.log(konutKredileri2)

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++)
{console.log("<li>"+konutKredileri[i]+"</li>")}
console.log("</ul>")

