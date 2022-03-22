<template>
  <div id="app">
    <AppHeader /> 
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader.vue"
  export default {
    name: 'App',
    data(){
      return{
        
      }
    },
    components:{
      AppHeader
    }
  }
  </script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';

/* STYLE COMPONENT */
  @include defaultSet;

  // #app{
  //   background: darkcyan;
  // }
  
</style>
