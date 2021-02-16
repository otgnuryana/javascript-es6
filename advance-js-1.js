// Cara membuat Object pada Javascript
// 1. Object Literal 
// let biodata = {
//     nama: 'Nuryana',
//     umur: 18,
//     tambahUmur: function(tahun){
//         this.umur = this.umur + tahun;
//         console.log('Selamat !! umurmu sekarang '+ this.umur +' tahun');
//     }
// }
// 2. Function Declaration
    // Pertemuan Awal
// function Biodata(nama, umur) {
//     let biodata = {};
//     biodata.nama = nama;
//     biodata.umur = umur;

//     biodata.tambahUmur = function (tahun) {
//         this.umur += tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur)
//     }

//     biodata.kurangiUmur = function (tahun) {
//         this.umur -= tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur)
//     }

//     return biodata;
// }
// let nuryana = Biodata('Nuryana', 18);

    // Sebelum memakai Object.create()
// const methodBiodata = {
//     tambahUmur: function (tahun) {
//         this.umur += tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
//     },

//     kurangiUmur: function (tahun) {
//         this.umur -= tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
//     },
//     ulangTahun: function () {
//         this.umur ++;
//         console.log('Selamat Ulang tahun ' + this.nama + '. Umurmu sekarang ' + this.umur);
//     }
// }

// function Biodata(nama, umur) {
//     let biodata = {};
//     biodata.nama = nama;
//     biodata.umur = umur;
    // tanpa Object.create() harus inisiasi dan jika data didalam methodBiodata diubah, maka inisiasi dibawah juga harus menyesuaikan
//     biodata.tambahUmur = methodBiodata.tambahUmur;
//     biodata.kurangiUmur = methodBiodata.kurangiUmur;
//     biodata.ulangTahun = methodBiodata.ulangTahun;

//     return biodata;
// }
// let nuryana = Biodata('Nuryana', 18);

    // Memakai Object.create lebih efektif karena tidak perlu memanggil satu persatu method yang telah dibuat
    // const methodBiodata = {
    //     tambahUmur: function (tahun) {
    //         this.umur += tahun;
    //         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    //     },
    
    //     kurangiUmur: function (tahun) {
    //         this.umur -= tahun;
    //         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    //     },
    //     ulangTahun: function () {
    //         this.umur ++;
    //         console.log('Selamat Ulang tahun ' + this.nama + '. Umurmu sekarang ' + this.umur);
    //     }
    // }
    
    // function Biodata(nama, umur) {
    //     let biodata = Object.create(methodBiodata);
    //     biodata.nama = nama;
    //     biodata.umur = umur;
    
    //     return biodata;
    // }
    // let nuryana = Biodata('Nuryana', 18);

    // Prototype inheritance
    //     function Biodata(nama, umur) {
    //     this.nama = nama;
    //     this.umur = umur;
    // }

    // Biodata.prototype.tambahUmur = function(tahun) {
    //     this.umur += tahun;
    //     console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    // }
    
    // Biodata.prototype.kurangiUmur = function(tahun) {
    //     this.umur -= tahun;
    //     console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    // }

    // Biodata.prototype.ulangTahun = function() {
    //     this.umur ++;
    //     console.log('Selamat Ulang tahun ' + this.nama + '. Umurmu sekarang ' + this.umur);
    // }

    // let nuryana = new Biodata('Nuryana', 18);


    // versi class. Dibelakang layar bentuk Prototype yang terjadi
    // class Biodata {
    //     constructor(nama, umur){
    //         this.nama = nama;
    //         this.umur = umur;
    //     }

    //     tambahUmur(tahun) {
    //         this.umur += tahun;
    //         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    //     }
        
    //     kurangiUmur(tahun) {
    //         this.umur -= tahun;
    //         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
    //     }
    
    //     ulangTahun() {
    //         this.umur ++;
    //         console.log('Selamat Ulang tahun ' + this.nama + '. Umurmu sekarang ' + this.umur);
    //     }
    // }
























// 3. Constructor function
// keyword new
// function Biodata(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;

//     this.tambahUmur = function (tahun) {
//         this.umur += tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
//     }

//     this.kurangiUmur = function (tahun) {
//         this.umur -= tahun;
//         console.log('Halo ' + this.nama + ' umurmu sekarang ' + this.umur);
//     }
// }
// let nuryana = new Biodata('nuryana', 18);

// 4. Object.create
