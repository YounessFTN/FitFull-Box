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
