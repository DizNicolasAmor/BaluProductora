/*
*Nico Diz
*https://github.com/DizNicolasAmor
*/

$(document).ready(function() {


  var backgroundID = 1, 
      footerActive = false, 
      presentacionActive = false, 
      infoTecnicaActive = false, 
      videoclipsActive = false, 
      otrosTrabajosActive = false;

  function reset(){
    //close modal 
    if(presentacionActive){
      presentacionActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#presentacion').fadeOut('slow');
    }  
    if(infoTecnicaActive){
      infoTecnicaActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#infoTecnica').fadeOut('slow');
    }  
    if(videoclipsActive){
      videoclipsActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#videoclips').fadeOut('slow');
    }
    if(otrosTrabajosActive){
      otrosTrabajosActive = false;
      $("#background").animate({opacity: "1"}, 500);
      $('#otrosTrabajos').fadeOut('slow');
    }
    //reset footer animations
    if(footerActive){
      footerActive = false;
      $('footer').animate({height: '-=20%'}, 800);
      $('#footerIcons').animate({fontSize: '1em', marginLeft: '-=20%'}, "slow");
      $('#footerText').animate({fontSize: '1em', marginRight: '-=20%', }, "slow");
    }
  }


  //intro
  $('#homeText').hide();
  $('#logo').hide().delay(600);  
  $('#logo').fadeIn('slow', function(){
    $(this).delay(600).animate({top: '60px', right: '90%', left: '5%', fontSize: '4vw'}, 2400, function(){
      $('#homeText').fadeIn('slow').animate({left: '60%', right: '5%'}, 1800);
      //...home text animation...
    });
  });



  /* I want <navbar> to collapse when I click, but if the <navbar> 
is displayed along on a large screen, simply do nothing. */
  $(".navbar-collapse").collapse('hide');

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });


  //brand -> change background
  $('.navbar-brand').click(function(){
    backgroundID++;
    if(backgroundID > 5) backgroundID = 1;
    $('#background').fadeOut(800, function(){
     $(this).css('background', 'linear-gradient(rgba(50, 50, 250, 0.5), rgba(0, 0, 0, 0.5)), url("images/background' + backgroundID + '.png") no-repeat center center').fadeIn(800);
     $(this).css('-moz-background-size', 'cover');
     $(this).css('-o-background-size', 'cover');
     $(this).css('background-size', 'cover');
    });
  });

  //contacto -> footer
  $('#menuContacto').click(function(){
    if(!footerActive){
      footerActive = true;
      $('footer').animate({height: '+=20%'}, 800);
      $('#footerIcons').animate({fontSize: '1.5em', marginLeft: '+=20%'}, "slow");
      $('#footerText').animate({fontSize: '1.5em', marginRight: '+=20%', }, "slow");      
    }
    else{
      reset();
    }
  });


  //...modal: container appear and others... 

  //videoclips slider
  var slider = $('#slider'),
      moveSlider = function() {
        slider.animate({marginLeft:'-=200%'} ,700, function(){
          $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
          slider.css('margin-left', '-100%');
        });
      }

  $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
  slider.css('margin-left', '-100%');
  
  $('#moreProjects').click(moveSlider());

});
