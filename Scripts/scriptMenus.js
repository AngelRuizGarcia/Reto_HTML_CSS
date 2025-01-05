function openMenu(menuId) {
  document.querySelector(`#menu${menuId}`).style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}

function closeMenu() {
  document.querySelectorAll('.mini-menu').forEach(menu => menu.style.display = 'none');
  document.querySelector('.overlay').style.display = 'none';
}

function comprar() {
  const url = window.location.pathname;
  let mensaje = '';


  if (url.includes("pizzas.html")) {
      mensaje = "Pizza añadida al carrito de forma correcta!";
  } else if (url.includes("bebidas.html")) {
      mensaje = "Bebida añadida al carrito de forma correcta";
  } else if (url.includes("pasteles.html")) {
      mensaje = "Pastel añadido al carrito de forma correcta!";
  } else if (url.includes("pan.html")) {
      mensaje = "Pan añadido al carrito de forma correcta";
  } else {
      mensaje = "Error";
  }

  alert(mensaje);
  closeMenu();
}
