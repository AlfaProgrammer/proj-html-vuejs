<template>
  <div class="header">
     <div class="container">
        <div class="top-bar"> HELLOOOOOO </div>
        <div class="log"></div>
        <NavLinks>
            <template v-slot:searchOnSite> 
               <li> icon search </li>
            </template>
        </NavLinks>
     </div>
  </div>
</template>

<script>
    import NavLinks from './NavLinks.vue'

    export default {
        name: "AppHeader",
        props:{
            linkTitle:{
                type: String,
                required: true
            },
            linkSrc:{
                type: String,
                required:true
            }
        },
        components:{
            NavLinks
        }
    }
</script>

<style lang="scss" scoped>

   .header{
        div.container{        
        
            div.top-bar{
                height: 30px;
                background-color: salmon;
            }
    }
   }
</style>