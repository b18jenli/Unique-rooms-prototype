var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*
$(function(){
  $('#gallery img:gt(0)').hide();
  setInterval(function(){
    $('#gallery :first-child').fadeOut(1000).next('img').fadeIn(1000).end().appendTo('#gallery');
  }, 4500);
});*/

function addToCart(cardid){
  if(cardid === 'card1'){
    window.card ='room01';
    alert('Room 01 - 70s vibes, added to cart!');
  }
  if(cardid === 'card2'){
    window.card = 'room02';
    alert('Room 02 - Cool pool, added to cart!');
  }
  if(cardid === 'card3'){
    window.card ='room03';
    alert('Room 03 - Nerdy neon, added to cart!');
  }
  document.getElementById("room").value = card;

}


/* function ESCclose(evt) {
  if (evt.keyCode == 27)
   window.close();
 }*/
