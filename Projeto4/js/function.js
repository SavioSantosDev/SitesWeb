$(function(){

	// TRABALHAR MELHOR PRA NÃO DAR CONFLITO COM A OUTRA GALERIA
	function iniciarSliderGaleria(){
		let slider = $('.slider-mosaico');
		let imgsWrapper = $('.imgs-wrapper');
		let img = $('.img');
		let sliderOffX = 0;

		// Sempre que redimensionar a tela reiniciar o slider
		$(window).resize(function(){
			sliderOffX = 0;
			slider.animate({
				'scrollLeft': sliderOffX,
			},100);
		});

		function galeriaSlider(){

			if(  sliderOffX >= imgsWrapper.outerWidth() - slider.outerWidth()  )
				sliderOffX = 0;
			else{
				sliderOffX += Math.round(img.width());
			}
			
			slider.animate({
				'scrollLeft': sliderOffX,
			},1000);
			console.log(sliderOffX);
		};

	}; // SLIDER GALERIA


	function iniciarSliderTratamentos(){

		let tratamentoSlider = $('.tratamento-slider');
		let tratamentoRow = tratamentoSlider.find('.row');
		let tratamentosWrapper = $('.tratamentos-wrapper');
		let sliderOffX = 0;

		// Reiniciar o slider
		$(window).resize(function(){
			sliderOffX = 0;
			tratamentoSlider.animate({
				'scrollLeft': sliderOffX,
			});
		});


		function tratamentoSliders(){

			if(  sliderOffX >= tratamentoRow.outerWidth() - tratamentoSlider.outerWidth()  )
				sliderOffX = 0;
			else{
				sliderOffX += Math.round(tratamentosWrapper.outerWidth());
			}
			
			tratamentoSlider.animate({
				'scrollLeft': sliderOffX,
			},1000);
		};
	};


	function iniciarSliderDepoimentos(){

		let sliderDepoimentos = $('.depoimentos-slider');
		let depoimentosWrapper = $('.depoimentos-wrapper');
		let depoimento = $('.depoimento');
		let quantDepoimentos = depoimento.length;
		let depoimentoAtual = 0;

		depoimentosWrapper.css('width', (100 * quantDepoimentos) + '%');
		depoimento.css('width', '100%');

		$(window).resize(function(){
			depoimentoAtual = 0;
			sliderDepoimentos.animate({
				'scrollLeft': depoimentoAtual,
			});
		});

		function depoimentosSlider(){

			if(  depoimentoAtual >= (depoimentosWrapper.outerWidth() - sliderDepoimentos.outerWidth())  ){
				depoimentoAtual = 0;
			
			} else{
				depoimentoAtual += depoimento.outerWidth();
			};

			console.log(depoimentoAtual);
			sliderDepoimentos.animate({
				'scrollLeft': depoimentoAtual,
			}, 1000);
		};

		$('body').click(function(){
			depoimentosSlider();
		});

	};

	iniciarSliderDepoimentos();
	iniciarSliderTratamentos();
	iniciarSliderGaleria();


})