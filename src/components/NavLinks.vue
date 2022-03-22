<template>
  <nav class="links-wrapper">
      <ul>
        <li v-for="(el, i) in navLinks" :key="i" :class="{active: el.pageActive}">
            <a href="el.pageLink"> {{ el.pageName }} </a>
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
                    pageName:'Home',
                    pageLink:'#',
                    pageActive: true
                },
                {
                    pageName:'Recepies',
                    pageLink:'#',
                    pageActive: false
                },
                {
                    pageName:'Places',
                    pageLink:'#',
                    pageActive: false
                },
                {
                    pageName:'Blog',
                    pageLink:'#',
                    pageActive: false
                },
                {
                    pageName:'About',
                    pageLink:'#',
                    pageActive: false
                },
                {
                    pageName:'Contacts',
                    pageLink:'#',
                    pageActive: false
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
       column-gap: $col-gap;
       row-gap: $row-gap;
       align-items: center;
       justify-content: center;
    //    border: 2px solid red;

        ul{
            display: contents;

            li{
                color: $text;
                // background-color: goldenrod;
                padding: 10px 0;
                position: relative;

                &:hover:not([class="search"]){
                    color: $brand;

                    &:after{
                        visibility: visible;
                    }
                }
                &:after{
                    content:"";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: $brand;
                    visibility: hidden;
                }                
            }
            li.active{

                &:after{
                    visibility: visible;
                }
                color: $brand;
            }
        }
   }

</style>