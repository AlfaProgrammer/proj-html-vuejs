<template>
    <footer>
        <div class="subscribe">
           <div class="sub-data-wrapper">
               <h3 class="title"> Subscribe <span> & </span> Receive {{ subscribe.gift }} </h3>
               <p class="sec-description"> {{ subscribe.description }} </p>
               <form>
                   <input type="text" name="emailInput" placeholder="Insert email here">
                   <a href="#" type="button"> Suscribe </a> 
               </form>
               <p class="reference sec-description"> {{ subscribe.reference }} </p>
           </div>
        </div>

        <div class="img-carousell">
            <figure v-for="(el, i) in recipesData.slice(0, iterationLimit)" :key="i">
                <img :src="el.imgSrc" alt="">
            </figure>
        </div>

        <div class="container website-data">
            <div class="logo">
                <figure>
                    <img :src="logo" alt="">
                </figure>
                <SocialComponent />
            </div>

            <div class="navigation-links">
                <NavLinks />
            </div>

            <div class="contacts">
                <h3 class="title"> Contacts </h3>    
                <ul>
                    <li class="location">
                        <div class="icon"> <i class="fa-solid fa-location-dot"></i> </div>
                        <!-- <p> {{contacts.location}} </p> -->
                        <p> {{contacts.location}} </p>
                    </li>
                    <li class="phone">
                        <div class="icon"> <i class="fa-solid fa-phone-flip"></i> </div>
                        <p> {{contacts.phone}} </p>
                    </li>
                    <li class="email">
                        <div class="icon"> <i class="fa-solid fa-envelope"></i> </div>
                        <p> {{contacts.email}} </p>
                    </li>
                </ul>
            </div>

            <div class="appDownload">
                <h3 class="title"> Get our App ! </h3>
                <ul>

                    <li class="playStore"> 
                        <a :href="apps.playStoreLink"> 
                            <img :src="apps.playStoreImg" alt="">
                        </a>
                    </li>

                    <li class="appStore"> 
                        <a :href="apps.appStoreLink">
                            <img :src="apps.appStoreImg" alt="">
                        </a>    
                    </li>

                </ul>
            </div>
        </div>

        <div class="copyrightBar">
            <a type="button" href="#" class="page-up"> <i class="fa-solid fa-circle-up"></i> </a>
            <p> &copy; Copyright 2012 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit? </p>
        </div>

    </footer>
</template>

<script>
import state from '../store.js'
import SocialComponent from './SocialComponent.vue'
import NavLinks from './NavLinks.vue'

    export default {
        name:'AppFooter',
        components:{
            SocialComponent,
            NavLinks
        },
        data(){
            return{
                subscribe: state.footerData.subscribeData,
                contacts: state.footerData.contactsData,
                apps: state.footerData.appsData,
                recipesData: state.recipes,
                iterationLimit: 4,
                logo: require('@/assets/avada-food-logo-mob-2x.png'),
            }
        },
        

    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    footer{
        // border: 3px solid darkcyan;

        div.subscribe{
            @include displayFLEX;
            @include categorySection;
            
            height: 400px;
            background-image: url('@/assets/img/subscribe-sec-bg.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            padding: $sec-p;
            div.sub-data-wrapper{                
                h3 span{
                    color: $brand;
                }

                .sec-description{
                    max-width: unset;
                }

                form{
                    max-width: 90%;
                    margin-inline: auto;
                    margin-bottom:$sec-desctiption-mb;
                    @include displayFLEX;
                    
                    input{
                        flex-grow: 1;
                        align-self: stretch;
                        border-radius: 5px;
                        border: 1px solid $icons;
                        padding-left: 10px;

                        &::placeholder{
                            color: $icons;
                            
                        }
                    }

                    a[type="button"]{
                        @include btn;
                        padding-inline: 40px;
                    }
                }
            }
            
        }

        div.img-carousell{
                @include displayFLEX;
                // border: 4px solid cyan;
                gap: unset;
                margin-bottom: 40px;

                figure{
                    flex-grow: 1;

                    img{
                        width: 100%;
                        object-fit: cover;
                        object-position: center;
                    }
                }
        }

        div.website-data{
            // border: 4px solid darkgoldenrod;
            margin-bottom: 40px;
            @include displayFLEX;
            gap: unset;

            h3{
                text-transform: uppercase;
                color: $brand;
                margin-bottom: 20px;
            }

            &>div{
                // border: 4px solid greenyellow;
                flex-basis: 25%;
                align-self: stretch;
                padding-left: 25px;

                &:not(:last-child){
                    border-right: 1px dashed $icons;
                }
            }

            div.logo{
                figure{
                    width: 200px;
                    margin-bottom: 40px;
                }
                ul.social{
                    max-width: max-content;
                }
            }

            div.navigation-links{
                
                nav.links-wrapper{
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    row-gap: 5px;
                    
                }


               
            }

            div.contacts{
                ul{

                    li{
                        display: flex;
                        align-items: flex-start;
                        margin-bottom: 20px;
                        column-gap: 10px;
                        color: $icons;

                        div.icon{
                            // flex-basis: 20px;
                            text-align: center;
                            max-width: 10%;
                            flex-grow: 1;                            
                        }
                        p{
                            flex-grow: 1;
                            max-width: 90%;
                            text-align: left;
                        }
                    }
                }
            }

            div.appDownload{
                ul{

                    li.playStore{
                        margin-bottom: 20px;
                    }
                }
            }
        }

        div.copyrightBar{
            color: $icons;
            background-color: $main;
            height: 50px;
            text-align: center;
            line-height: 50px;
            position: relative;

            a.page-up{
                position: absolute;
                top: 50%;
                left: 50px;
                transform: translateY(-50%);
                font-size: 30px;
                border: none;
                cursor: pointer;
            }
        }
    }
</style>