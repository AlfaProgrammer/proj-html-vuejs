<template>
    
    <div class="container">
        <h3 class="title">{{sectionTitle}}</h3>
        <p class="sec-description"> {{ sectionDescription }} </p>
        <div class="cards card-wrapper">
            <ComponentPreview :article="myRecipes[recipeToShowDetails]">
                <template v-slot:prev-btn> 
                    <div class="button-wrapper">
                        <a type="button" :href="myRecipes[recipeToShowDetails].href"> Learn more </a>
                        <div><i class="fa-solid fa-comments"></i></div>
                    </div>
                </template>
            </ComponentPreview>    
            <ul class="recipes-wrapper">

                <li v-for="(el, i) in myRecipes.slice(0, iterationLimit)" :key="i">
                    <figure>
                        <img :src="el.imgSrc" alt="">

                        <div class="overlay">
                            <div class="link">  <a :href=" el.href "> <i class="fa-solid fa-link"></i> </a>  </div>
                            <h3 class="overlay-title"> {{ el.title }} </h3>
                        </div>

                    </figure>
                </li>

            </ul>
            </div>
    </div>
</template>

<script>
import ComponentPreview from './ComponentPreview.vue'
import state from '../store.js'


export default {
    name:'PopularRecipes',
    components:{
        ComponentPreview 
    },
    data(){
        return{
            sectionTitle: 'Popular Recipes',
            sectionDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Optio distinctio eius temporibus totam modi aliquid numquam repellat.`,
            iterationLimit: 8,
            recipeToShowDetails: 0,
            myRecipes: state.recipes
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

    div.container{
        background-color: transparent !important;
        @include categorySection;
        padding-inline: unset;
        // align-items: flex-start;
        
        .card-wrapper{
            .button-wrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .recipes-wrapper{
            @include  displayGRID($row-num: 4);
            width: 45%;
            align-self: flex-start;

            li:hover{
                div.overlay{
                    visibility: visible;
                }
            }

            figure{ 
                position: relative;

                    div.overlay{
                        @include overlay;
                    }
                }
        }
    }
</style>