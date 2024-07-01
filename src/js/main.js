const navItems = document.querySelector(".nav-items");
const menuBtn = document.querySelector(".menu-btn");
const navLink = document.querySelectorAll(".link");
const footerYear = document.querySelector(".footer-year");
const handleNav = () => {
	navItems.classList.toggle("active-nav");
};

navLink.forEach((link) => {
	link.addEventListener("click", () => {
		navItems.classList.remove("active-nav");
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
menuBtn.addEventListener("click", handleNav);
