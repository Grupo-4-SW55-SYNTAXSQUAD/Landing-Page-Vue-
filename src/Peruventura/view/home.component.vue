<script>
  export default {
    name:"home-component"
  }
</script>

<template>
  <div class="home flex flex-column bg-auto  bg-no-repeat bg-cover bg-center h-20rem  align-items-center justify-content-center" >
    <div class="home__content container" >
      <div class="relative  container z-1 align-items-center text-white text-center">
          <h1><span class="text-red-500">Discover Peru in an authentic way,</span><br> Unique experiences with local communities</h1>
          <h3>Viaja y conosca de nuevas experencias de nuestro Pais</h3>
      </div>
    </div>
  </div>
  <div class="galery ">
      <div class="galery__content container flex flex-column align-items-center text-center">
          <div class="galery__title">
              <h1 class="text-red-500">Top Destinos</h1>
              <h3>Te organizamos tu viaje a media de tus gustos y al alcance de tu bolcillo</h3>
          </div>
          <div class="galery__image grid align-items-center" >
            <div>
              <pv-image class="galety-item col flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" src="assets/images/cajamarca-peru.jpg" ></pv-image>
              <pv-image class="galety-item col flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" src="assets/images/cusco-peru.jpg"></pv-image>
              <pv-image class="galety-item col flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" src="assets/images/lineas-de-nazca.jpg"></pv-image>
            </div>
            <div>
              <pv-image class="galety-item col flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" src="assets/images/santuario-historico-de-machu-picchu.jpg"></pv-image>
              <pv-image class="galety-item col flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" src="assets/images/trujillo-peru.jpg"></pv-image>
            </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .home{
    min-height: 700px;
    background-image:url("https://c.files.bbci.co.uk/7190/production/_110527092_machu.jpg");
    background-color:rgb(80,80,80);
    background-blend-mode: soft-light;
  }

  .galery__image{
    border:1px solid red;
    gap:2rem;
  }

  .galety-item{
    width: 300px;
    height: 200px;
    margin:0px auto;
  }

  pv-image{
    width: 100%;
  }


</style>