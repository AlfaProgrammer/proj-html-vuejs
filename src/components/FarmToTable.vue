<template>
  <div class="container">
    <div class="title"> 
        <h3>{{sectionTitle}}</h3>
        <a href="#" type="button"> Read our blog <i class="fa-regular fa-bookmark"></i> </a>
    </div>
    <p class="sec-description"> {{ sectionDescription }} </p>

    <div class="farm-content">
        
        <div class="articles-wrapper">
            <ComponentPreview :article="myArticles[recipeToShowDetails]">
                <template v-slot:prev-btn> 
                    <div class="button-wrapper">
                        <a type="button" :href="myArticles[recipeToShowDetails].href"> Learn more </a>
                    </div>
                </template>
            </ComponentPreview>  
            <ul>
                <CardArticle  v-for="(el, i) in myArticles.slice(1, iterationLimit)" :key="i"
                              :articleData="el"/>
                <button>Load more Posts</button>
            </ul>
        </div>
        
        <div class="advertisements">
            <ul class="ads-wrapper"> 
                <li class="latest-recipes"> 
                    <p>View our latest recipes</p>
                </li>

                <li class="city-guides"> 
                    <div class="city-guides_thumb"></div>
                    <button type="button"> <i class="fa-solid fa-earth-americas"></i> View all City Guides </button>
                </li>

            </ul>

            <div class="search"> 
                <div class="search-icon"> <i class="fa-solid fa-magnifying-glass"></i> </div>
                <input type="search" placeholder="Search...">  
            </div>    

            <div class="follow-us">
                <h3>Follow Us</h3>
                <SocialComponent>
                    <template v-slot:addedSocial>
                        <li>  <a href="#"> <i class="fa-brands fa-pinterest"></i>  </a> </li>
                    </template>
                </SocialComponent>
            </div>

            <div class="posts">
                <div class="posts-toggle">
                    <button class="popular active"> Popular </button>
                    <button class="recent"> Recent </button>
                </div>
            </div>

        </div>


    </div>  
  </div>
</template>

<script>
import ComponentPreview from './ComponentPreview.vue'
import CardArticle from './CardArticle.vue'
import SocialComponent from './SocialComponent.vue'

import state from '../store.js'

export default {
    name: 'FarmToTable',
    components:{
        ComponentPreview,
        CardArticle,
        SocialComponent
    },
    data(){
        return{
            sectionTitle: 'Farm To Table',
            sectionDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Optio distinctio eius temporibus totam modi aliquid numquam repellat.`,
            iterationLimit: 7,
            recipeToShowDetails: 0,
            myArticles: state.journalSection.articles
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/_shared.scss';

    div.container{
        @include categorySection;
        padding-inline:unset;
        background-color: transparent;
        text-align: left;

        .sec-description{
            margin-inline: unset;
            max-width: 45%;
        }

        div.title{
            @include displayFLEX($j-content: space-between);

            a[type="button"]{
                @include btn;
            }
        }
        
        h3{            
            max-width: max-content;
            // border: 2px solid salmon;
        }

        div.farm-content{
            @include displayFLEX($j-content:space-between, $al-items: flex-start);
            border: 2px solid salmon;

            div.articles-wrapper{
                width: 70%;
                @include displayGRID($row-num:4, $custom-row: minmax(max-content, 250px));
                ul{
                    display: contents;
                }
                .article-preview{
                    width: 100%;
                    border: 3px solid brown;
                    grid-column: 1 / -1;              
                }
                .card-article{
                    text-align: center;
                }
                button{
                    @include btn($color: $grey-btn);
                    color: $default-color;
                    grid-column: 1 / -1;
                    font-weight: bold;
                    // border: transparent;
                }


            }
           

            div.advertisements{
               flex-grow: 1;
               border: 3px solid red;
               max-width: 30%;

            //    @include displayFLEX;

                ul.ads-wrapper{
                  
                  border-bottom: 1px solid $icons;
                  margin-bottom: 40px;

                  li.latest-recipes{
                      height: 450px;
                      background-image: url('@/assets/img/food/ad-bg.jpg');
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      display: flex;
                      align-items: center;
                      justify-content: center;

                      p{
                          font-size: $sec-img-mb;
                          text-transform: uppercase;
                          max-width: 100px;
                          text-align: center;
                      }

                      margin-bottom: 40px;
                  }

                  li.city-guides{
                        // border: 3px solid darkcyan;
                        div.city-guides_thumb{
                            height: 250px;
                            background-image: url('@/assets/img/singapore-featured-image.jpg');
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center;
                        }    
                        
                        button{
                            @include btn;
                            width: 100%;
                            border: transparent;
                            margin-bottom: 40px;
                        }
                      
                  }  
                }

                div.search{
                    display: flex;
                    align-items: center;
                    // gap: 10px;
                    height:40px;
                    margin-bottom: 40px;

                    .search-icon{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        width: 15%;
                        color: $icons;
                        // margin: 0 auto;
                        text-align: center;
                        background-color: white;
                        border: 1px solid $icons;
                        border-right: transparent;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;


                    }
                    input{
                        height: 100%;
                        width: 100%;
                        border: 1px solid $icons;
                        border-left: transparent;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;

                    }
                }

                div.follow-us{
                    margin-bottom: 20px;
                    h3{
                        color: $brand;
                        margin-bottom: 20px;
                    }
                    ul.social{
                        gap: 10px;
                    }
                }

                div.posts{
                    // border: 2px solid salmon;

                    div.posts-toggle{
                        display: flex;
                        height: 50px;

                        button{
                            flex-grow: 1;
                            background-color: $main;
                            border: 1px solid $grey-btn;

                            &.active{
                                background-color: white;
                            }
                        }
                        
                        
                    }
                }
            }   
        }

    }
</style>