$(function(){

	// 	CLASSE SLIDER
	var Slider = function(  section  ){

		this.sWindow = 	section.find('.slider-window');
		this.sDraggable = section.find('.slider-draggable');
		this.sWrapper = section.find('.slider-wrapper');
		this.sSingle = 	section.find('.slider-single');

		this.rows = 1;
		this.quantSlides = this.sSingle.length;
	};

	// Métodos da classe ============================================================================

	Slider.prototype.reiniciarSlider = function(){
		
	};

	// Define a largura de cada slide e da grupo de slides
	// slidesShow - Quantidade de slides visiveis por linha
	// rows - Quantidade de linhas do Slider
	Slider.prototype.setWidth = function(  slidesShow  ){


		let sWrapperWidth = (this.quantSlides * 100) / (this.rows * slidesShow);
		let sSingleWidth = 	(100 / this.quantSlides) * this.rows;

		// Caso seja definido uma margin para cada elemento do slider
		// Splitar e pegar o valor depois converter parar number
		let marginL = +this.sSingle.css('marginLeft').split('px')[0];
		let marginR = +this.sSingle.css('marginRight').split('px')[0];
		let marginElemento = marginL + marginR;

		// Utilizando a função calc do css para somar % com px
		this.sWrapper.css('width', sWrapperWidth + '%');
		this.sSingle.css('width',  'calc(' + sSingleWidth + '% - ' + marginElemento + 'px');

	};


	// Trabalhar melhor isso aqui
	Slider.prototype.infinite = function(){

		this.sWrapper.append(  this.sSingle.eq(0)  );
		this.sWrapper.prepend(  this.sSingle.eq(this.quantSlides-1)  );
		console.log(this.sSingle.eq(0));
	};


	// Arrastar o slider, USA EVENTO DE MOUSE, TEM QUE CORRIGIR PARA CELULARES
	Slider.prototype.draggable = function(){

		let isDrag = false;
		let mousePos;
		let sWindowScrollX;
		let sWindow = this.sWindow;

		this.sDraggable.on({

			'mousemove': function(e){
				if(  isDrag  ){
					sWindow.scrollLeft(   sWindowScrollX + (mousePos - e.pageX)  );
				}
			},

			// Ao clicar com o mouse pega posição do mesmo no momento do click e a posição do scroll
			'mousedown': function(e){
				isDrag = true;
				mousePos = e.pageX;
				sWindowScrollX = sWindow.scrollLeft();
			},

			'mouseup': function(){
				isDrag = false;
			},

			'mouseleave': function(){
				isDrag = false;
			},
		});
	};

	// ==========================================================================================

	var sectionGaleriaPrincipal = $('#sectionGaleriaPrincipal');
	var sectionTratamentos = $('#sectionTratamentos');
	var sectionDepoimentos = $('#sectionDepoimentos');
	var sectionGaleriaSecundaria = $('#sectionGaleriaSecundaria');

	// Instanciando os objetos
	var sliderGaleriaPrincipal = 	new Slider(  sectionGaleriaPrincipal  );
	var sliderTratamentos = 		new Slider(  sectionTratamentos  );
	var slidertDepoimentos = 		new Slider(  sectionDepoimentos  );
	var sliderGaleriaSecundaria = 	new Slider(  sectionGaleriaSecundaria  );

	// Efeito de arrastar
	sliderGaleriaPrincipal.draggable();
	sliderTratamentos.draggable();
	slidertDepoimentos.draggable();
	sliderGaleriaSecundaria.draggable();

	sliderGaleriaPrincipal.rows = 2;

	slidertDepoimentos.setWidth(1); // Não sofrerá efeito do responsivo

	// Função para lidar com responsivo
	function resizeWindow(){

		let window_width = $(window).outerWidth();

		// Tela acima de 992px
		if(  window_width >= 992  ){

			sliderGaleriaPrincipal.setWidth(  5  );
			sliderTratamentos.setWidth(3);
			sliderGaleriaSecundaria.setWidth(7);

		// Tela acima de 768px
		} else if(  window_width >= 768  ){
			
			sliderGaleriaPrincipal.setWidth(  4  );
			sliderGaleriaSecundaria.setWidth(6);

		// Tela acima de 576px
		} else if( window_width >= 576  ){
			
			sliderTratamentos.setWidth(2);
			sliderGaleriaSecundaria.setWidth(5);
		
		// Tela acima de 360px
		} else if(  window_width >= 360  ){
			sliderGaleriaPrincipal.setWidth(  3  );
			sliderTratamentos.setWidth(1);
			sliderGaleriaSecundaria.setWidth(4);

		// Telas MENORES que 360px
		} else{
			sliderGaleriaPrincipal.setWidth(  2  );
			sliderGaleriaSecundaria.setWidth(3);
		}
	};

	$(window).resize(function(){
		resizeWindow();
	});

	resizeWindow();


});
