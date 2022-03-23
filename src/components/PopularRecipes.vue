<template>
  <div class="container">
      <CardPreviewArticle>
          ssdkasdkaskdask
      </CardPreviewArticle>
  </div>
</template>

<script>
import CardPreviewArticle from './CardPreviewArticle.vue'
import state from '../store.js'


export default {
    name:'PopularRecipes',
    component:{
        CardPreviewArticle 
    },
    data(){
        return{
            myRecipes: state.recipes  // modifica questo dato
        }
    }
}
</script>

<style lang="scss" scoped>
    div.container{
        border: 3px solid salmon;
    }
</style>