<template>
  <div class="article-preview">
      <figure>
          <img :src="recipe.imgSrc" alt="">
      </figure>
      <h3 class="title">{{recipe.title}}</h3>
      <p class="reference">{{recipe.reference}}</p>
      <hr>
      <p class="description">{{recipe.description}}</p>
      <slot name="prev-btn"></slot>
  </div>
</template>

<script>
export default {
    name:'ComponentPreview',
    data(){
        return{
        }
    },
    props:{
        recipe:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    .article-preview{
        width: 55%;
        @include articlePreview;
        
        div.button-wrapper{
            // border: 2px solid black;
            max-width: 95%;
            margin: 0 auto;
            a[type="button"]{
                @include btn;
            }
        }
        
    }
    
</style>