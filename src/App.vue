<script>
import NavbarComponent from "./components/navbar.component.vue";
import HomeComponent from "./Peruventura/view/home.component.vue";
import AboutComponent from "./Peruventura/view/about.component.vue";
import Service from "./Peruventura/view/service.view.vue";
import AboutTeamComponent from "./Peruventura/view/about-team.component.vue";
import ContactComponent from "./Peruventura/view/contact.component.vue";
import FooterComponent from "./Peruventura/view/footer.component.vue";

export default {
  components: {
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    Service,
    AboutTeamComponent,
    ContactComponent,
    FooterComponent
  }
}
</script>

<template>
  <div id="app">
    <header>
      <navbar-component></navbar-component>
    </header>
    <main>
      <section id="home">
        <home-component></home-component>
      </section>
      <section id="about">
        <about-component></about-component>
      </section>
      <section id="service">
        <service></service>
      </section>
      <section id="about-team">
        <about-team-component></about-team-component>
      </section>
      <section id="contact">
        <contact-component></contact-component>
      </section>
      <footer>
        <footer-component></footer-component>
      </footer>
    </main>
  </div>
</template>

<style scoped>


</style>

