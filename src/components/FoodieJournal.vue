<template>
  <div class="container">
      <h1 class="title"> {{sectionsTitle}} </h1>
      <ul class="card-wrapper">
          <li v-for="(el, i) in articlesList" :key="i">
              <figure class="article-image">
                  <img :src="el.imgSrc" alt="">
              </figure>
             <h3> {{ el.articleTitle }} </h3>
             <p> <span> By {{ el.author }} |</span> {{ el.publication }} </p>
          </li>
      </ul>
  </div>
</template>

<script>
import state from '../store.js'

export default {
    name:'FoodieJournal',
    data(){
        return{
            sectionsTitle: state.journalSection.title,
            articlesList: state.journalSection.articles
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_shared.scss';
    @import '@/assets/scss/mixins.scss';

    div.container{
        background-color: white;
        text-align: center;
        padding: 30px;
        color: $text;
        border: 2px solid salmon;
        position: relative;
        top:-(30px + $sec-title + $sect-title-mb);  /*Padding superiore fontsize and title margin bottom*/

        h1{
            font-size: $sec-title;
            text-transform: uppercase;
            margin-bottom: $sect-title-mb;
        }
        ul.card-wrapper{
            display: flex;
            gap: 30px;

            li{
               @include articleCard;
            }
        }
    }
</style>