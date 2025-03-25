var app = new Framework7({
  root: '#app',
  name: 'NOIRBAG',
  id: 'com.noirbag.app',
  theme: 'md',
  view: {
    pushState: true,
  },
  routes: [
    {
      path: '/home/',
      url: 'index.html',
      name: 'home'
    },
    {
      path: '/categorias/',
      url: 'categorias.html',
      name: 'categorias'
    },
    {
      path: '/favoritos/',
      url: 'favoritos.html',
      name: 'favoritos'
    },
    {
      path: '/locales/',
      url: 'locales.html',
      name: 'locales'
    },
    {
      path: '/perfil/',
      url: 'perfil.html',
      name: 'perfil'
    },
      
      {
  path: '/info/',
  url: 'info.html',
  name: 'info'
}


  ],
  panel: {
    swipe: true,
  },
  dialog: {
    title: 'NOIRBAG',
    buttonOk: 'Aceptar'
  },
  popup: {
    closeOnEscape: true,
    backdrop: false
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  }
});

// Alerta para botón de carrito en info.html
$(document).on('click', '.add-to-cart-btn', function () {
  app.dialog.alert('¡Producto agregado al carrito!', 'NOIRBAG');
});
