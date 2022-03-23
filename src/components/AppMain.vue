<template>
  <div class="main-section">
      <JumboHero />
      <FoodieJournal />
  </div>
</template>

<script>
import FoodieJournal from './FoodieJournal.vue'
import JumboHero from './JumboHero.vue'


    export default {
        name: 'AppMain',
        components:{
            JumboHero,
            FoodieJournal
        },
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>