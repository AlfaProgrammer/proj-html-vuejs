<template>
  <div id="app">
    <AppHeader /> 
    <AppMain />
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader.vue"
  import AppMain from "@/components/AppMain.vue"
  export default {
    name: 'App',
    data(){
      return{
        
      }
    },
    components:{
      AppHeader,
      AppMain
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
