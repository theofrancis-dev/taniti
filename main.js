
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


  document.addEventListener('DOMContentLoaded', function() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById("desktop-notice").style.display = "block";
  }
}, false);

function fakeReserve() {
  const flightFrom = document.getElementById('flightFrom').value;
  const travelers = document.getElementById('travelers').value;
  let price;
  
  switch(flightFrom) {
      case 'newyork':
          price = 599 * travelers;
          document.getElementById('totalPrice').textContent = `$${price} Reservation ID: 140646. Paid at the Counter.`;
          break;
      case 'miami':
          price = 399 * travelers;
          document.getElementById('totalPrice').textContent = `$${price} Reservation ID: 140646. Paid at the Counter.`;
          break;
      case 'madrid':
          price = 699 * travelers;
          document.getElementById('totalPrice').textContent = `€${price} Reservation ID: 140646. Paid at the Counter.`;
          break;
      case 'rio':
          price = 10000 * travelers;
          document.getElementById('totalPrice').textContent = `R$${price} Reservation ID: 140646. Paid at the Counter.`;
          break;
  }
}

function closeBooking () {
  document.getElementById('booking').style.display='none';
}

function showBooking(){
  document.getElementById('booking').style.display='block';
  closeNavMenu();
}

function closeNavMenu(){
  document.getElementById('navbarNav').style.display='none';
}

  