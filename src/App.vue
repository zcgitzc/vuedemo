<template>
  <div id="app">
    <v-header></v-header>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header'
  
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      'v-header': Header,
    },
  }
</script>
<style scoped>
  #content{
    width: 97%;
    margin: 15px auto;
  }
</style>