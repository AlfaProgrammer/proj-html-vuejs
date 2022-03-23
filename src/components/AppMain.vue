<template>
  <div class="main-section">
      <JumboHero />
      <FoodieJournal />
      <PopularRecipes />
      <CulinaryCollection />
      <FarmToTable />
  </div>
</template>

<script>
import FoodieJournal from './FoodieJournal.vue'
import JumboHero from './JumboHero.vue'
import PopularRecipes from './PopularRecipes.vue'
import CulinaryCollection from './CulinaryCollection.vue'
import FarmToTable from './FarmToTable.vue'



    export default {
        name: 'AppMain',
        components:{
            JumboHero,
            FoodieJournal,
            PopularRecipes,
            CulinaryCollection,
            FarmToTable
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