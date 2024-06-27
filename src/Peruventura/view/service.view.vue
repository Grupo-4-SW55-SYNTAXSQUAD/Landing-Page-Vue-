<script>
  import ServiceComponent from "../../components/service.component.vue";
  export default {
    name:"service",
    components:{
      ServiceComponent
    },
    data(){
        return{
        }
    }
  }

</script>

<template>
  <div class="services">
    <div class="container">
      <div class="services_title text-center ">
        <h1>SERVICES</h1>
      </div>
      <div class="services__content">
        <div class="service__container">
          <service-component/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>