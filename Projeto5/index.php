<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<title>PROJETO 5</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="author" content="Antonio Sávio">
		<link rel="stylesheet" type="text/css" href="css/geral.css"><!-- Estilização dos elementos gerais -->

		<link rel="stylesheet" type="text/css" href="css/home.css">
		<link rel="stylesheet" type="text/css" href="css/venda.css">
		<link rel="stylesheet" type="text/css" href="css/galeria.css">
		<link rel="stylesheet" type="text/css" href="css/eventos.css">
		<link rel="stylesheet" type="text/css" href="css/sobre.css">

	</head>

	<body>

		<header class="header-principal">
			<div class="container-center">
				
				<div class="logo"></div><!-- logo -->

				<nav class="menu-desktop menu">
					<ul>
						<li><a href="home">HOME</a></li>
						<li><a href="venda">VENDA</a></li>
						<li><a href="galeria">GALERIA</a></li>
						<li><a href="eventos">EVENTOS</a></li>
						<li><a href="sobre">SOBRE NÓS</a></li>
						<li><a goto="contato" href="">CONTATO</a></li>
					</ul>
					<div class="clear"></div><!-- clear -->
				</nav><!-- menu-desktop -->

				<nav class="menu-mobile menu">
					<div class="menu-icone">
						<span></span>
						<span></span><!-- Esses dois serão transparentes -->
						<span></span>
						<span></span><!-- Esses dois serão transparentes -->
						<span></span>
					</div><!-- menu -->
					<div class="clear"></div>
					<ul>
						<li><a href="home">HOME</a></li>
						<li><a href="venda">VENDA</a></li>
						<li><a href="galeria">GALERIA</a></li>
						<li><a href="eventos">EVENTOS</a></li>
						<li><a href="sobre">SOBRE NÓS</a></li>
						<li><a goto="contato" href="">CONTATO</a></li>
					</ul>
				</nav><!-- menu-mobile -->

			</div><!-- container-center -->
		</header><!-- header-principal -->


<main>
	
	<?php

		if(  isset($_GET['url'])  ){	// Se o parametro está definido	 projeto5/algumaCoisa
			// echo $_SERVER['REQUEST_URI'];
			$url = $_GET['url'];
			// Se o arquivo existir, deixar o .html para ficar amigavel
			if(  file_exists($url.'.html')  ){
				include($url.'.html');
			
			// Se o arquivo não existir, incluir um arquivo de erro, que ja está na pasta
			}else{
				include('404.html');	
			};
		
		}else{	// Se o parametro não estiver definido, tipo projeto5/
			include('home.html');
		};
	?>

</main>

		<footer class="footer-principal">
			<div class="container-center">
				
				<nav class="menu-desktop menu">
					<ul>
						<li><a href="home">HOME</a></li>
						<li><a href="venda">VENDA</a></li>
						<li><a href="galeria">GALERIA</a></li>
						<li><a href="eventos">EVENTOS</a></li>
						<li><a href="sobre">SOBRE NÓS</a></li>
						<li><a goto="contato" href="">CONTATO</a></li>
					</ul>
				</nav><!-- menu-desktop -->

				<div class="direitos">
					<p>Todos os direitos reservados à <span>RM Veículos Especiais</span></p>
				</div><!-- direitos -->

				<div class="clear"></div><!-- clear -->

			</div><!-- container-center -->
		</footer><!-- footer-principal -->


		<script src="js/jquery.js"></script>
		<script src="js/geral.js"></script>

		<script src="js/home.js"></script>
		<script src="js/venda.js"></script>
		<script src="js/galeria.js"></script>
		<script src="js/eventos.js"></script>
	</body>
</html>