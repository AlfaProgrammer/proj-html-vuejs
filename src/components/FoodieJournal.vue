<template>
  <div class="container">
      <h1 class="title"> {{sectionsTitle}} </h1>
      <ul class="card-wrapper">

        <!-- <li v-for="(el, i) in articlesList" :key="i">
            <figure class="article-image">
                <img :src="el.imgSrc" alt="">
            </figure>
            <h3> {{ el.articleTitle }} </h3>
            <p> <span> By {{ el.author }} |</span> {{ el.publication }} </p>
        </li> -->
        
        <CardArticle  v-for="(el, i) in articlesList.slice(0, iterationLimit)" :key="i"
                      :articleData="el"/>
        <!-- <CardArticle v-for="(el, i) in articlesList.slice(0, iterationLimit)" :key="i">

            <template v-slot:card-image>
                <figure>
                    <img :src="el.imgSrc" alt="">
                </figure>
            </template>
            <template v-slot:card-title>
                 <h3> {{ el.articleTitle }} </h3>
            </template>
            <template v-slot:card-author>
                 <p> <span> By {{ el.author }} |</span> {{ el.publication }} </p>
            </template>

        </CardArticle> -->

      </ul>
  </div>
</template>

<script>
import state from '../store.js'
import CardArticle from './CardArticle.vue'

export default {
    name:'FoodieJournal',
    data(){
        return{
            iterationLimit: 3,
            sectionsTitle: state.journalSection.title,
            articlesList: state.journalSection.articles
        }
    },
    components:{
        CardArticle
    }

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_shared.scss';
    @import '@/assets/scss/mixins.scss';

    div.container{
        // background-color: white;
        // text-align: center;
        // padding: 30px;
        // color: $text;
        // // border: 2px solid salmon;
        @include categorySection;
        position: relative;
        top:-(30px + $sec-title + $sec-title-mb);  /*Padding superiore fontsize and title margin bottom*/

        // h1{
        //     font-size: $sec-title;
        //     text-transform: uppercase;
        //     margin-bottom: $sec-title-mb;
        // }
        // ul.card-wrapper{
        //     display: flex;
        //     gap: 30px;

            
        // }
    }
</style>