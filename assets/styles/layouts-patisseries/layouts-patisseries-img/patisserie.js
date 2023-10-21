// Apparition AppareilPhoto-----------

const AppareilPhoto = document.querySelector('.partage-photo');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.45) {
        AppareilPhoto.style.visibility = "visible";
        AppareilPhoto.style.opacity = "1";
        AppareilPhoto.style.marginLeft = "65px";
    }

});

//Apparition de nos valeurs------------------

const NosValeurs = document.querySelector('.nos-valeurs');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.30) {
        NosValeurs.style.visibility = "visible";
        NosValeurs.style.opacity = "1";
    }
});


let size = 0;
let quantity = 0;

const update_price = () => {
    let price = size * quantity;

    // if (isNaN(price)) throw new Error("Le prix n'est pas correct.");
    // if (price <= 0) throw new Error("Le prix est inférieur à zéro...");

    document.getElementById('total').innerText = size * quantity;
};

document.getElementById('size').addEventListener('change', (e) => {
    let new_size = parseFloat(e.currentTarget.value);
    size = new_size;

    update_price();
});

document.getElementById('quantity').addEventListener('change', (e) => {
    let new_quantity = parseFloat(e.currentTarget.value);
    quantity = new_quantity;

    update_price();
});



