
    document.addEventListener('click', (e) => {
        const navbar = document.querySelector('#navbarNav');
        const toggler = document.querySelector('.navbar-toggler');
        if (!navbar.contains(e.target) && !toggler.contains(e.target) && navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });

 document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', () => {
      const modalImg = document.getElementById('modalImage');
      const modalName = document.getElementById('modalName');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalName.textContent = img.dataset.name;
    });
  });


