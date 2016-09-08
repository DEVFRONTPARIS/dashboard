
									 /*****************************************
									   BOUTTONS EDITER ET SUPPRIMER UNE IMAGE 
									 ****************************************/
$(function(){	
	/* Les variables déclarées au chargement de la page --------------------------------------- */	
var siteName = $('#site-name').val(),
	siteURL = $('#site-url').val();
	/* Supprimer --------------------------------------- */
$('.delete-item').on('click', function(){
	var list = $(this).parent().parent().parent().attr('class');/*var list trouve la class du parent daily weekly ou monthly*/
	if ($('.'+list+' .icoaction').display == 'inline-block' || 'block') {
		$('.'+list+' .delete-item').show();
		$('.'+list+' .rename-item').show();
		$('.'+list+' .icoaction').toggle('.display-none'); 	
		var deleteison = true;
	} else{
		return false
	}									
}); /* au clic sur la petite corbeille, cache moi le crayon & fait apparaitre l'icone supprimer sur l'élément */
	/* Editer --------------------------------------- */
$('.rename-item').on('click', function(){
	var list = $(this).parent().parent().parent().attr('class');
	if (deleteison = true && $('.'+list+' .icoaction1').display == 'inline-block' || 'block') {
		$('.'+list+' .delete-item').show();
		$('.'+list+' .rename-item').show();
		$('.'+list+' .icoaction1').toggle('.display-none'); 
		deleteison = false;
	} else{
		return false
	}
	// $('li .addlist').css('display', 'none'); 		
});/* au clic sur le petit crayon, cache moi la poubelle & fait apparaitre l'icone editer sur l'élément */
/*  ---------------------  FIN --------------------------------------- */

									 /***********************************************
								   	   ACTIONS ICONES EDITER ET SUPPRIMER UN ITEM 
									 ***********************************************/
	/* AJOUTER IMAGE --------------------------------------- */
	$(document).on('click','.addlist', function(){	
				/* Aimation page --------------------------------------- */
				$('.addfile').css('display', 'block').animate({left:'+=300px'}, 150, 'linear');
				$('header').animate({left:'+=50px'}, 200, 'swing').animate({top:'+=20px'}, 200, 'swing');
				$('header').css('filter', 'blur(5px)').css('opacity', '0.5');

				$('footer').animate({left:'+=20px'}, 200, 'swing').animate({bottom:'-=20px'}, 200, 'swing');
				$('footer').css('filter', 'blur(5px)').css('opacity', '0.5');				
				/* Aimation (reinitialisation) --------------------------------------- */
				$(document).on('click','#closeAdd',function(){
					$('.addfile').css('display', 'none').css('left', '-300px');
					$('header').css('top', '0').css('left', '0');	
					$('header').css('filter', 'none').css('opacity', '1');							
					$('footer').css('left', '0').css('bottom', '0');	
					$('footer').css('filter', 'none').css('opacity', '1');									
				});
				/* Compteur enfants --------------------------------------- */
				var addnumber = $(this).parent().parent().children().each(function(index){
					addnumber+(index+1); /*Compter le nombre d'enfant dans la classe actuel*/	
				});	
				/* Si Enfants, alors reinitialiser les items --------------------------------------- */
				if(addnumber.length){
				    var listitem = $(addnumber).parent().parent().attr('class'); /*var addnumber cible le parent du parent du UL de la selection afin d'accéder à daily, weekly ou monthly*/	
						$('.'+listitem+' .icoaction').hide(); 	/*on reinitialises les icones une fois l'élement ajouter*/
						$('.'+listitem+' .rename-item').show();	/*** on initialise les icones pour remettre a zero */

						$('.'+listitem+' .icoaction1').hide(); 	/**/
						$('.'+listitem+' .delete-item').show();	/***/								
				} 	
				/* Ajouter un item --------------------------------------- */
					var chemin = $(this).parent().parent().parent().attr('class');

					var locationBoard = $(this).parent().parent().children().each(function(index){
						locationBoard + (index+1); /*Compter le nombre d'enfant dans la classe actuel*/	
					});	/* On compte pointe vers ul et compte les enfants en même temps*/	

				    if(locationBoard.length <= 5){ /* si les enfats de cette UL est inférieur ou égal au nombre, alors */
			    		// $(locationBoard).parent().prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');
					 var AjouterItem = function(element){					 	
				    	$(element).parent().prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');
				    	}
				    } else{
				    	// alert('Petit gourmand: \n' + 'Je n\'autorise pas plus de 5 icones !!!');
				    	return false;
				    }	
				/* Ajouter un item via une fonction --------------------------------------- */	
				$('#addimg').on('click', function(){
					AjouterItem(chemin);
				});					    			    
		//ATTENTION NE PAS SUPPRIMER CE CODE
		// var addnumber = $(this).parent().parent().children().each(function(index){
		// 	addnumber+(index+1); /*var addnumber cible le UL de la selection afin de créer un element dans son LI*/	
		// });	
		// 	if(addnumber.length <= 5){
		// 		var way = $(this).parent().parent().parent().attr('class').toUpperCase();
		// 		var siteTittle = 'My '+ way;
		// 		$(this).parent().parent().prepend('<li><a href="#"><img alt="image par défaut" src="img/default.png" class="animated zoomIn"></a><p>'+siteTittle+'</p><span>	<div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');
		// 	    var listitem = $(addnumber).parent().parent().attr('class'); /*var addnumber cible le parent du parent du UL de la selection afin d'accéder à daily, weekly ou monthly*/	
		// 			$('.'+listitem+' .icoaction').hide(); 	
		// 			$('.'+listitem+' .rename-item').show();	

		// 			$('.'+listitem+' .icoaction1').hide(); 	
		// 			$('.'+listitem+' .delete-item').show();									
		// 	} 	
		// 		else{
		// 			alert('Petit gourmand: \n' + 'Je n\'autorise pas plus de 5 icones !!!');
		// 		}			
	});	

	/* SUPPRIMER IMAGE --------------------------------------- */
	$(document).on('click','.icoaction', function(){
					var listItemDeleteListCounter = $(this).parent().parent().parent().children().each(function(index){
						listItemDeleteListCounter+(index+1);	
					}); /*var compter les enfants des ul donc li de daily, weekly ou monthly*/
						if(listItemDeleteListCounter){
							var listitemdeletelist = $(this).parent().parent().parent().parent().attr('class');
							$('.'+listitemdeletelist+' .rename-item').show();
							$('.'+listitemdeletelist+' .delete-item').show();	
						} else {
								return false
							}
					$(this).parent().parent().remove();							
	});
	/* EDITER IMAGE --------------------------------------- */
	$(document).on('click','.icoaction1', function(){
		alert('Action!');
	});
/*  ---------------------  FIN --------------------------------------- */									 
});