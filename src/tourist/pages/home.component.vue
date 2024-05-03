<script>
export default {
  name: "home",
  mounted() {
    // Asegúrate de que este código se ejecute después de que el componente se haya montado en el DOM
    document.body.classList.add('bg-red')
    document.body.classList.remove('one')

    console.log(document.body.classList)

    // querySelector
    const btnOpen = document.querySelector('.btn--open')
    const btnClose = document.querySelector('.btn--close')
    const navMenu = document.querySelector('.nav__menu')
    console.log(btnOpen)

  }
}
</script>
<template>

</template>


 <script setup lang="ts">
 </script>