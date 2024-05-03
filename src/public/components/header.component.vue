<script>
export default {
  name: "header-component",
  mounted() {
    // Asegúrate de que este código se ejecute después de que el componente se haya montado en el DOM
    document.body.classList.add('bg-red')
    document.body.classList.remove('one')

    console.log(document.body.classList)

    // querySelector
    const btnOpen = document.querySelector('.btn--open')
    const btnClose = document.querySelector('.btn--close')
    const navMenu = document.querySelector('.nav__menu')
    console.log(btnOpen)

    // Agregar evento por propiedad
    btnOpen.onclick = function () {
      // navMenu.classList.add('show--menu')
      navMenu.classList.toggle('show--menu')
    }

    btnClose.onclick = function () {
      navMenu.classList.remove('show--menu')
    }
    const links = document.querySelectorAll('.nav__link')

    for (const link of links) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('show--menu')
      })
    }
  }
}
</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PeruVentura</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link href="./output.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="assents/CSS/Styles.css">
    <!-- Meta Tags SEO -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Welcome to PeruVentura! Discover Peru in an authentic way with unique experiences with local communities. Join us for unforgettable moments and make a positive impact on your journey through Peru.">
    <meta name="keywords" content="Peru, travel, experiences, local communities, adventure, culture">
    <meta name="author" content="PeruVentura">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#ffffff">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="PeruVentura">
    <meta name="msapplication-TileColor" content="#ffffff">
  </head>

  <div>
    <pv-toolbar class="bar" style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <nav class="nav container">
          <a href='#' class="logo">
            <i class='bx bxs-bug logo__icon'></i>
            <span>PeruVentura</span>
          </a>

          <div class="nav__menu">
            <button type="button" class="btn btn--close" aria-label="cerrar">
              <i class='bx bx-x'></i>
            </button>

            <ul class="nav__list">
              <li class="nav__item">
                <a href='#hero' class="nav__link">Home</a>
              </li>
              <li class="nav__item">
                <a href='#about' class="nav__link">About Us</a>
              </li>
              <li class="nav__item">
                <a href='#service' class="nav__link">Servicios</a>
              </li>
              <li class="nav__item">
                <a href='#works' class="nav__link">About the Team</a>
              </li>
              <li class="nav__item">
                <a href='#contact' class="nav__link">Contacto</a>
              </li>
            </ul>
          </div>

          <button type="button" class="btn btn--open" aria-label="abrir">
            <i class='bx bx-menu'></i>
          </button>
        </nav>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>

</style>