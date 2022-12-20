let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmiddle');
let navbar2 = document.querySelector('.navright');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	navbar2.classList.toggle('open2');
}