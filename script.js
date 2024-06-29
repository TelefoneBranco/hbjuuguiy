document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'product.html'; 
});

document.getElementById('cancelarBtn').addEventListener('click', function() {
    document.getElementById('cadastroForm').reset();
});

document.addEventListener("DOMContentLoaded", function() {
    
    var myCarousel = document.querySelector('#myCarousel');
  
    
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,  
      wrap: true       
    });
  });