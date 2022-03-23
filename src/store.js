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
                author: 'admin',
                articlePreview: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi.
                                 Similique autem iste nesciunt saepe alias vitae fugit, ratione voluptas.`

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
            },
            {
                imgSrc: require('./assets/img/food/fi-korean-food.jpg'),
                articleTitle:'Meal Prep: Korean Bibimbap with Kimeki',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            {
                imgSrc: require('./assets/img/food/fi-street-food.jpg'),
                articleTitle:'Exploring Street Food in Bangkok',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            {
                imgSrc: require('./assets/img/food/fi-organic-breakfast.jpg'),
                articleTitle:'Organic Choises For Healthier Living',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            {
                imgSrc: require('./assets/img/food/fi-water-side-rest.jpg'),
                articleTitle:'% Waterside Restaurants in Istanbul for Special Events',
                publication:'March 25th, 2019',
                author: 'admin'
            },
            
        ]
    },
    recipes:[
        {
            title:'Lunch Favourite with Salad, Naan and Beans',
            reference:'Bakery, Featured, Healty. Latest Recipes, Staff Picks',
            imgSrc: require('@/assets/img/food/Yogurt-Nan.jpg'),
            href:'#',
            description:    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fugit.
                            Quasi tenetur vero iure enim earum explicabo veniam perspiciatis odit!
                            Nesciunt doloremque quaerat aperiam rerum provident officiis amet laborum sequi.
                            Ipsum a deleniti magnam animi dolorem corporis quaerat consectetur similique.
                            Rem a ratione consectetur deserunt atque adipisci hic eos ex.
                            Culpa libero enim quam architecto, iure quos dicta fugit natus?`
        },
        /*//////////////////////////////////////  PER I DATI SOTTO TOLGO A DESCRIOZIONE SOLO PER COMODITA //////////////////////////////////////////////*/        
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/Mixed-fruits.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/r-rachel-park-366508-unsplash-min.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/r-michelle-tsang-500721-unsplash-min.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/quick-summer-drink-460x295.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/perfect-cosmopolitan-460x295.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/fi2x-6-460x295.jpg'),
            href:'#',
        },
        {
            title:'Recipe title',
            reference:'Recipe reference ',
            imgSrc: require('@/assets/img/food/r-brooke-lark-96398-unsplash-min-460x295.jpg'),
            href:'#',
        },
    ]
})

export default state