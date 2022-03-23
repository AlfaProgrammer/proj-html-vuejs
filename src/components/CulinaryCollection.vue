<template>
  <div class="container">
        <h3 class="title"> {{ sectionTitle }} </h3>
        <p class="sec-description"> {{ sectionDescription }} </p>
        <ul class="collections-wrapper">

            <li v-for="(el, i) in culinaryCollections.slice(0, iterationLimit)" :key="i">
                <figure>
                    <img :src="el.collectionThumb" alt="">
                </figure>
                <p class="collection-name"> {{ el.collectionName }} </p>
            </li>

        </ul>
      
  </div>
</template>

<script>
import state from '../store.js'


export default {
    name:'CulinaryCollection',
    data(){
        return{
            culinaryCollections: state.culinaryCollections,
            iterationLimit: 8,
            sectionTitle:'Culinary Collection',
            sectionDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Optio distinctio eius temporibus totam modi aliquid numquam repellat.`,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    div.container{
        background-color: transparent !important;
        @include categorySection;

        .collections-wrapper{
            @include displayGRID($col-num:4, $row-num:2);

            li{
                background-color: white;
                padding-bottom: 20px;
                text-transform: uppercase;
                font-size: $sec-desctiption;

                figure{
                   max-width: 100%; 
                   max-width: 150px;
                   margin: 0 auto;
                   img{
                       width: 100%;
                       object-fit: cover;
                       object-position: center;
                   }
                }
            }
        }
    }

</style>