// Apparition AppareilPhoto-----------

const AppareilPhoto = document.querySelector('.partage-photo');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.45) {
        AppareilPhoto.style.visibility = "visible";
        AppareilPhoto.style.opacity = "1";
        AppareilPhoto.style.marginLeft="65px";
    }
    console.log(scrollValue);
});
  
//Apparition de nos valeurs------------------

const NosValeurs = document.querySelector('.nos-valeurs');

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue >0.30) {
        NosValeurs.style.visibility = "visible";
        NosValeurs.style.opacity = "1";
    }
});

// Caler sur la date du jour
const today = new Date().toISOString().split("T")[0]
commande_date.value = today;
commande_date.min = today;

