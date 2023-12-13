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



let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productElement = this.closest('.product');
    const price = parseFloat(productElement.querySelector('.price').textContent);
    const productName = productElement.querySelector('h2').textContent;
    addToCart({ name: productName, price, quantity: 1 });
  });
});

function addToCart(item) {
  cart.push(item);
  updateCartDisplay();
  updateCartCount();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} : ${item.price} &times; ${item.quantity}  `;
    cartItemsContainer.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  document.getElementById('cart-total').textContent = `${total}€`;
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.reduce((count, item) => count + item.quantity, 0);
}



// JavaScript pour le défilement de texte continu sans interruption
const textContainer = document.getElementById('text-container');
const ticker = document.getElementById('ticker');

let text = "FitFullBox   PROMOTION!   -50%    PROMOTION!   -50%   FitFullBox   PROMOTION!   FitFullBox   PROMOTION!   -50%    PROMOTION!   -50%   FitFullBox   PROMOTION!   ";
textContainer.innerText = text + text + text; // Cloner le texte pour remplir l'espace

let position = 0;

function scrollText() {
    position--;
    textContainer.style.transform = `translateX(${position}px)`;

    if (position < -textContainer.offsetWidth / 3) {
        position = 0;
    }
}

setInterval(scrollText, 10);

// JavaScript pour l'animation des boutons de menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('menu-item-hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('menu-item-hover');
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Applique un zoom avant à la carte survolée et augmente l'ombre
      card.style.transform = 'scale(1.18)';
      card.style.zIndex = '10';
      card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';

      // Assombrit et diminue la taille des autres cartes
      productCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.opacity = '0.15';
          otherCard.style.transform = 'scale(0.9)';
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      // Réinitialise le style de la carte survolée
      card.style.transform = '';
      card.style.zIndex = '';
      card.style.boxShadow = '';

      // Restaure l'opacité et la taille des autres cartes
      productCards.forEach(otherCard => {
        otherCard.style.opacity = '';
        otherCard.style.transform = '';
      });
    });
  });
});





// Fonction pour afficher la fenêtre modale
function showModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'block';
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none';
}

// Attacher l'événement click à l'icône du panier pour ouvrir la fenêtre modale
document.getElementById('cart-link').addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  showModal();
});

// Attacher l'événement click au bouton de fermeture pour fermer la fenêtre modale
document.querySelector('.close-button').addEventListener('click', function() {
  closeModal();
});


function addToCart(newItem) {
  // Recherche si l'article est déjà dans le panier
  const existingItem = cart.find(item => item.name === newItem.name);

  if (existingItem) {
    existingItem.quantity += newItem.quantity; // Augmente la quantité si l'article est déjà dans le panier
  } else {
    cart.push(newItem); // Ajoute un nouvel article si non présent
  }
  updateCartDisplay();
  updateCartCount();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - ${item.price}€ x ${item.quantity}`;

    const removeButton = document.createElement('button');
    const removeIcon = document.createElement('img');
    removeIcon.src = '../assets/delete.png'; // Chemin de votre image
    removeIcon.alt = 'Retirer';
    removeIcon.style.height = '15px'; // Hauteur de l'icône
    removeIcon.style.width = '13px';  // Largeur de l'icône

    removeButton.appendChild(removeIcon);
    removeButton.onclick = () => removeFromCart(index);
    itemElement.appendChild(removeButton);

    cartItemsContainer.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  document.getElementById('cart-total').textContent = `${total}€`;
}


function removeFromCart(index) {
  cart.splice(index, 1); // Retire l'article du panier
  updateCartDisplay();
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.reduce((count, item) => count + item.quantity, 0);
}



function openModal() {
    document.querySelector('.modal').style.display = 'block';
    // Autres actions pour ouvrir la modale
}
