function openMenu(menuId) {
    document.querySelector(`#menu${menuId}`).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  }

  function closeMenu() {
    document.querySelectorAll('.mini-menu').forEach(menu => menu.style.display = 'none');
    document.querySelector('.overlay').style.display = 'none';
  }

  function comprar() {
    alert("Pizza añadida al carrito!");
    closeMenu();
  }