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

        <div class="container">

        </div>
    </footer>
</template>

<script>
import state from '../store.js'

    export default {
        name:'AppFooter',
        data(){
            return{
                subscribe: state.footerData.subscribeData,
                contacts: state.footerData.contactsData,
                apps: state.footerData.appsData,
                recipesData: state.recipes,
                iterationLimit: 4,
            }
        }

    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    footer{
        border: 3px solid darkcyan;

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
                border: 4px solid cyan;
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

        div.container{
            border: 4px solid darkgoldenrod;
        }
    }
</style>