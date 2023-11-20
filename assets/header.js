const btn = document.getElementById('nav-link-dropdown-btn');
const dropDownMenu = document.getElementById('nav-link-dropdown-box');

function toggleDropdown() {
   dropDownMenu.classList.toggle('hidden');
   dropDownMenu.classList.toggle('absolute');
}

btn.addEventListener('click', toggleDropdown);
