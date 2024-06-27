<script>
export default {
  name: "about",
}
</script>

<template>

  <div  id="about"   class="about">
    <div class="container">
      <div class="about__title">
        <h1>ABOUT <span class="title-span">US</span></h1>
      </div>
      <div class="about__description">
        <div class="about__description--text">
          <p>We are committed to offering you a unique travel experience in Peru.</p>
          <p>Our app is your gateway to a world of authentic adventures and meaningful encounters with local communities.
            We are passionate about connecting travelers like you with Peru's unique traditions, culture, and hospitality.
            Our team is made up of travel lovers and tech experts who work tirelessly to provide you with the tools you need to explore the best our beautiful country has to offer.</p>
        </div>
        <div>
          <pv-image src="src/assets/images/cajamarca-peru.jpg"></pv-image>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pv-image {
  width: 100%;
  height: inherit;
}
</style>
