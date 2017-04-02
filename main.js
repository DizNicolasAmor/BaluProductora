/*
BaluProductora
- - - - - - - - - -
https://github.com/DizNicolasAmor/BaluProductora
Author:  Diz, Nicolás Amor
*/

$(document).ready(function() {
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
});
