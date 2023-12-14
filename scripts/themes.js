const footer = document.querySelector('.footer')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const navlink = document.querySelector('.navlink')
function dark()
{
	header.style.background ='black';
	header.style.transition = '1s';
	main.style.background ='#171717';
	main.style.transition = '1s';
	footer.style.background ='black';
	footer.style.transition = '1s';
}
function light()
{
    header.style.background =' #326285';
	header.style.transition = '1s';
	main.style.background ='#455c80';
	main.style.transition = '1s';
	footer.style.background ='#326285';
	footer.style.transition = '1s';
}