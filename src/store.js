import Vue from 'vue'
const state = new Vue.observable({
    jumboCard:{
        cardTitle: 'Food Corner: Top Japanese Restaurant for Sushi',
        publication: 'March 25 2019'
    },
    journalSection:{
        title: 'Foodie Journal',
        articles:[
            {
                imgSrc: require('./assets/img/food/single-post-img3.jpg'),
                articleTitle:'Food Corner: Top Japanese Restaurant for Sushi',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            {
                imgSrc: require('./assets/img/food/fi-roundup.jpg'),
                articleTitle:'Roundup: My New Favourite Recipes For Healthy Living',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            {
                imgSrc: require('./assets/img/food/fi-toasts.jpg'),
                articleTitle:'Why These Toasts with Tea are My New Favourite',
                publication:'March 25th, 2019',
                author: 'admin'
            }
        ]
    }
})

export default state