<template>
     <li class="card-article">
        <figure class="article-image">
            <img :src="articleData.imgSrc" alt="">

            <div class="overlay">
                <div class="link">  <a :href=" articleData.href "> <i class="fa-solid fa-link"></i> </a>  </div>
                <h3 class="overlay-title"> {{ articleData.title }} </h3>
            </div>
        </figure>
        <h3> {{ articleData.title }} </h3>
        <p> <span> By {{ articleData.author }} |</span> {{ articleData.reference }} </p>
    </li>
     <!-- <li>
        <slot name="card-image"> Img </slot>
        <slot name="card-title"> </slot>
        <slot name="card-author"> </slot>
    </li> -->
    
</template>

<script>

export default {
    name: 'CardArticle',
    props:{
        articleData:{
            type: Object,
            required: true
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';
    li{
        @include articleCard;
    }
    li.card-article:hover{
        div.overlay{
            visibility: visible;
        }
    }

    
    figure{
        position: relative;
        div.overlay{
            @include overlay
        }

    }
</style>