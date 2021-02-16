// Error Handling
const tombolLacak = document.querySelector('.btn-lacak');
tombolLacak.addEventListener('click', async function () {
    try{
    const inputResi = document.querySelector('.resi');
    const courier = document.querySelector('.kurir');
    const result = await getResi(inputResi.value, courier.value);

    showHistory(result);
    } catch(err) {
        // let thead = document.querySelector('.table-head');
        // thead.innerHTML = err;
        console.log(err)
    }
});



function getResi(keyword, courier) {
    // return fetch(`https://api.binderbyte.com/v1/track?api_key=399b9e9c9c3f9ee46c8993acac2f01ec4c868b4875a16906f2c57160955cb3dd&courier=${courier}&awb=${keyword}`)
    return fetch(`https://backend.otg-web.site/api/products`)
    .then(response => {
        // if( !response.ok ) {
        //     // karena statusText dari api-nya kosong, jadi kita buat manual saja
        //     throw new Error('Data tidak ditemukan');
        // }
        console.log(response);
    })
    .then(response => response.data)
    .catch(response => console.log(response));
}
function showHistory(history) {
    let thead = document.querySelector('.table-head');
    thead.innerHTML = `
    <tr>
    <th>Status Pengiriman</th>
    <th>Waktu</th>
    </tr>`;
    let historyResult = document.querySelector('.history');
    history.history.forEach(m => historyResult.innerHTML += `
        <tr>
        <td>${m.desc}</td>
        <td>${m.date}</td>
        </tr>
    `);
}