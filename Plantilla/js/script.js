var loadHeader = function(callback) {
	$("header").load('header.html');
}

var loadFooter = function() {
	$("footer").load('footer.html');
}

loadHeader();
loadFooter();


$("#btnUpdate1").click(function() {
	$('.guardar1').css('display', 'block');
	$('.guardar2').css('display', 'none');
	$('.guardar3').css('display', 'none');
});

$("#btnUpdate2").click(function() {
  populares = $('#inputPopulares').prop('checked');
  favoritos = $('#inputFavoritos').prop('checked');
  categorias = $('#inputCategorias').prop('checked');
  recomendados = $('#inputRecomendados').prop('checked');

  localStorage.removeItem('populares');
  localStorage.removeItem('favoritos');
  localStorage.removeItem('categorias');
  localStorage.removeItem('recomendados');

  localStorage.setItem("populares", populares);
  localStorage.setItem("favoritos", favoritos);
  localStorage.setItem("categorias", categorias);
  localStorage.setItem("recomendados", recomendados);
  	
  $('.guardar1').css('display', 'none');
  $('.guardar2').css('display', 'block');
  $('.guardar3').css('display', 'none');
  //window.location.replace("http://localhost:9000/Plantilla/index.html");	

});

$("#btnUpdate3").click(function() {
	$('.guardar1').css('display', 'none');
	$('.guardar2').css('display', 'none');
	$('.guardar3').css('display', 'block');
});