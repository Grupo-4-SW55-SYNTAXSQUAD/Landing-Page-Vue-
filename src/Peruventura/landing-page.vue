<script setup>
  import NavbarComponent from "../components/navbar.component.vue";
  import HomeComponent from "../Peruventura/view/home.component.vue";
  import AboutComponent from "../Peruventura/view/about.component.vue";
  import Service from "../Peruventura/view/service.view.vue";
  import AboutTeamComponent from "../Peruventura/view/about-team.component.vue";
  import ContactComponent from "@/Peruventura/view/contact.component.vue";
  import FooterComponent from "../Peruventura/view/footer.component.vue";
</script>

<template>
  <header>
    <navbar-component></navbar-component>
  </header>
  <main>
    <home-component></home-component>
    <about-component></about-component>
    <service></service>
    <about-team-component></about-team-component>
    <contact-component></contact-component>
    <footer-component></footer-component>
  </main>
</template>

<style scoped>

</style>