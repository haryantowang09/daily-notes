<template>
  <Skeleton class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </Skeleton>
</template>

<script>
import Skeleton from '@/components/Layout/Skeleton'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Skeleton
  }
}
</script>
