<template>
    
    <div class="container">
        <h3 class="title">{{sectionTitle}}</h3>
        <p class="sec-description"> {{ sectionDescription }} </p>
        <div class="cards card-wrapper">
            <ComponentPreview :recipe="myRecipes[recipeToShowDetails]">
                <template v-slot:prev-btn> 
                    <div class="button-wrapper">
                        <a type="button" :href="myRecipes[recipeToShowDetails].href"> Learn more </a>
                    </div>
                </template>
            </ComponentPreview>    
            <ul class="recipes-wrapper">

                <li v-for="(el, i) in myRecipes.slice(0, iterationLimit)" :key="i">
                    <figure>
                        <img :src="el.imgSrc" alt="">
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
        // align-items: flex-start;
        
        .recipes-wrapper{
            @include  displayGRID($row-num: 4);
            width: 45%;
            align-self: flex-start;
        }
    }
</style>