<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="footer-container">
          <router-link to="/" class="logo-footer">
            <i class="bx bxs-bug logo__icon"></i>
            <span class="nombre_startup">PeruVentura</span>
          </router-link>

          <div class="nav-footer">
            <router-link to="/" class="footer-link">Inicio</router-link>
            <router-link to="/about" class="footer-link">About Us</router-link>
            <router-link to="/service" class="footer-link">Services</router-link>
            <router-link to="/about-team" class="footer-link">About the Team</router-link>
            <router-link to="/contact" class="footer-link">Contacto</router-link>
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
</template>

<script>
export default {
  name: "footer-component"
};
</script>

<style scoped>
/* Estilos específicos para el footer */
</style>
