// Higher Order Function

// const angka = [1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter ,Map ,Reduce

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// dengan filter
// const newAngka = angka.filter(a =>  a >= 3);
// console.log(newAngka);

// map
// kalikan angka dengan 2
// const newAngka = angka.map(a => a * 2);

// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, curentValue) => accumulator + curentValue);
// console.log(newAngka)

// Method Chaining 
// Cari angka > 5
// kalikan 3

// jumlahkan

// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, curr) => acc + curr);
// console.log(hasil);

// 4.3 Latihan

// // ambil semua elemen video
// const videos = Array.from(document.querySelectorAll('[data-duration]')) // ubah Nodelist ke bentuk array dengan Array.from()

// // pilih hanya yang Javascript
// let newJavascript = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// // ambil durasi masing2 video
//     .map(item => item.dataset.duration)

// // ubah durasi menjadi integer, ubah menit menjadi detik
// .map(waktu => {
//     // 10:20 -> [10, 20]  split / dipecah
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return parts[0] * 60 + parts[1];
// })

// // jumlahkan semua detik
//     .reduce((total, detik) => total + detik);

// // ubah formatnya jadi jam menit detik
// const jam = Math.floor(newJavascript / 3600);
// newJavascript = newJavascript - jam * 3600;
// const menit = Math.floor(newJavascript / 60);
// detik = newJavascript - menit * 60;

// // Simpan di dom
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;


// const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const jVideo = document.querySelector('.jumlah-video');
// jVideo.textContent = `${jumlahVideo} Video`
