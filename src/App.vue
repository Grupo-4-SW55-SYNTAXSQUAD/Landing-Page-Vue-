<script>
import FooterComponent from '@/public/components/footer.component.vue';
import HeaderComponent from '@/public/components/header.component.vue';
export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent },
  data() {},
  created() {},
  methods: {},
};
</script>

<template>
  <div>
    <div>
      <header-component></header-component>
    </div>
    <div>
      <div id="particles-js"></div>
      <section id="hero" class="hero section">
        <div class="container">
          <div class="hero__contents">
            <div class="hero__content">
              <h1 class="hero__title">
                Discover Peru in an authentic way , <br /><span
                  class="hero__title_name"
              >Experiencias únicas con comunidades locales</span
              >
              </h1>
              <h2 class="hero__description">
                Join us to live unforgettable moments <br />and leave a positive
                mark on your trip to Peru!<span
                  id="typing"
                  class="hero__dev"
              ></span>
              </h2>
              <div class="hero__content-link">
                <a href="#" class="btn btn-link btn__instagram" target="_blank">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                    href="https://www.facebook.com/?locale=es_LA"
                    class="btn btn-link btn__facebook"
                    target="_blank"
                >
                  <i class="bx bxl-facebook-circle"></i>
                </a>
                <a
                    href="https://web.whatsapp.com/"
                    class="btn btn-link btn__whatsapp"
                    target="_blank"
                >
                  <i class="bx bxl-whatsapp"></i>
                </a>
              </div>
            </div>

            <div class="hero--content hero__foto">
              <img src="./assets/image_hero.png" alt="perfil" />
            </div>
          </div>
        </div>
      </section>
      <section class="wave">
        <div class="wave-content" style="height: 150px; overflow: hidden">
          <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style="height: 100%; width: 100%"
          >
            <path
                d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: currentColor"
            ></path>
          </svg>
        </div>
      </section>
      <main>
        <section id="about" class="about section">
          <div class="container">
            <h2 class="section-title">
              ABOUT <span class="section-span">US</span>
            </h2>
            <div class="about__content">
              <div class="about__text">
                <h3 class="about__title">
                  Estamos comprometidos a ofrecerte una experiencia única de viaje
                  en Perú
                </h3>
                <p class="about__parrafo">
                  <span class="about-span"> </span> <br />
                  Nuestra aplicación es tu puerta de entrada a un mundo de
                  aventuras auténticas y encuentros significativos con las
                  comunidades locales.
                  <br /><br />
                  Nos apasiona conectar a viajeros como tú con las tradiciones, la
                  cultura y la hospitalidad únicas de Perú. Nuestro equipo está
                  formado por amantes de los viajes y expertos en tecnología que
                  trabajan incansablemente para proporcionarte las herramientas
                  necesarias para explorar lo mejor que nuestro hermoso país tiene
                  para ofrecer.
                  <br />
                </p>
                <a src="cv.html" class="btn btn__about" target="_blank">
                  Facebook</a
                >
              </div>
              <div class="about__foto">
                <img
                    src="./assets/img-about.jpg"
                    alt="foto_perfil"
                    class="about__img"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="service" style="margin-top: 3em">
          <h1>SERVICES</h1>
          <section class="service-flex-section">
            <section>
              <h1>Búsqueda y filtrado de actividades:</h1>
              <h1 style="width: 20em">
                Los usuarios pueden buscar actividades por ubicación, tipo de
                experiencia (arte, cocina, artesanía, etc.), disponibilidad de
                fechas y otros criterios relevantes.
              </h1>
            </section>
            <img
                src="./assets/search-services.webp"
                style="width: 300px; height: 250px; object-fit: cover"
            />
          </section>
          <section class="service-flex-section">
            <img
                src="./assets/services-2.avif"
                style="width: 310px; height: 300px"
            />
            <section>
              <h1>Comunicación directa con los anfitriones:</h1>
              <h1 style="width: 20em">
                Los usuarios pueden comunicarse directamente con los anfitriones
                de las actividades para hacer preguntas, obtener más información y
                coordinar detalles adicionales.
              </h1>
            </section>
          </section>
        </section>

        <section id="works" class="section team">
          <div class="container">
            <h2 class="section-title">About The Team</h2>
            <div class="profiles__cards">
              <div class="card">
                <a class="btn btn-card">
                  <img src="./assets/dev-Lynn.png" alt="Lynn-Developer" />
                  <span>Lynn Meza Camayo</span>
                </a>
              </div>
              <div class="card">
                <a class="btn btn-card btn-css">
                  <img src="./assets/Paolo-dev.jpg" alt="Paolo-Developer" />
                  <span>Paolo Parraga Gamarra</span>
                </a>
              </div>
              <div class="card">
                <a class="btn btn-card btn-javascript">
                  <img src="./assets/Fabricio-dev.jpg" alt="Fabricio-Developer" />
                  <span>Fabricio</span>
                </a>
              </div>
              <div class="card">
                <a class="btn btn-card btn-c++">
                  <img src="./assets/David-dev.jpg" alt="David-Developer" />
                  <span>David Rodriguez Santos</span>
                </a>
              </div>
              <div class="card">
                <a class="btn btn-card btn-c++">
                  <img src="./assets/Felix-dev.jpg" alt="Felix-Developer" />
                  <span>Felix Becerra</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" class="section contact">
          <div class="container">
            <h2 class="section-title">CONTACT</h2>
            <div class="contact-form">
              <div class="contact-img">
                <img src="" alt="recepcion" />
              </div>
              <
              <form action="#" autocomplete="off">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Completo "
                    class="campo"
                />
                <input
                    type="text"
                    name="gmail"
                    placeholder="Correo Electronico "
                    class="campo"
                />
                <input
                    type="text"
                    name="gmail"
                    placeholder="Telefono "
                    class="campo"
                />
                <textarea
                    name="mensaje"
                    id="mensaje"
                    cols="30"
                    rows="10"
                    placeholder="mensaje"
                ></textarea>

                <input
                    type="submit"
                    name="enviar"
                    value="Enviar"
                    class="btn btn-enviar"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
    <div>
      <footer-component></footer-component>
    </div>
  </div>


</template>
