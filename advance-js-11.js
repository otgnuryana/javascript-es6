// Promise
// OBject yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// keadaan
// state (fulfilled(jika berhasil) / rejected(jika gagal) / pending(waktu tunggu));
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ){ 
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


// console.log('selesai');

// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'The Flash',
            pemeranUtama: 'Gran Gustin sebagai Barry Allen'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Sumedang',
            suhu: '27',
            kondisi: 'Gerimis Berpetir'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });