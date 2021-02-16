// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Nuryana'

// creation phase pada Global Context
// nama var = undefine
// nama function = fn()
// Hoisting adalah konsep menaikan ke atas
// window = global object
// this = window

// execution phase

// function membuat Local Execution Context
//  yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// Bedanya local execution context selain kita bisa mengakses window, kita juga bisa mengakses arguments yang nantinya bisa berisi apapun yang kita masukan didalam parameter functionnya
// didalamnya ada hoisting juga

// var nama = 'Nuryana';
// var username = '@otgnuryana';

// function cetakURL(username){
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakURL(username));

// 2.2 Closure
// function init() {
//     // let nama = 'Nuryana';
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Nuryana');


// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log('Halo '+ nama +', Selamat ' + waktu);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatSiang('Nuryana');
// selamatMalam('Cuk');
// selamatPagi('Lort');

// let add = function (){
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// }

// let a = add();

// counter = 100;
// console.log(a());
// console.log(a());
// console.log(a());

// immediate function
// let add = (function (){
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// })();



// counter = 100;
// console.log(add());
// console.log(add());
// console.log(add());





