  <script>
  export default {
    name: 'service-component',
    data(){
      return{
        list:[
          {
            title:"Search and filter activities",
            text:"Users can search for activities by location, type of experience (arts, cooking, crafts, etc.), date availability, and other relevant criteria.",
            img:"../src/assets/images/service-1.jpg"
          },
          {
            title:"Comunicación directa con los anfitriones.",
            text:"Los usuarios pueden comunicarse directamente con los anfitriones de las actividades para hacer preguntas, obtener más información y concertar detalles adicionales.",
            img:"../src/assets/images/service-2.jpg"
          },
          {
            title:"Detailed information about activities",
            text:"Each activity has a details page that provides complete information about the experience, including times, location, detailed description, participation requirements, and more.",
            img:"../src/assets/images/service-3.jpeg"
          }
        ]
      }
    }
  }

</script>

<template>
  <div class="service container ">
    <div v-for="item in list" :key="item.title" class="service--content flex  gap-2 align-items-center text-center text-justify ">
      <div class="service__text  ">
        <h1>{{ item.title }}</h1>
        <p>{{ item.text }}</p>
      </div>
      <img class="service--img" :src="item.img" alt="Service image" />

    </div>
  </div>
</template>

<style scoped>
  
  @media (min-width: 650px) {
    .service--content{
      align-items: center;
      padding: 10px;
      gap:2.5rem;
    }

    .service--img{
      width: 50%;
      height: 350px;
    }

    .service .service--content:nth-child(even){
      flex-direction: row-reverse;
    }

  }
  @media (max-width: 650px) {
    .service--content{
      flex-direction: column;
    }
  }
  
</style>