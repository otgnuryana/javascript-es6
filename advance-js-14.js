// Async Await
// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// } );
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000) {
        setTimeout(() => {
            resolve('selesai');
        }, 2000);
        } else {
            reject('kelamaan');
        }
    } );
}
// cobaPromise()
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));
// const coba = cobaPromise();
// coba.then(() => console.log(coba));
// apa yang terjadi didalam resolve kita tangkap menggunakan method .then()
// sedangkan reject ditangkap dengan method .catch()

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err)
    }
}
cobaAsync()
