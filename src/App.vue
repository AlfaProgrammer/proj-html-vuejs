<template>
  <div id="app">
    <AppHeader /> 
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader.vue"
  import AppMain from "@/components/AppMain.vue"
  import AppFooter from '@/components/AppFooter.vue'


  export default {
    name: 'App',
    data(){
      return{
        
      }
    },
    components:{
      AppHeader,
      AppMain,
      AppFooter
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

  
</style>
