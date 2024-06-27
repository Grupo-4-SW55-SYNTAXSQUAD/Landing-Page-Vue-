<script>


  export default {
    name: "team-component",
    data(){
      return{
        dev:[
          {
            id:1,
            img:"assets/images/dev-Lynn.png",
            name: "Lynn Meza Camayo",

          },
          {
            id:2,
            img:"assets/images/Paolo-dev.jpg",
            name: "Paolo Parraga Gamarra"
          },
          {
            id:3,
            img:"assets/images/Fabricio-dev.jpg",
            name: "Fabricio"
          },
          {
            id:4,
            img:"assets/images/Felix-dev.jpg",
            name: "Felix Becerra"
          },
          {
            id:5,
            img:"assets/images/David-dev.jpg",
            name: "David Rodriguez Santos"
          }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <div class="team flex flex-wrap gap-2 justify-content-center border-1 p-3">
      <div v-for="item in dev" :key="item.id" class="team-item flex flex-column align-items-center justify-content-center border-1 p-1 m-2">
        <pv-image class="team-image " :src="item.img" alt="team image" style="width: 250px; height: inherit;" />
        <div class="team-name">
          <h2>{{ item.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .team{
    background-color:#7F19AF;
  }
  .team-item{
    flex: 1 0 21%;
    border-sizen:border-box;
    background-color:#1E1E1E;
    color:#fff;
    border-radius:10px;
  }
</style>