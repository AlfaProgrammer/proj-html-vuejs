<template>
  <nav class="links-wrapper">
      <ul>
        <li v-for="(el, i) in navLinks" :key="i">
            <a href="el.linkSrc"> {{ el.linkTitle }} </a>
        </li>
        <slot name="searchOnSite"></slot>
      </ul>
  </nav>
</template>

<script>
export default {
    name:'NavLinks',
    data(){
        return{
            navLinks:[
                {
                    linkTitle:'Home',
                    linkSrc:'#'
                },
                {
                    linkTitle:'Recepies',
                    linkSrc:'#'
                },
                {
                    linkTitle:'Places',
                    linkSrc:'#'
                },
                {
                    linkTitle:'Blog',
                    linkSrc:'#'
                },
                {
                    linkTitle:'About',
                    linkSrc:'#'
                },
                {
                    linkTitle:'Contacts',
                    linkSrc:'#'
                },
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    @import '@/assets/scss/mixins.scss';
    @import '@/assets/scss/_shared.scss';

    
   nav.links-wrapper{
       display: flex;
       column-gap: 40px;
       row-gap: 20px;
       align-items: center;
       justify-content: center;
       border: 2px solid red;

        ul{
            display: contents;

            li{
                color: $text;
                background-color: goldenrod;
                
                a{
                    @include anchorDefault;
                }
                &:hover{
                    color: $brand;
                }
            }
        }
   }

</style>