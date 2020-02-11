$(function(){

	// Tirar a diferença da altura do menu fixo
	var sessaoMenu = $('.section-menu-navegacao');
	var alturaMenu = sessaoMenu.outerHeight();

	$('main').css('top',  alturaMenu+'px');
	$('body').attr('data-offset', alturaMenu);

	
	var homeOffY = $('#home').offset().top;
	var sobreOffY = $('#sobre').offset().top;
	var diferenciaisOffY = $('#diferenciais').offset().top;	
	var contatoOffY = $('#contato').offset().top;
	// Pesquisar pq atualizar com ctrl+f5 é diferente de f5

	function scrollTela(){

		sessaoMenu.find('a').click(function(e){

			e.preventDefault();


			if(  getHref($(this)) == '#home'  ){
				scrollPagina(homeOffY);

			} else if(  getHref($(this)) == '#sobre'  ){
				scrollPagina(sobreOffY);

			} else if(  getHref($(this)) == '#diferenciais'  ){
				scrollPagina(diferenciaisOffY);
				
			}else if(  getHref($(this)) == '#contato'  ){
				scrollPagina(contatoOffY);
				
			}

		});
	};


	function getHref(  el  ){
		return el.attr('href');
	};


	function scrollPagina(  offY  ){

		let pagina = $('html, body');
		pagina.animate({
			'scrollTop': offY - alturaMenu,
		},1000)
	};

	scrollTela();

})