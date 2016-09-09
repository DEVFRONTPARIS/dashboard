
$(function(){	
// localStorage.clear(); 	
									 /***********************************************
								   	  			       Bienvenue :)
									 ***********************************************/		
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

	/* initialisation de variables --------------------------------------- */	
	var maxId = 0;	
	var maxId = localStorage.getItem('maxId'); /**on recupère notre max Id et on verifie si un element existait sinon il le met a zéro**/
	for(i = 1; i <= maxId; i++){
		var site = localStorage.getItem(i);
		var site = site.split(',');
		var siteName= site[0];
		var siteURL= site[1];
		var locationBoard = site[2];
		$('.'+locationBoard+' ul').prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');	
	}					
									 /*****************************************
									   BOUTTONS EDITER ET SUPPRIMER UNE IMAGE 
									 ****************************************/	
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
});/* au clic sur le petit crayon, cache moi la poubelle & fait apparaitre l'icone editer sur l'élément */
/*  ---------------------  FIN --------------------------------------- */

									 /***********************************************
								   	   ACTIONS ICONES EDITER ET SUPPRIMER UN ITEM 
									 ***********************************************/

	/* AJOUTER IMAGE --------------------------------------- */
	var locationBoard;
	$(document).on('click','.addlist',function(){
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
		/* Ajouter un item --------------------------------------- */
		locationBoard = $(this).parent().parent().children().each(function(index){
			locationBoard + (index+1); /*Compter le nombre d'enfant dans la classe actuel*/	
		});	/* On compte pointe vers ul et compte les enfants en même temps*/	
	});

	$(document).on('click','#addimg', function(){	
				 /* Les variables déclarées au chargement l'évènement --------------------------------------- 	*/				
					var siteName = $('#site-name').val(),
						siteURL = $('#site-url').val();					
				 /*    	 Incrémentation de maxID = 1,2,3 etc.--------------------------------------- */
					maxId++;
					var monbloc = (locationBoard).parent().parent().attr('class');
				 /*    	 Si max ID existe pas, alors sa valeur est à 0---------------------------------------  */ 
					if(!maxId){
						maxId = 0;
					}														
				    if(locationBoard.length <= 5){ // si les enfats de cette UL est inférieur ou égal au nombre, alors 
				  /*   	 Declaration de variables en local storage--------------------------------------- */
						localStorage.setItem(maxId, siteName+','+siteURL+','+monbloc);
						localStorage.setItem('maxId',maxId); /*mise a jour de l'element max id compteur*/						
				    	$(locationBoard).parent().prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');
				    } else{
				    	// alert('Petit gourmand: \n' + 'Je n\'autorise pas plus de 5 icones !!!');
				    	return false
				    }							
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
						
					var maxId = localStorage.getItem('maxId'); /**on recupère notre max Id et on verifie si un element existait sinon il le met a zéro**/					
				    localStorage.removeItem('maxId'); 		
	});
	/* EDITER IMAGE --------------------------------------- */
	$(document).on('click','.icoaction1', function(){
		alert('Action!');
	});
});
/*  ---------------------  FIN --------------------------------------- */									 
