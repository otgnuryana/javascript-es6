// const searchButton = document.querySelector('.search');
// searchButton.addEventListener('click', function () {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + inputKeyword.value)
//     .then(response => console.log(response));


// const tombolLacak = document.querySelector('.btn-lacak');
// tombolLacak.addEventListener('click', async function () {
//     const inputResi = document.querySelector('.resi');
//     const courier = document.querySelector('.kurir');

//     // console.log(inputResi.value);
//     const result = await getResi(inputResi.value, courier.value);
//     // tampilResponse(result);
//     showHistory(result.history);
//     // showTime(result.history);
// });



// function getResi(keyword, courier) {
//     return fetch(`https://api.binderbyte.com/v1/track?api_key=399b9e9c9c3f9ee46c8993acac2f01ec4c868b4875a16906f2c57160955cb3dd&courier=${courier}&awb=${keyword}`)
//     .then(response => response.json())
//     .then(response => response.data)
//     .catch(response => console.log(response));
// }
// function showHistory(history) {
//     let thead = document.querySelector('.table-head');
//     thead.innerHTML = `
//     <tr>
//     <th>Status Pengiriman</th>
//     <th>Waktu</th>
//     </tr>`;
//     let historyResult = document.querySelector('.history');
//     history.forEach(m => historyResult.innerHTML += `
//         <tr>
//         <td>${m.desc}</td>
//         <td>${m.date}</td>
//         </tr>
//     `);
// }
// function showTime(date) {
//     let historyTime = document.querySelector('.time');
//     date.forEach(m => historyTime.innerHTML += `<li>${m.date}</li>`);
// }

// const history = [
//     {
//         "date": "2021-02-03 07:42:00",
//         "desc": "WITH DELIVERY COURIER [DEPOK]",
//         "location": ""
//     },
//     {
//         "date": "2021-02-03 05:28:00",
//         "desc": "RECEIVED AT WAREHOUSE [DPK, CASH COUNTER JNE KSU]",
//         "location": ""
//     },
//     {
//         "date": "2021-02-02 19:48:00",
//         "desc": "PROCESSED AT SORTING CENTER [SUMEDANG, PRABU GAJAH AGUNG]",
//         "location": ""
//     },
//     {
//         "date": "2021-02-02 19:12:00",
//         "desc": "RECEIVED AT SORTING CENTER [BANDUNG]",
//         "location": ""
//     },
//     {
//         "date": "2021-02-02 14:09:00",
//         "desc": "SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [SUMEDANG]",
//         "location": ""
//     }
// ];

// let historyResult = document.querySelector('.history');
// history.forEach(m => historyResult.innerHTML += `
//     <tr>
//     <td>${m.desc}</td>
//     <td>${m.date}</td>
//     </tr>
// `);
// let historyResult = document.querySelector('.history');
// history.forEach(m => historyResult.innerHTML += m.desc);




// tampilResponse()
// fetch('https://api.binderbyte.com/v1/track?api_key=e2520fd94c60a72065097c341877b5bb8c5f77ce15ac99e35b64a1c5739cb7b1&courier=sicepat&awb=' + noResi)


