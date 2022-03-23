<template>
  <div class="jumbotron">
      <div class="jumbo-card">
        <p class="daily-pick">Today's pick</p>
        <h1> {{ jumboTitle }} </h1>
        <p> {{ jumboData }} </p>
      </div>
  </div>
</template>

<script>
import state from '../store.js'
    export default {
        name: 'JumboHero',
        data(){
            return{
               jumboTitle: state.jumboCard.cardTitle,
               jumboData: state.jumboCard.publication
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

    div.jumbotron{
        // line-height: 650px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 650px;
        background-color: darkcyan;
        background-image: url('@/assets/img/food/single-post-img3.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        div.jumbo-card {
            @include jumboCard;
                position: relative;

            p.daily-pick{
                @include btn($width: max-content);
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: calc($hero-card-pd-block / -2);
            }
        }  
       
    }
</style>