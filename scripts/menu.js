document.addEventListener('DOMContentLoaded' , function () {
	document.querySelector('.btn-menu').addEventListener('click',function(){
		document.querySelector('.menu').classList.toggle('is-active');
	});
});

//addEventListener(событие,реакция)
//querySelector - обращение к элементу по классу или id