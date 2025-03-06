
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


  photo_sources = {
    "photo" : {
      "author" : "Julien",
      "url"    : "https://www.pexels.com/photo/nighttime-view-of-lawson-convenience-store-30037323/"
    },
    "photo" : {
      "author": "Joel Abroad",
      "url": "https://www.flickr.com/photos/40295335@N00/4144789522"
    },
    "photo" : {
      "author": "Olichel",
      "url": "https://freerangestock.com/photographer/Olichel/4574"
    }
    
  }


  Photo by <a target="_blank" href=>Olichel</a> from <a target="_blank" href="https://freerangestock.com">Freerange Stock</a>
  Massachusetts Office Of Travel & Tourism, https://www.flickr.com/photos/masstravel/29796992180

  