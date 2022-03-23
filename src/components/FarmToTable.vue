<template>
  <div class="container">
    <div class="title"> 
        <h3>{{sectionTitle}}</h3>
        <a href="#" type="button"> Read our blog <i class="fa-regular fa-bookmark"></i> </a>
    </div>
    <p class="sec-description"> {{ sectionDescription }} </p>

    <div class="farm-content">
        
        <div class="articles-wrapper">
            <ComponentPreview :article="myArticles[recipeToShowDetails]">
                <template v-slot:prev-btn> 
                    <div class="button-wrapper">
                        <a type="button" :href="myArticles[recipeToShowDetails].href"> Learn more </a>
                    </div>
                </template>
            </ComponentPreview>  
            <ul>
                <CardArticle  v-for="(el, i) in myArticles.slice(1, iterationLimit)" :key="i"
                              :articleData="el"/>
                <button>Load more Posts</button>
            </ul>
        </div>
        
        <div class="advertisements">
            <div>
                <img src="" alt="">
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>


    </div>  
  </div>
</template>

<script>
import ComponentPreview from './ComponentPreview.vue'
import CardArticle from './CardArticle.vue'

import state from '../store.js'

export default {
    name: 'FarmToTable',
    components:{
        ComponentPreview,
        CardArticle
    },
    data(){
        return{
            sectionTitle: 'Farm To Table',
            sectionDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Optio distinctio eius temporibus totam modi aliquid numquam repellat.`,
            iterationLimit: 7,
            recipeToShowDetails: 0,
            myArticles: state.journalSection.articles
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    div.container{
        @include categorySection;
        padding-inline:unset;
        background-color: transparent;
        text-align: left;

        .sec-description{
            margin-inline: unset;
            max-width: 45%;
        }
        div.title{
            @include displayFLEX($j-content: space-between);

            a[type="button"]{
                @include btn;
            }
        }
        
        h3{            
            max-width: max-content;
            // border: 2px solid salmon;
        }

        div.farm-content{
            @include displayFLEX($j-content:space-between, $al-items: flex-start);
            border: 2px solid salmon;

            div.articles-wrapper{
                width: 70%;
                @include displayGRID($row-num:4, $custom-row: minmax(max-content, 250px));
                ul{
                    display: contents;
                }
                .article-preview{
                    width: 100%;
                    border: 3px solid brown;
                    grid-column: 1 / -1;              
                }
                .card-article{
                    text-align: center;
                }
                button{
                    @include btn($color: $grey-btn);
                    color: $default-color;
                    grid-column: 1 / -1;
                    font-weight: bold;
                    // border: transparent;
                }


            }
           

            div.advertisements{
               flex-grow: 0;
               border: 3px solid red;
               max-width: 30%;

               @include displayFLEX;
            }   
        }
    }
</style>