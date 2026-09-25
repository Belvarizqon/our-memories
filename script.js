const photos = document.querySelectorAll(".photo-card img");

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const close = document.getElementById("close");


// Ketika foto diklik
photos.forEach(photo => {

    photo.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImage.src = photo.src;

    });

});


// Tutup popup
close.addEventListener("click", () => {

    popup.style.display = "none";

});


// Klik area luar foto untuk menutup
popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.style.display = "none";

    }

});
