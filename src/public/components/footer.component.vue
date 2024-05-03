<script>
import 'boxicons';

export default {
  name: "footer-component"
}
</script>

<template>
  <body>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="footer-container">
          <a href="#" class="logo-footer">
            <i class="bx bxs-bug logo__icon"></i>
            <span class="nombre_startup">PeruVentura</span>
          </a>

          <div class="nav-footer">
            <a href="#" class="footer-link">Inicio</a>
            <a href="#" class="footer-link">About Us</a>
            <a href="#" class="footer-link">Services</a>
            <a href="#" class="footer-link">About the Team</a>
            <a href="#" class="footer-link">Contacto</a>
          </div>

          <div class="footer-contacto">
            <h1>Datos de Contacto</h1>
            <h3 class="footer-text">+91 982417254</h3>
            <h1>Redes</h1>
            <div class="hero__content-link">
              <a href="#" class="btn btn-link btn__instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="btn btn-link btn__facebook">
                <i class="bx bxl-facebook-circle"></i>
              </a>
              <a href="#" class="btn btn-link btn__whatsapp">
                <i class="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </body>
</template>

<style scoped>

</style>