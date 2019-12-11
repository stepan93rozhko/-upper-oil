$('.feedback__grid').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });


  
  var res = $(".menuTop__out");
  $(".down").on("click", funk);
  function funk(){    
      if(res.css ("display") == "none"){
          res.fadeIn(100);
          }
          else{
              res.fadeOut(100);            
          }    
      }   