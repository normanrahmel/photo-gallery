let images = ['img/Bild1.jpg', 'img/Bild2.jpg', 'img/Bild3.jpg', 'img/Bild4.jpg', 'img/Bild5.jpg', 'img/Bild6.jpg', 'img/Bild7.jpg', 'img/Bild8.jpg', 'img/Bild9.jpg', 'img/Bild10.jpg', 'img/Bild11.jpg', 'img/Bild12.jpg', 'img/Bild13.jpg', 'img/Bild14.jpg', 'img/Bild15.jpg', /* 'img/Bild16.jpg', 'img/Bild17.jpg', 'img/Bild18.jpg', 'img/Bild19.jpg', 'img/Bild20.jpg'*/ ];

let currentImage = 0;

function load() {
    let containerImages = document.getElementById('containerImages');

    for (let i = 0; i < images.length; i++) {
        const currentImage = images[i];
        containerImages.innerHTML += /*html*/ `
       
       <div onclick="shwoFullImage(${i})" class="imgBox"> 
       
       <img src="${images[i]}">
       
    </div>
       `;
    }
}

function shwoFullImage(i) {
    document.getElementById('fullImg').classList.add('showFullImage');
    fullImg.innerHTML = /*html*/ ` 
   <div>
    <button onclick="removeFullImage()" id="removeButton" class="btn">Back</button>
    
    <button onclick="lastPic(${i})" id="lastImg" class="btn nextImglastImg">Last</button>
       
       <img src="${images[i]}">
   
    <button onclick="nextPic(${i})" id="nextImg" class="btn nextImglastImg">Next</button>
    
</div>
    `;
}

function removeFullImage() {
    document.getElementById('fullImg').classList.remove('showFullImage');
    fullImg.innerHTML = '';

}


function nextPic(i) {
    if (i == images.length - 1) {
        i = 0;
    } else {
        i++;
    }

    document.getElementById('fullImg').innerHTML = /*html*/ `
    <img src="${images[i]}">
    `;
    shwoFullImage(i);
}


function lastPic(i) {
    if (i == 0) {
        i = images.length - 1;
    } else {
        i--;
    }

    document.getElementById('fullImg').innerHTML = /*html*/ `
    <img src="${images[i]}">
    `;
    shwoFullImage(i);
}