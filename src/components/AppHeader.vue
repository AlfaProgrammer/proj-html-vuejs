<template>
  <div class="header">
     <div class="container">

        <div class="top-bar">
            <ul class="top-bar_cta">
                <li><a type="button" href="#"> Download App </a></li>
                <li><a type="button" href="#"> Advertise with Us </a></li>
            </ul>
            <SocialComponent />
            <!-- <ul class="social">
                <li v-for="(el, i) in socialData" :key="i">
                    <a :href="el.socialUrl"> <i :class="el.socialIcon"></i>  </a>
                </li>
            </ul> -->
        </div>

        <figure class="logo">
            <img :src="logo" alt="Logo Avada Food">
        </figure>

        <NavLinks>
            <template v-slot:searchOnSite> 
               <li class="search"> <a type="button" href="#"><i class="fa-solid fa-magnifying-glass"></i></a> </li>
            </template>
        </NavLinks>

     </div>
  </div>
</template>

<script>
    import NavLinks from './NavLinks.vue'
    import SocialComponent from '@/components/SocialComponent.vue'

    export default {
        name: "AppHeader",
        data(){
            return{
                logo: require('@/assets/avada-food-logo-2x.png'),
            }
        },
        components:{
            NavLinks,
            SocialComponent
        }
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
@import '@/assets/scss/_shared.scss';

   div.header{
       
        margin-bottom: 10px;
        div.container{        
            figure.logo{
                // border: 2px solid salmon;
                max-width: 200px;
                max-height: 200px;
                margin: 0 auto;
                
                img{
                    object-fit: cover;
                    object-position: center;
                    padding: 5px 0 10px;
                }
            }
            div.top-bar{
                // height: 30px;
                // background-color: salmon;
                font-size: 12px;
                display: flex;
                align-items: flex-start;
                padding: 5px 10px;
                // column-gap: 20px;

                ul{
                    display: flex;
                    column-gap: 20px;

                    &.social{
                        margin-left: auto;
                    }

                    li:hover{
                        color: $brand;
                    }
                }
                
            }
            
        }
   }
</style>