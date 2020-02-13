<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>测试SessionStorage跳转</h2>
    <el-button @click="setSessionData">el-button</el-button>
  </div>
</template>

<script>

  export default {
    // name: 'app',
    computed: {},
    data() {
      return {}
    },
    methods: {
      setSessionData() {
        let self = this
        let testMoudel = {
          userName: 'Jayking',
          age: 18
        }
        sessionStorage.setItem('testData', testMoudel)
        window.open('http://localhost:3000', '_blank');
      }
    }
  }
</script>
