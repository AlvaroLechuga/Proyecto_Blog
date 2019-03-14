$(document).ready(function(){
	
	var colorTheme = localStorage.getItem("themeColor");
	var theme = $("#theme");

	// Uso del LocalStorage para almacenar el ultimo color seleccionado
	if(colorTheme == null){
		console.log("Por defecto");
	}else if(colorTheme == "green"){
		theme.attr("href", "css/green.css");
	}else if(colorTheme == "red"){
		theme.attr("href", "css/red.css");
	}else{
		theme.attr("href", "css/blue.css");
	}

	if(window.location.href.indexOf('index') > -1){
		// Slider
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
	  	});

	  	// Post

		var month = "Publicado el día: "+moment().format('D') +" de "+moment().format('MMMM') +" del "+moment().format('YYYY');

		var posts = [
			{
				title: 'Prueba de Titulo 1',
				date: month,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, nibh sit amet sollicitudin semper, metus enim malesuada tellus, eget euismod elit arcu sit amet nisl. Duis at dapibus velit. Donec nisi leo, rutrum quis porta sed, accumsan in quam. Cras quis nisl eget orci pharetra convallis et id sapien. Nullam malesuada posuere malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id orci turpis. Pellentesque venenatis in metus nec porta. Etiam nibh felis, vestibulum sed iaculis interdum, imperdiet in felis. Cras tempus non tellus ac consectetur. Aliquam sollicitudin a lorem egestas lacinia. Curabitur maximus consectetur justo sit amet porttitor. Donec et risus velit. Aenean pretium augue at mauris vulputate facilisis. Aenean rutrum urna a arcu vulputate, a molestie tellus accumsan. Curabitur finibus augue in consectetur iaculis. '
			},
			{
				title: 'Prueba de Titulo 2',
				date: month,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, nibh sit amet sollicitudin semper, metus enim malesuada tellus, eget euismod elit arcu sit amet nisl. Duis at dapibus velit. Donec nisi leo, rutrum quis porta sed, accumsan in quam. Cras quis nisl eget orci pharetra convallis et id sapien. Nullam malesuada posuere malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id orci turpis. Pellentesque venenatis in metus nec porta. Etiam nibh felis, vestibulum sed iaculis interdum, imperdiet in felis. Cras tempus non tellus ac consectetur. Aliquam sollicitudin a lorem egestas lacinia. Curabitur maximus consectetur justo sit amet porttitor. Donec et risus velit. Aenean pretium augue at mauris vulputate facilisis. Aenean rutrum urna a arcu vulputate, a molestie tellus accumsan. Curabitur finibus augue in consectetur iaculis. '
			},
			{
				title: 'Prueba de Titulo 3',
				date: month,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, nibh sit amet sollicitudin semper, metus enim malesuada tellus, eget euismod elit arcu sit amet nisl. Duis at dapibus velit. Donec nisi leo, rutrum quis porta sed, accumsan in quam. Cras quis nisl eget orci pharetra convallis et id sapien. Nullam malesuada posuere malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id orci turpis. Pellentesque venenatis in metus nec porta. Etiam nibh felis, vestibulum sed iaculis interdum, imperdiet in felis. Cras tempus non tellus ac consectetur. Aliquam sollicitudin a lorem egestas lacinia. Curabitur maximus consectetur justo sit amet porttitor. Donec et risus velit. Aenean pretium augue at mauris vulputate facilisis. Aenean rutrum urna a arcu vulputate, a molestie tellus accumsan. Curabitur finibus augue in consectetur iaculis. '
			},
			{
				title: 'Prueba de Titulo 4',
				date: month,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, nibh sit amet sollicitudin semper, metus enim malesuada tellus, eget euismod elit arcu sit amet nisl. Duis at dapibus velit. Donec nisi leo, rutrum quis porta sed, accumsan in quam. Cras quis nisl eget orci pharetra convallis et id sapien. Nullam malesuada posuere malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id orci turpis. Pellentesque venenatis in metus nec porta. Etiam nibh felis, vestibulum sed iaculis interdum, imperdiet in felis. Cras tempus non tellus ac consectetur. Aliquam sollicitudin a lorem egestas lacinia. Curabitur maximus consectetur justo sit amet porttitor. Donec et risus velit. Aenean pretium augue at mauris vulputate facilisis. Aenean rutrum urna a arcu vulputate, a molestie tellus accumsan. Curabitur finibus augue in consectetur iaculis. '
			},
			{
				title: 'Prueba de Titulo 5',
				date: month,
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius, nibh sit amet sollicitudin semper, metus enim malesuada tellus, eget euismod elit arcu sit amet nisl. Duis at dapibus velit. Donec nisi leo, rutrum quis porta sed, accumsan in quam. Cras quis nisl eget orci pharetra convallis et id sapien. Nullam malesuada posuere malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id orci turpis. Pellentesque venenatis in metus nec porta. Etiam nibh felis, vestibulum sed iaculis interdum, imperdiet in felis. Cras tempus non tellus ac consectetur. Aliquam sollicitudin a lorem egestas lacinia. Curabitur maximus consectetur justo sit amet porttitor. Donec et risus velit. Aenean pretium augue at mauris vulputate facilisis. Aenean rutrum urna a arcu vulputate, a molestie tellus accumsan. Curabitur finibus augue in consectetur iaculis. '
			},
		];
		
		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
					<a href="#" class="button-more">Leer Más</a>
				</article>
			`;
			$("#posts").append(post);
		});

	}


	// Selector de tema 
	$("#to-green").click(function(){
		localStorage.setItem("themeColor", "green");
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		localStorage.setItem("themeColor", "red");
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		localStorage.setItem("themeColor", "blue");
		theme.attr("href", "css/blue.css");
	});

	// Scroll hacia arriba

	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	console.log(form_name);

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.removeItem("form_name");
			location.reload();
		});
	}

	// Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	// Reloj
	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format('hh:mm:ss');
			$("#reloj").html(reloj);
		}, 1000);
	}

	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
});