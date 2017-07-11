<template>
  <div class="searchResult">
     <div v-html = "result.content"></div>
  </div>
</template>

<script>
    
    export default {
        data(){
            return {
                
            }
        },
        methods: {
             
        },
        props:["result"],
        created(){
          let result = this.$props.result;
          let links = "";
          result.links.forEach(function(item){
            links += '@import url('+item+');'
          });
          result.content = '<div><style type="text/css" scoped>'+links+result.styles+'</style>'+result.content+'</div>';
          console.log(result);
        }

    }
</script>

<style scoped>
</style>