<script>
  import TeamComponent from "@/components/team.component.vue";
  export default {
    name: "about-team-component",
    components:{
      TeamComponent
    },
    data(){
      return{

      }
    }
  }
</script>

<template>
  <div class="about-team container">
    <div class="about-team__title text-center">
      <h1>ABOUT THE <span class="title-span">TEAM</span></h1>
    </div>
    <team-component/>
  </div>
</template>

<style scoped>

</style>