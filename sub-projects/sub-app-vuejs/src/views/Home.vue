<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span>全局共享数据 {{ ButtonCount}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{

    }
  },
  computed:{
    ButtonCount :function () {
      return this.$root.customProps.state.ButtonCount
    }
  }
}
</script>
