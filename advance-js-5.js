// Template Literals / Template String

// const nama = 'Nuryana'
// const umur = 19
// console.log(`Halo nama saya ${nama}, umur saya ${umur}`);

// 1. Embedded Expression

// console.log(`${ 5 + 5 }`);

// console.log(`${alert('Tes')}`);

// const x = 11;
// console.log(`${(x % 2 == 0 ? 'genap' : 'ganjil')}`);

// HTML Fragment

// const profil = {
//     nama: 'Nuryana',
//     umur: 19,
//     nomorHp: 082295902418,
//     email: 'otgnuryana@gmail.com'
// };

// const el = `
//     <div class="mhs">
//     <h2>${profil.nama}</h2>
//     <span>${profil.nomorHp}</span>
//     <span>${profil.email}</span>
//     </div>
// `;

// document.body.innerHTML = el;

// // 2. Looping
// const mhs = [
//     {
//         nama: 'Nuryana',
//         email: 'otgnuryana@gmail.com'
//     },
//     {
//         nama: 'Anjas',
//         email: 'anjascukimay@gmail.com'
//     },
//     {
//         nama: 'Mabar',
//         email: 'mabarslur@gmail.com'
//     }
// ];

// const el = `
// <div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>
// `;

// document.body.innerHTML = el;

// 3. Conditionals
// ternary

// const lagu = {
//     judul: 'Cobalah Mengerti',
//     grupBand: 'Noah/Peterpan',
//     feat: 'geisha'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.grupBand} ${lagu.feat ? `feat. ${lagu.feat}` : ''}</li>
//     </ul>
// </div>`
// document.body.innerHTML = el;

// 4. Nested
// HTML Fragment bersarang

// const mhs = {
//     nama: 'Nuryana',
//     semester: 5,
//     mataKuliah: [
//     'Rekayasa Web', 
//     'Analisa dan Perancangan Sistem Informasi',
//     'Pemrograman Sistem Interaktif',
//     'Perancangan Sistem Berorientasi Object'
// ],
// }
// function cetakMataKuliah(matkul){
//     return `
//     <ol>
//     ${matkul.map(mk => `<li>${mk}</li>`).join('')}</ol>
//     `
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>Semester: ${mhs.semester}</span>
//     <h4>Mata Kuliah: </h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`
// document.body.innerHTML = el; 

// Tagged Templates

// const nama = 'Nuryana';
// const umur = 19;

// function coba(strings, ...any){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${any[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${any[i] || ''}`, '')
// };

// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Nuryana';
const umur = 19;
const email = 'otgnuryana@gmail.com'

function coba(strings, ...any){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${any[i] || ''}</span>`, '')
};

const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun. Email: ${email}`;

document.body.innerHTML = str;