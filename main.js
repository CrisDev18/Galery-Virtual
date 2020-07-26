(function(){
	$("#moon").click(function(){
		$("body").toggleClass('dark');
	});
	$("#sun").click(function(){
		$("body").toggleClass('light');
	});
}())
var sun=document.getElementById("sun");
const fotos=document.getElementById("fotos");
Sortable.create(fotos, {});