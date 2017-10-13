
$(document).ready(function (){

	$("#openNav").click(function(){
		openNav();
	});

	$("#closeNav").click(function(){
		closeNav();
	});

	$("#categories").click(function(){
		openCategories();
	});

	$("#man").click(function(){
		openMan();
	});

	$("#woman").click(function(){
		openWoman();
	});

	$("#niño").click(function(){
		openNiño();
	});

	$("#niña").click(function(){
		openNiña();
	});

	$(".view").click(function(){
		loadPage();
	});

});

// NAVBAR
var openNav = function() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

var closeNav = function () {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

var cont = true;
var openCategories = function() {
	if(cont){
    	$('#listCategories').removeClass().addClass('display');
    	cont = false;
    } else {
    	$('#listCategories').removeClass().addClass('oculto');
    	cont = true;
    }
}

var cont2 = true;
var openMan = function() {
	if(cont2){
    	$('#listMan').removeClass().addClass('display');
    	cont2 = false;
    } else {
    	$('#listMan').removeClass().addClass('oculto');
    	cont2 = true;
    }
}

var cont3 = true;
var openWoman = function() {
	if(cont3){
    	$('#listWoman').removeClass().addClass('display');
    	cont3 = false;
    } else {
    	$('#listWoman').removeClass().addClass('oculto');
    	cont3 = true;
    }
}

var cont4 = true;
var openNiño = function() {
	if(cont4){
    	$('#listNiño').removeClass().addClass('display');
    	cont4 = false;
    } else {
    	$('#listNiño').removeClass().addClass('oculto');
    	cont4 = true;
    }
}

var cont5 = true;
var openNiña = function() {
	if(cont5){
    	$('#listNiña').removeClass().addClass('display');
    	cont5 = false;
    } else {
    	$('#listNiña').removeClass().addClass('oculto');
    	cont5 = true;
    }
}



