let form = document.querySelector('form');
let input = document.querySelector('input');
let select = document.querySelector('#select');
let img = document.querySelector('img');
let download = document.querySelector('#download');


// GET QR
let GetQR = async(e) => {
    e.preventDefault();

    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`);
    img.setAttribute('src', response.url);
    form.reset();
};


form.addEventListener('submit', GetQR);

// DOWNLOAD QR
download.addEventListener('click', async() => {
    const result = await fetch(img.getAttribute('src'));
    const blob = await result.blob();
    const href = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = href;
    downloadLink.download = 'qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
});
