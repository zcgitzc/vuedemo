<template>
  <div class="transaction">
    <v-search></v-search>
  </div>
</template>


<script>
  import Search from '@/components/Transaction/Search'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      'v-search': Search
    },
    beforeCreate(){
      //console.log(this.$t);
      //console.log(this.$t("common.message.china"));
    },
    created () {
      //console.log(this.$i18n.messages);
      //console.log(this.$moment.now(),this.$moment().format("YYYY-MM-DD"));
    }
  }
</script>


<style scoped>
</style>