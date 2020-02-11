window.onload = function(){

	// lat: -12.98147498, lng: -38.51454735 - SALVADOR
	// lat: -14.850347, lng: -40.844363 - CONQUISTA
	// lat: -27.648, lng: -48.577423 - FLORIPA

	var mapa;

	// Inicializa o mapa em vitoria da conquista
	function inicializarMapa(){

		let mapaPropriedades = {

			center: {lat: -14.850347, lng: -40.844363},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 12
		}

		mapa = new google.maps.Map(  document.getElementById("mapa"),mapaPropriedades );
	}// incializar mapa

	function addMarcador(  mapa, latitude, longitude, conteudo  ){

		let marcador = {};	// O marcador dentro do mapa
		let conteudoMarcador = {};	// O conteudo que ficará sobre o marcador

		// Criando o marcador
		marcador = new google.maps.Marker({

			animation: google.maps.Animation.DROP, // Tem o BOUNCE, fica pulando
			position: {lat: latitude, lng: longitude},
			title: "Olá Mundo!",
			map: mapa,
		});

		// Criando o conteudo do marcador
		conteudoMarcador = new google.maps.InfoWindow({
			content: conteudo,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,20),
		})

		// Ao clicar no marcador irá se abir uma caixa de texto com o conteudo
		google.maps.event.addListener( marcador, 'click', function(){
			conteudoMarcador.open(  mapa, marcador  );
		})


	}

	inicializarMapa();

	// O conteudo pode ser um código em HTML
	var conteudo = "<p style='padding: 10px; border-bottom: 1px solid black; color: black'>Meu Marcador</p>";
	addMarcador( mapa, -14.850347, -40.844363, conteudo );

	// mapa.panTo({lat: -12.98147498, lng: -38.51454735});
	setTimeout(function(){
		mapa.setZoom(13);
	}, 4000);


	/// SCROLL
	var linkMenu = $('.menu a');
	var pagina = $('html, body');

	linkMenu.click(function(e){
		e.preventDefault();

		if(  $(this).attr('goto') == 'servicos'  ){
			pagina.animate({
				'scrollTop': $('#servicos').offset().top,
			})
		
		}else if(  $(this).attr('goto') == 'sobre'  ){
			pagina.animate({
				'scrollTop': $('#sobre').offset().top,
			})
		
		}else if(  $(this).attr('goto') == 'contato'  ){
			pagina.animate({
				'scrollTop': $('#contato').offset().top,
			})
		}
	})

}