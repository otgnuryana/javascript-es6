// 3.1 Arrow Function
// Function expression adalah dimana functionnya disimpan ke dalam suatu variable. functionnya tanpa nama (Anonymous function), dibuatnya dalam bentuk expresi.
// let tampilPesan = function (nama) {
//     console.log('Halo ' + nama);
// }
// tampilPesan('Nuryana');
// Arrow Function 
// Bentuk lain yang lebih ringkas dari Function Expression

// let tampilPesan = (nama) => return 'Halo ' + nama; }
// console.log(tampilPesan('nuryana'));

// Jika parameter hanya satu boleh tidak pakai kurung, tapi kalau lebih dari satu harus pakai kurung
// bahkan tidak perlu pakai return bahkan kurung.

// implisit return
// let tampilPesan = nama => 'Halo ' + nama;
// console.log(tampilPesan('nuryana'));

// // jika tanpa parameter wajib pakai ()
// let sayHello = () => 'Hello World !';
// console.log(sayHello());

// let mahasiswa = ['Nuryana', 'Otg', 'CukupTw'];
// tanpa arrow function
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

// dengan arrow function
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// jika ingin mengembalikan Object
// let jumlahHuruf = mahasiswa.map( nama => ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);

// Konsep this pada arrow function
// Constructor Function

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [dua, satu] = [satu, dua];
    }

    this.classList.toggle(satu);
    setTimeout( () => {
        this.classList.toggle(dua);
    }, 600)
});