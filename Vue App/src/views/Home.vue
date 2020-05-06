<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PriceApp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PriceApp from '@/components/PriceApp.vue'

export default {
  name: 'Home',
  components: {
    PriceApp
  }
}
</script>
