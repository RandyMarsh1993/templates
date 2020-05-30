burger.onclick =  function activateBurger() {
	let burger = document.getElementById("burger");
	let menu = document.getElementById("header-nav");

	burger.classList.toggle("burger_active");
	menu.classList.toggle("burger_active");

	/* первый вариант

	if (burger.className === "header__burger") {
		burger.className += " active";
	} else {
		burger.className = "header__burger";
	}
	if (menu.className === "header-nav") {
		menu.className += " active";
	} else {
		menu.className = "header-nav";
	}
	*/
}

infoToggle.onclick = function showInfo() {

	let toggle = document.getElementById("infoToggle");
	let icon = document.getElementById("info-icon");
	let info_1 = document.getElementById("info_1");
	let info_2 = document.getElementById("info_2");
	let info_3 = document.getElementById("info_3");

	toggle.classList.toggle("info_active");
	icon.classList.toggle("info_active");
	info_1.classList.toggle("info_active");
	info_2.classList.toggle("info_active");
	info_3.classList.toggle("info_active");
}

socLinksToggle.onclick = function showIcons() {
	let socialIcon = document.getElementById("socialIcon");
	let socialLinks = document.getElementById("socialLinks");

	socialIcon.classList.toggle("social_active");
	socialLinks.classList.toggle("social_active");
}