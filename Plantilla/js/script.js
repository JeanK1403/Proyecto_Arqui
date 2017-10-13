var loadHeader = function() {
	$("header").load('header.html');
}

var loadFooter = function() {
	$("footer").load('footer.html');
}
loadHeader();
loadFooter();


$("#btnUpdate").click(function() {
  recomendados = $('#inputRecomendados').prop('checked');

  //if(!recomendados){
   //$(".prueba").css("display","none")
 // }

 

});