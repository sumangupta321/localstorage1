const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');
const ongeneratesubmit = (e) => {
    e.preventDefault();
    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    if (url === '') {
        alert('please enter the URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();

            generateQRCode(url, size);
 
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createsavebutton(saveUrl);
            }, 50);

        }, 1000);

        setTimeout(clearFields, 5000);
    }
};
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });

};
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

const clearUI = () => {
    qr.innerHTML = '';
    const savelink= document.getElementById('save-link');
    if(savelink) savelink.remove();
};
const clearFields =() =>{
document.querySelector('#url').value = '';
document.querySelector('#size').value = '';
}
 

const createsavebutton = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'saveimage';
    document.getElementById('generated').appendChild(link);
}
// console.log(createsavebutton('test'));


hideSpinner();
form.addEventListener('submit', ongeneratesubmit);

/**click demo */

// const button = document.querySelector(".click-btn");
// const text = document.querySelector(".main-section");
//  button.addEventListener("click", myfunction);

//  function myfunction(){
//     text.classList.toggle("active");
//  }
//  const button = document.querySelector(".click-btn");
//  const myform = document.querySelector('#generate-form');

//  button.addEventListener('click',input);
//  function input(){
//     myform.classList.toggle('active');
//  }










const img = document.querySelector(".right-contain");
const myform = document.querySelector("#generate-form");
img.addEventListener('click', input);
function input() {
    myform.classList.toggle('active');
}
