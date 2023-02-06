//Arraydaki ededlerin ededi ortasini tapin.

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr =[]
// let sum = 0
// let avg = 0
// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt("Ededleri daxil edin")
//     sum += arr[i]
//     avg = sum / a
// }
// console.log(`Daxil olunan ededlerin ortalamasi = ${avg}`);




//Array icerisinde nece element oldugunu tapin.

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr =[];

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}-ci ededi daxil edin`)
// }

// console.log(`Daxil edilen ededlerden ibaret massiviniz: ${arr}`);
// console.log(`Daxil edilen ededlerin sayi: ${a}`);



//Arraylerin hamisin cut olub olmadigina baxin. 

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}-ci ededi daxil edin`)
// }

// let counter = 0
// for(let j = 0; j < arr.length; j++){
//     if (arr % 2 == 0) {
//        console.log(`Daxil edilen ededler cutdur`);
//     }
//     else{
//         console.log("Ededlerin hamisi cut deyil");
//     }
// }
// console.log(`Yazilan array: ${arr}`);



//Array icerisindeki tek ededlerin cemini tapin.

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []
// let sum = 0
// for(let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}-ci elementi daxil edin`)
// }

// let counter = 0

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 != 0) {
//         sum += arr[j]
//         counter++;        
//     }
// }
// console.log(`Tek ededlerin sayi : ${counter}`);
// console.log(`Array icerisindeki tek ededlerin cemi ${sum}`);



//Daxil edilen ededlerin ededi ortasini tapin

// let a = +prompt("Nece eded daxil edeceksiniz? ")
// let b = 0;
// let avg;
// for(let i = 0; i < a; i++){
//     b += +prompt(`${i+1}-ci ededi daxil edin`)
//     avg = b / a

// }
// console.log(`Daxil edilen ededlerin ededi ortasi -> ${avg}`);


//Input ile daxil olunan ədədin tərsinin bölənlərini göstərin.

// let a = +prompt("Ededi daxil edin")
// let b = Number(String(a).split('').reverse().join(''));
// console.log(`Tersi olan eded ${b}`);

// for (let i = 1; i <= b; i++) {
//     if (b % i == 0) {
//         console.log(`${i}`);
//     }
// }

//Ededi sadə vuruqlara ayırmaq

let a = +prompt("Ededi daxil edin: ")

let counter = 0
for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
    console.log(i);
    }    
    }

















































