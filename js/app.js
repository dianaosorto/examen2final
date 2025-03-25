// Dom7
var $$ = Dom7;

// Init App (solo una vez)
var app = new Framework7({
  id: 'com.noirbag.app',
  name: 'NOIRBAG',
  root: '#app',
  theme: 'md',
  view: {
    pushState: true
  },
  panel: {
    swipe: true
  },
  routes: [
    {
      path: '/',
      url: 'index.html',
      name: 'home'
    },
    {
      path: '/info/',
      url: 'info.html',
      name: 'info'
    },
    {
      path: '/perfil/',
      url: 'perfil.html',
      name: 'perfil'
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
      path: '/categorias/',
      url: 'categorias.html',
      name: 'categorias'
    }
  ],
  dialog: {
    title: 'NOIRBAG',
    buttonOk: 'Aceptar'
  },
  popup: {
    closeOnEscape: true,
    backdrop: false
  },
  sheet: {
    closeOnEscape: true
  },
  popover: {
    closeOnEscape: true
  },
  actions: {
    closeOnEscape: true
  }
});


// Botón de login (si aplica)
$$('#btnLogin').on('click', function (e) {
  e.preventDefault();
  var $valid = $$('#form-login')[0].checkValidity();
  if ($valid) {
    $$('#form-login').trigger('reset');
    app.loginScreen.close('#modal-login');
    app.dialog.alert('¡ Bienvenido a la APP !');
  }
});

// Agregar al carrito
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.add-to-cart-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      app.dialog.alert('¡Producto agregado al carrito!', 'NOIRBAG');
    });
  }
});

// Checkout
$$(document).on('click', '#btnCheckout', function (e) {
  e.preventDefault();
  app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
    var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      subtitle: '',
      text: 'Your order has been received.',
      closeTimeout: 3000
    });
    notification.open();
  });
});
