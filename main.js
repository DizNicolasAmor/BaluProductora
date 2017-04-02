/*
BaluProductora
- - - - - - - - - -
https://github.com/DizNicolasAmor/BaluProductora
Author:  Diz, Nicolás Amor
*/

$(document).ready(function() {

	// show/hide mail
	var showMail = false; 
	$('#mail').click(function(){
		if(showMail == false){
			showMail = true;
			$('#mailContainer').removeClass('hide');
		}else{
			showMail = false;
			$('#mailContainer').addClass('hide');
		}
	});

	// refresh videos 
    // two rows are shown by default (row0 and row1).
  var rowsShown = 1;
  // refresh button
  $('#masVideos').click(function(){
    rowsShown++;
    if(rowsShown <= 6){
      $('#row'+rowsShown).removeClass('hide');
    }
    rowsShown++;
    if(rowsShown <= 6){
      $('#row'+rowsShown).removeClass('hide');
    }
  });
});