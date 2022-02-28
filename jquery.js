

$(document).ready(function(){
  $("object").on({
    mouseenter: function(){
      $(this).css("color", "#00bfa5");
    },
    mouseleave: function(){
      $(this).css("color", "black");
    },
    mousedown: function(){
      $(this).css({"font-size": "25px"});
    },
    mouseup: function(){
      $(this).css({"font-size": "20px"});
    }
  });
});



   function flip() {
       $('.card').toggleClass('flipped');
   }
   function flip2() {
       $('.card2').toggleClass('flipped');
   }
   function flip3() {
       $('.card3').toggleClass('flipped');
   }



  $(document).ready(function() {
    $('#showHidden').click(function() {
      $('.hiddenItem').slideToggle("fast", "linear");
    });
  });

  $(document).ready(function() {
    $('#showHidden2').click(function() {
      $('.hiddenItem2').slideToggle("fast", "linear");
    });
  });

  $(document).ready(function() {
    $('#showHidden3').click(function() {
      $('.hiddenItem3').slideToggle("slow", "linear");
    });
  });
