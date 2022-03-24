<template>
     <li class="card-article">
        <figure class="article-image">
            <img :src="articleData.imgSrc" alt="">

            <div class="overlay">
                <div class="link">  <a :href=" articleData.href "> <i class="fa-solid fa-link"></i> </a>  </div>
                <h2 class="overlay-title"> {{ articleData.title }} </h2>
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
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
            justify-content: center;
            background: linear-gradient(transparent -100%, $brand 100%);
            color: white;
            visibility: hidden;

            div.link{
                cursor: pointer;
            }
        }

    }
</style>