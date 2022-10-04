const navTab = document.querySelectorAll('.js-nav-tabs li a');
const card = document.querySelectorAll('.js-card');

navTab.forEach((tab, index) => {
	tab.addEventListener('click', event => {
		event.preventDefault();
		navTab.forEach(itemNav => {
			itemNav.classList.remove('active');
		});
		card.forEach(itemCard => {
			itemCard.classList.remove('active');
		});

		card[index].classList.add('active');
	});
});
