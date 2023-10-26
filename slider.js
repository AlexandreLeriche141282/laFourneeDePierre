// Side Bar
const sidebar = document.getElementById("side-bar")
const containerNav = document.querySelector(".container-nav")


btn.addEventListener('click', () => {
    sidebar.classList.toggle("active");
})

containerNav.addEventListener("click", () => {
    sidebar.classList.remove("active")
    
})


// Slider Images--------------------

let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 4000)

// Apparition AppareilPhoto-----------

const AppareilPhoto = document.querySelector('.partage-photo');
// let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.43) {
        AppareilPhoto.style.visibility = "visible";
        AppareilPhoto.style.opacity = "1";
        AppareilPhoto.style.marginLeft="105px";
    }
    
});
  
//Apparition de nos valeurs------------------

const NosValeurs = document.querySelector('.nos-valeurs');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue >0.28) {
        NosValeurs.style.visibility = "visible";
        NosValeurs.style.opacity = "1";

    }
    console.log(scrollValue);
});

