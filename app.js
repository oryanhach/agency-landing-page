const btn = document.getElementById('menu-btn')
const nav = document.querySelector('.header__nav')

btn.addEventListener('click', () => {
	nav.classList.toggle('is-open')
	const open = nav.classList.contains('is-open')
})
