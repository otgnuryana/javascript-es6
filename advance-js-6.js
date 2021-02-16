// Destructuring Assigment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Nuryana'];

// const [salam, satu, dua, nama] = perkenalan;
// // skip item
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// swap items 
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(b)

// return value pada furction
// function coba() {
//     return [1,2];
// }

// const [a, b] = coba();
// console.log(b)

// Rest parameter 
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(...values);

// Destructuring Object
// const mhs = {
//     nama: 'Nuryana',
//     umur: 19
// }

// // penamaan harus sama dengan property di object 
// const {nama, umur} = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// untuk dustructuring object tidak harus deklarasi objectnya

// ({nama, umur} = { nama: 'Nuryana',umur: 19 });
// console.log(nama);

// Assign ke variable baru

// const mhs = {
//     nama: 'Nuryana',
//     umur: 19
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//     nama: 'Nuryana',
//     umur: 19,
//     email: 'otgnuryana@gmail.com'
// }

// const {nama, umur, email= 'email@default.com'} = mhs;
// console.log(email);

// Memberi nilai default + assign ke variable baru
// const mhs = {
//     nama: 'Nuryana',
//     umur: 19,
//     email: 'otgnuryana@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'Nuryana',
//     umur: 19,
//     email: 'otgnuryana@gmail.com'
// }

// const {nama: n, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Nuryana',
//     umur: 19,
//     email: 'otgnuryana@gmail.com'
// }

// function getIdMhs({ id }) {
//     return id;
// }
// console.log(getIdMhs(mhs))


// Destructuring Function

// function kalkulasi(a,b){
//     return [a + b, a - b, a * b, a / b];
// }

// // const jumlah = penjumlahanPerkalian(1,2);
// // console.log(jumlah);

// // const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);

// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, kurang, kali, tambah} = kalkulasi(2, 4);
// console.log(kali);

// Destructuring Function arguments
const mhs1 = {
    nama: 'Nuryana',
    umur: 19,
    email: 'otgnuryana@gmail.com',
    nilai: {
        tugas: 90,
        uts: 95,
        uas: 96
    }
}

// tanpa destructuring function arguments
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs1));

// dengan destructuring function arguments
function cetakMhs({nama, umur, nilai: { tugas, uts, uas }}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun , nilai UAS saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));