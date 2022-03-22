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
  @import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

/* STYLE COMPONENT */
  @include defaultSet;
  a{
    @include anchorDefault
  }
  // #app{
  //   background: darkcyan;
  // }
  
</style>
