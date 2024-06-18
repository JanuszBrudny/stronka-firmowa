const navItems = document.querySelector(".nav-items");
const menuBtn = document.querySelector(".menu-btn");

const handleNav = () => {
	navItems.classList.toggle("active-nav");
};

menuBtn.addEventListener("click", handleNav);
