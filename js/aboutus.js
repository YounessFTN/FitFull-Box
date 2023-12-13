// Ouvrir la modale
document.getElementById('openModal').addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    modal.style.right = '0'; // Déplace la modale vers la droite pour l'afficher
});

// Fermer la modale
document.getElementById('closeModal').addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.right = '-100%'; // Déplace la modale hors de l'écran
    setTimeout(function() {
        modal.style.display = 'none';
    }, 500); // Attend que l'animation se termine avant de cacher la modale
});

// Fermer la modale si l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.right = '-100%';
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    }
}

// JS defiliment
const textContainer = document.getElementById('text-container');
const ticker = document.getElementById('ticker');

let text = "FitFullBox   PROMOTION!   -50%    PROMOTION!   -50%   FitFullBox   PROMOTION!   FitFullBox   PROMOTION!   -50%    PROMOTION!   -50%   FitFullBox   PROMOTION!   ";
textContainer.innerText = text + text + text; 

let position = 0;

function scrollText() {
    position--;
    textContainer.style.transform = `translateX(${position}px)`;

    if (position < -textContainer.offsetWidth / 3) {
        position = 0;
    }
}

setInterval(scrollText, 10);

// Js animation bouton 
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('menu-item-hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('menu-item-hover');
    });
});




let slideIndex = 0;
const slides = ["../image/Fit.png", "../image/fitfullbox.png", "../image/Vert_Cercle.gif"]; // img
const slideImage = document.querySelector('.slide img');

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    slideImage.src = slides[slideIndex];
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

showSlide(slideIndex); 

 Option
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000); // 5s d'intervalle



// Get the modals
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

// Get the circular divs
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

// Get the <span> elements that close the modals
var spans = document.getElementsByClassName("close");

// Open the modals
circle1.onclick = function() { modal1.style.display = "block"; }
circle2.onclick = function() { modal2.style.display = "block"; }
circle3.onclick = function() { modal3.style.display = "block"; }

// Close the modals
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
}

// Click outside to close
window.onclick = function(event) {
    if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
