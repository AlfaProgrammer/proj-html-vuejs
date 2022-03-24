<template>
  <div class="article-preview">
      <figure>
            <img :src="article.imgSrc" alt="">

            <div class="overlay">
                <div class="link">  <a :href=" article.href "> <i class="fa-solid fa-link"></i> </a>  </div>
                <h3 class="overlay-title"> {{ article.title }} </h3>
            </div>

      </figure>
      <h3 class="title">{{article.title}}</h3>
      <p class="reference">{{article.reference}}</p>
      <hr>
      <p class="description">{{article.description}}</p>
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
        article:{
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
                border-color: none;
            }
        }
        
        

        figure{ 
        position: relative;
        &:hover{
            div.overlay{
                visibility: visible;
            }
        }

            div.overlay{
               @include overlay;
            }
        }
    }
    
</style>