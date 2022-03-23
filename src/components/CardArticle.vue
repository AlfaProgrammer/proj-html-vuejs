<template>
     <!-- <li>
        <figure class="article-image">
            <img :src="articleData.imgSrc" alt="">
        </figure>
        <h3> {{ articleData.articleTitle }} </h3>
        <p> <span> By {{ articleData.author }} |</span> {{ articleData.publication }} </p>
    </li> -->
     <li>
        <!-- <figure>
            <img :src="articleData.imgSrc" alt="">
        </figure> -->
        <slot name="card-image"> Img </slot>
        <!-- <h3> {{ articleData.articleTitle }} </h3> -->
        <slot name="card-title"> </slot>
        <!-- <p> <span> By {{ articleData.author }} |</span> {{ articleData.publication }} </p> -->
        <slot name="card-author"> </slot>
    </li>
    
</template>

<script>

export default {
    name: 'CardArticle',
    // props:{
    //     articleData:{
    //         type: Object,
    //         required: true
    //     }
    // },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
    li{
        @include articleCard;
    }
</style>