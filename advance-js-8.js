// Spread Operator
// Memecah (expand / unpack) iterables menjadi single element

// const mhs = ['Nuryana', 'Otg', 'Hmm'];
// console.log(...mhs[1]);

// // menggabungkan 2 array
// const dosen = ['gatau', 'siapa', 'njir'];
// // const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'anjay', ...dosen];

// // const orang = mhs.concat(dosen); 
// console.log(orang);

// const mhs1 = mhs;

// const mhs1 = [...mhs];
// mhs1[0] = 'Tes';
// console.log(mhs);
// console.log(mhs1);



// const liNama = document.querySelectorAll('li');
// console.log(liNama[0].textContent);
// const mhs = [];
// for (let i = 0; i < liNama.length; i++) {
//     mhs.push(liNama[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liNama].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(n => `<span>${n}</span>`).join('');
nama.innerHTML = huruf;