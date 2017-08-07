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
      $('#homeText').fadeIn('slow').animate({left: '60%', right: '5%'}, 1800, function(){
        setTimeout(function(){typeDelete();},3000);
      });
    });
  });

  //  typing effect used in intro 
  var arrayPos = 0, 
      words = ['que cambia ', 'cada tres ', 'segundos. ', 'frase copada '];

  function typeDelete(){
    var initialLength = $('#animatedText').html().length;
    for(i = 0; i < initialLength; i++){
      speed = 200;
      setTimeout(function(){
      var sentence = $('#animatedText').html().split('');
      sentence.pop();
      $('#animatedText').html(sentence);
      }, speed * i); 
    }
    setTimeout(function(){
      typeWrite();
    }, speed * initialLength);
  }

  function typeWrite(){
    currentWord = words[arrayPos];
    currentWordPos = 0;
    if(currentWord == undefined){
      arrayPos = 0;
      currentWord = words[arrayPos];
    }
    for(i = 0; i < currentWord.length; i++){
      setTimeout(function(){
        var sentence = $('#animatedText').html();
        sentence += currentWord[currentWordPos];
        $('#animatedText').html(sentence);
        currentWordPos++;
      }, speed * i); 
    }
    setTimeout(function(){
      arrayPos++
      typeDelete();
    }, currentWord.length * speed + 3000)
  }



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


  //  *** MENU BUTTONS ***
    //presentacion
  $('#menuPresentacion').click(function(){
    if(!presentacionActive){
      reset();
      presentacionActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#presentacion').show('slow');
      $('.close').click(function(){
        reset()
      });
    }
  });
    //info técnica
  $('#menuInfoTecnica').click(function(){
    if(!infoTecnicaActive){
      reset();
      infoTecnicaActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#infoTecnica').show('slow');
      $('.close').click(function(){
        reset()
      });
    }
  });
    //videoclips
  $('#menuVideoclips').click(function(){
    if(!videoclipsActive){
      reset();
      videoclipsActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#videoclips').show('slow');
      $('.close').click(function(){
        reset()
      });
    }
  });
    //otros trabajos
  $('#menuOtrosTrabajos').click(function(){
    if(!otrosTrabajosActive){
      reset();
      otrosTrabajosActive = true;
      $("#background").animate({opacity: "0.5"}, 500);
      $('#otrosTrabajos').show('slow');
      $('.close').click(function(){
        reset()
      });
    }
  });
    //contacto -> footer
  $('#menuContacto').click(function(){
    if(!footerActive){
      reset();
      footerActive = true;
      $('footer').animate({height: '+=20%'}, 800);
      $('#footerIcons').animate({fontSize: '1.5em', marginLeft: '+=20%'}, "slow");
      $('#footerText').animate({fontSize: '1.5em', marginRight: '+=20%', }, "slow");      
    }
    else{
      reset();
    }
  });

  
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
