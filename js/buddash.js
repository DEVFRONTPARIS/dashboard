
$(function(){	
// localStorage.clear(); 	
									 /***********************************************
								   	  			       Bienvenue :)
									 ***********************************************/	

    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();



	// initialisation de variables --------------------------------------- 	
	var maxId = 0;	
		// pret pour compter élements stocker (set)	si stocké, on enregistre !
	var maxId = localStorage.getItem('maxId'); /** on recupère notre max Id et on verifie si un element existait sinon il le met a zéro**/
	for(i = 1; i <= maxId; i++){
		var site = localStorage.getItem(i); // numéro ID site,name,url qu'on spli et recupere via un tableau
		var site = site.split(','); //Valeurs Setter VALUES
		var siteName= site[0]; // SITE NAME
		var siteURL= site[1]; // URL
		var locationBoard = site[2]; // Cible puis, -> dernière ligne on enregistre via localstorage car en premier c'estait l'affichage ici on enregistre l'élément afficher !
		$('.'+locationBoard+' ul').prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');	
	}					
									 /*****************************************
									   BOUTTONS EDITER ET SUPPRIMER UNE IMAGE 
									 ****************************************/	
	// Supprimer --------------------------------------- 
$('.delete-item').on('click', function(){
	var list = $(this).parent().parent().parent().attr('class'); //var list trouve la class du parent daily weekly ou monthly
	if ($('.'+list+' .icoaction').display == 'inline-block' || 'block') {
		$('.'+list+' .delete-item').show();
		$('.'+list+' .rename-item').show();
		$('.'+list+' .icoaction').toggle('.display-none'); 	
		var deleteison = true;
	} else{
		return false
	}									
}); // au clic sur la petite corbeille, cache moi le crayon & fait apparaitre l'icone supprimer sur l'élément 
	// Editer --------------------------------------- 
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
});// au clic sur le petit crayon, cache moi la poubelle & fait apparaitre l'icone editer sur l'élément 
//  ---------------------  FIN --------------------------------------- 
									 /***********************************************
								   	   ACTIONS ICONES EDITER ET SUPPRIMER UN ITEM 
									 ***********************************************/
	// AJOUTER IMAGE --------------------------------------- 
	var locationBoard;
	$(document).on('click','.addlist',function(){
		// Aimation page --------------------------------------- 
		$('.addfile').css('display', 'block').animate({left:'+=300px'}, 150, 'linear');
		$('header').animate({left:'+=50px'}, 200, 'swing').animate({top:'+=20px'}, 200, 'swing').css('filter', 'blur(5px)').css('opacity', '0.5');
		$('footer').animate({left:'+=20px'}, 200, 'swing').animate({bottom:'-=20px'}, 200, 'swing').css('filter', 'blur(5px)').css('opacity', '0.5');
		// Aimation (reinitialisation) --------------------------------------- 
		$(document).on('click','#closeAdd',function(){
			$('.addfile').css('display', 'none').css('left', '-300px');
			$('header').css('top', '0').css('left', '0').css('filter', 'none').css('opacity', '1');	
			$('footer').css('left', '0').css('bottom', '0').css('filter', 'none').css('opacity', '1');	
		});	
		// Ajouter un item --------------------------------------- 
		locationBoard = $(this).parent().parent().children().each(function(index){
			locationBoard + (index+1); /*Compter le nombre d'enfant dans la classe actuel*/	
		});	// On compte pointe vers ul et compte les enfants en même temps	
	});

	$(document).on('click','#addimg', function(){	
				 // Les variables déclarées au chargement l'évènement --------------------------------------- 					
					var siteName = $('#site-name').val(),
						siteURL = $('#site-url').val();		
				 // a chaque clique Maxid prend la valeur +1 car chaque clique = un élément
					maxId++;
					var monbloc = locationBoard.parent().parent().attr('class'); // Affiche Daily Weekly Monthly (repertoire)
				 // Si max ID n'existe pas, alors sa valeur est remis à zero
					if(!maxId){
						maxId = 0;
					}														
				    if(locationBoard.length <= 5){ // si les enfats de cette UL est inférieur ou égal au nombre, alors 
				  		// Ajout Clé et valeurs d'une nouvelle donnée dans le local storage
						localStorage.setItem(maxId, siteName+','+siteURL+','+monbloc); // Valeurs nom site etc
						localStorage.setItem('maxId',maxId); // Mise du compteur des clés (Total)						
				    	$(locationBoard).parent().prepend('<li><a href="'+siteURL+'"><img alt="'+siteURL+' "src="http://logo.clearbit.com/'+siteURL+'" class="animated zoomIn"></a><p>'+siteName+'</p><span> <div class="icoaction"><a id="delete-it" href="#"><img alt="trash" src="img/delitem.png"></a> </div> <div class="icoaction1"><a id="edit-it" href="#"><img alt="trash" src="img/edititem.png"></a> </div> </span> </li>');
						$('#logo-preview').attr({ src: 'http://logo.clearbit.com/'+siteURL, alt: 'Logo URL'});			     													    	
				    } else{
				    	// alert('Petit gourmand: \n' + 'Je n\'autorise pas plus de 5 icones !!!');
				    	return false
				    }							
	});	
	// SUPPRIMER IMAGE --------------------------------------- 
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
					var maxId = localStorage.getItem('maxId');
					alert(maxId);
					maxId-localStorage; //TOTAL LISTE on lui dit enlève le dernier element dans le tableau	
					alert(maxId);				
					localStorage.setItem('maxId',maxId-1); // Mise à jour du maxid on lui dit enlève un chiffre du total  car un element viens d'être supprimer !	
					localStorage.removeItem(maxId); // on peut supprimer le bon id 

	});
	// EDITER IMAGE --------------------------------------- 
	$(document).on('click','.icoaction1', function(){
		alert('Action!');
	});

	// Au clic sur le logo buddash --------------------------------------- 
$('.bloc-left').on('click', function(){
	$('.home-menu').css('display','block').animate({left: '10px'}, 200, 'swing');
	$('#logo-buddash').animate({top: '15px'}, 200, 'swing');
	$('.bloc-rigth').animate({left: '300px'}, 200, 'swing');
	$('.home-menu-1').css('display', 'none');	
	$(document).off('click', '.addlist'); // on desactive l'action su les autres évènement
	$(document).off('click', '.icoaction'); // on desactive l'action su les autres évènement
	$(document).off('click', '.icoaction1'); // on desactive l'action su les autres évènement
});
			$('.bloc-left').on('dblclick', function(){
			$('.home-menu').css('display','none').animate({left: '-10px'}, 200, 'swing');
			$('#logo-buddash').animate({top: '40%'}, 200, 'swing');
			$('.bloc-rigth').animate({left: '130'}, 200, 'swing');
			$('.home-menu-1').css('display', 'none');
});


	$('.home-menu-color-2').on('click', function(){
		$('.home-menu-1').css('display', 'block');
		$('.home-menu').css('display','none');
	});

			$('.color-0').on('click', function(){
				$('body').removeClass('color-1 color-2 color-3 color-4 color-5').addClass('color-0');
			});
			$('.color-1').on('click', function(){
				$('body').removeClass('color-0 color-2 color-3 color-4 color-5').addClass('color-1');
			});
			$('.color-2').on('click', function(){
				$('body').removeClass('color-0 color-1 color-3 color-4 color-5').addClass('color-2');
			});						
			$('.color-3').on('click', function(){
				$('body').removeClass('color-0 color-1 color-4 color-5').addClass('color-3');
			});
			$('.color-4').on('click', function(){
				$('body').removeClass('color-0 color-1 color-2 color-3 color-5').addClass('color-4');
			});
			$('.color-5').on('click', function(){
				$('body').removeClass('color-0 color-1 color-2 color-3 color-4').addClass('color-5');
			});	

			$('.remove-theme').on('click', function(){
				$('.home-menu').css('display','block');				
				$('.home-menu-1').css('display', 'none');
			});	


});
//  ---------------------  FIN --------------------------------------- 								 


