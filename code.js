let images = [
    "https://picsum.photos/id/1/500",
    "https://picsum.photos/id/20/500",
    "https://picsum.photos/id/45/500",
    "https://picsum.photos/id/80/500",
    "https://picsum.photos/id/23/500",
    "https://picsum.photos/id/45/500",
    "https://picsum.photos/id/230/500",
    "https://picsum.photos/id/88/500",
    "https://picsum.photos/id/34/500",
    "https://picsum.photos/id/64/500",
    "https://picsum.photos/id/29/500",
    "https://picsum.photos/id/12/500",
];

//Haetaan lightboxin kuva container, johon klikattu kuva tuodaan näkyviin
let imageContainer = document.getElementById("img_container");

//Haetaan lightbox ja listätään myös siihen kuuntelija (sulkee lightboxin)
let lightBox = document.getElementById("lightbox");
lightBox.addEventListener("click", closeImage);

//Lisätään kaikki pikkukuvat sivulle taulukosta
for(image of images){
    let img = document.createElement("img");
    img.src=image;
    document.body.appendChild(img);
    img.addEventListener("click", openImage);
}

/**
 * Tutkitaan mitä kuvaa klikattiin ja laitetaan sen kuvan scr
 * lightboxin kuvaksi. Tuodaan lightbox näkyviin.
 * @param {Event} event 
 */
function openImage(event){
    let clickedImage = event.currentTarget;
    imageContainer.src = clickedImage.src;
    lightBox.classList.add("visible");
}

/**
 * Jos lightboxia klikataa, suljetaan
 */
function closeImage(){
    lightBox.classList.remove("visible");
}
