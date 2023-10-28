// Side Bar
const sidebar = document.getElementById("side-bar")
const containerNav = document.querySelector(".container-nav")


btn.addEventListener('click', () => {
    sidebar.classList.toggle("active");
})

containerNav.addEventListener("click", () => {
    sidebar.classList.remove("active")
    
})

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
    document.querySelector('.panier').addEventListener("click", myFunction);


    function myFunction() {
    document.getElementById('valid').innerText = "alaex"    
    }
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

// Texte ajout de produits au panier
let textQuantity = document.querySelector('.fa-basket-shopping')
document.getElementById('valid').addEventListener('click', function () {
    if (quantity > 1) {
     document.getElementById('balise').innerHTML=`${quantity} "Coeur Vanille" ont été ajoutés à votre panier.`;   
    } else {
        document.getElementById('balise').innerHTML = `${quantity} "Coeur Vanille" a été ajouté à votre panier.`; 
        
    }
    
})


document.getElementById("valid").addEventListener('click',()=> {
    confetti();
})





