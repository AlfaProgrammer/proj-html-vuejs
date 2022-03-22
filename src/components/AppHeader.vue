<template>
  <div class="header">
     <div class="container">

        <div class="top-bar">
            <ul class="top-bar_cta">
                <li><a type="button" href="#"> Download App </a></li>
                <li><a type="button" href="#"> Advertise with Us </a></li>
            </ul>
            <ul class="social">
                <li v-for="(el, i) in socialData" :key="i">
                    <a :href="el.socialUrl"> <i :class="el.socialIcon"></i>  </a>
                </li>
            </ul>
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

    export default {
        name: "AppHeader",
        data(){
            return{
                logo: require('@/assets/avada-food-logo-2x.png'),
                socialData:[
                    {
                        socialName: 'Instagram',
                        socialUrl: '#',
                        socialIcon: "fa-brands fa-instagram"
                    },
                    {
                        socialName: 'FaceBook',
                        socialUrl: '#',
                        socialIcon: 'fa-brands fa-facebook-f'
                    },
                    {
                        socialName: 'Twitter',
                        socialUrl: '#',
                        socialIcon: "fa-brands fa-twitter"
                    },
                    {
                        socialName: 'YouTube',
                        socialUrl: '#',
                        socialIcon: "fa-brands fa-youtube"
                    },
                ]
            }
        },
        components:{
            NavLinks
        }
    }
</script>

<style lang="scss" scoped>
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
                column-gap: 20px;

                ul{
                    display: contents;
                    li:hover{
                        color: $brand;
                    }
                }
                ul.social{
                    li:first-child{
                        margin-left: auto;
                    }
                    li{
                        // border: 1px solid black;
                        color: $icons;
                        &:hover{
                        color: $brand;
                    }
                    }
                    
                }
            }
    }
   }
</style>