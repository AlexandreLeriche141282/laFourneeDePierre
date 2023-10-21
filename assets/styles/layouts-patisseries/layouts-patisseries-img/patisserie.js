// Apparition AppareilPhoto-----------------------

const AppareilPhoto = document.querySelector('.partage-photo');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.45) {
        AppareilPhoto.style.visibility = "visible";
        AppareilPhoto.style.opacity = "1";
        AppareilPhoto.style.marginLeft = "65px";
    }

});

//Apparition de nos valeurs------------------------

const NosValeurs = document.querySelector('.nos-valeurs');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.30) {
        NosValeurs.style.visibility = "visible";
        NosValeurs.style.opacity = "1";
    }
});

// Caler sur la date du jour---------------------------
const today = new Date().toISOString().split("T")[0]
commande_date.value = today;
commande_date.min = today;


// Calcul prix -----------------------------------------
let size = 0;
let quantity = 0;

const update_price = () => {
let price = size * quantity;

    document.getElementById('total').innerText = size * quantity;
};

document.getElementById('size').addEventListener('change', (e) => {
    let new_size = parseFloat(e.currentTarget.value).toFixed(2);
    size = new_size;

    update_price();
});

document.getElementById('quantity').addEventListener('change', (e) => {
    let new_quantity = parseFloat(e.currentTarget.value).toFixed(2);
    quantity = new_quantity;

    update_price();
});



