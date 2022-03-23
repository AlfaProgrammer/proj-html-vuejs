<template>
  <div class="main-section">
      <JumboHero />
      <FoodieJournal />
      <PopularRecipes />
  </div>
</template>

<script>
import FoodieJournal from './FoodieJournal.vue'
import JumboHero from './JumboHero.vue'
import PopularRecipes from './PopularRecipes.vue'



    export default {
        name: 'AppMain',
        components:{
            JumboHero,
            FoodieJournal,
            PopularRecipes
        },
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';

    div.main-section{
        background-color: $main;
    }
</style>