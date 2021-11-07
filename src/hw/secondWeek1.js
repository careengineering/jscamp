//İKİNCİ HAFTA ÖDEVLERİ

console.log("*************** İKİNCİ HAFTA ***************") 

/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz
bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı 
olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

console.log("---------- ÖDEV 1 ----------") 

function findPrime (...numbers) {

    for(let i=0;i<numbers.length;i++)
    {
        let number = numbers[i]
        let control = 0    
        for(let j=2;j<number;j++)
            {
                 if (number % j == 0) {
                control=control+1 } 
            }
        if (control==0) {
            console.log(number + " asal sayıdır.") }
        else { 
            console.log(number + " asal sayı değildir.") }
    }
}

findPrime(2,5,8,21,13,15,31)

/*2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını
bulan programı yazınız. (Arkadaş sayılar için google)*/

console.log("---------- ÖDEV 2 ----------") 

let number1= prompt("İlk sayıyı giriniz");
let number2= prompt("İkinci sayıyı giriniz");

function findFriend (number1,number2) {
    let sum1 = 0    
    for(let i=1;i<number1;i++) 
    {
        if (number1 % i == 0)
        {
            sum1=sum1+i 
        } 
    }    
    let sum2 = 0    
    for(let j=1;j<number2;j++)
    {
        if (number2 % j == 0) 
        {
            sum2=sum2+j 
        } 
    }    
    if (sum1==number2 && sum2==number1) 
    {
        console.log(number1 + " sayısı " + number2 + " sayısı ile arkadaştır")
    }
    }

findFriend(number1,number2)

/*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*/

console.log("---------- ÖDEV 3 ----------") 

    for(let i=1;i<1000;i++)
    {
        let number = i
        let control = 0    
        for(let j=1;j<number;j++)
            {
                 if (number % j == 0) {
                control=control+j } 
            }
        if (control==number) {
            console.log(number + " mükemmel sayıdır.") }

    }

/*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/

console.log("---------- ÖDEV 4 ----------") 

    for(let i=1;i<=1000;i++)
    {
        let number = i
        let control = 0    
        for(let j=2;j<number;j++)
            {
                 if (number % j == 0) {
                control=control+1 } 
            }
        if (control==0) {
            console.log(number + " asal sayıdır.") }
        else { 
            console.log(number + " asal sayı değildir.") }
    }
