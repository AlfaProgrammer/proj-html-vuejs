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
                title:'Food Corner: Top Japanese Restaurant for Sushi',
                reference:'March 25th, 2019',
                author: 'admin',
                href:'#',
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi.
                                 Similique autem iste nesciunt saepe alias vitae fugit, ratione voluptas.
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi.
                                 Similique autem iste nesciunt saepe alias vitae fugit, ratione voluptas.`

            },
            {
                imgSrc: require('./assets/img/food/fi-roundup.jpg'),
                title:'Roundup: My New Favourite Recipes For Healthy Living',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            {
                imgSrc: require('./assets/img/food/fi-toasts.jpg'),
                title:'Why These Toasts with Tea are My New Favourite',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            {
                imgSrc: require('./assets/img/food/fi-korean-food.jpg'),
                title:'Meal Prep: Korean Bibimbap with Kimeki',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            {
                imgSrc: require('./assets/img/food/fi-street-food.jpg'),
                title:'Exploring Street Food in Bangkok',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            {
                imgSrc: require('./assets/img/food/fi-organic-breakfast.jpg'),
                title:'Organic Choises For Healthier Living',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            {
                imgSrc: require('./assets/img/food/fi-water-side-rest.jpg'),
                title:'% Waterside Restaurants in Istanbul for Special Events',
                reference:'March 25th, 2019',
                author: 'admin',
                href: '#',
            },
            
        ]
    },
    advertisementData:{
        latestRecipesImg: require('@/assets/img/food/ad-bg.jpg'),
        singaporeImg: require('@/assets/img/singapore-featured-image.jpg')
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
    ],
    culinaryCollections:[
        {
            collectionName:'Drink',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/drinks-recipes.png')
        },
        {
            collectionName:'Soup',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/soups-recipes.png')
        },
        {
            collectionName:'Bakery',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/baking-recipes.png')
        },
        {
            collectionName:'Dinner',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/dinner-recipes.png')
        },
        {
            collectionName:'Healthy',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/healthy-recipes.png')
        },
        {
            collectionName:'Staff Picks',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/staff-picks.png')
        },
        {
            collectionName:'Appetisers',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/premium-recipes.png')
        },
        {
            collectionName:'Quick & Easy',
            href:'#',
            collectionThumb: require('@/assets/img/svg-and-png-Icons/quick-easy-recipes.png')
        },
    ],
    footerData:{
        subscribeData:{
            gift:'Free eBook',            
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, sapiente animi quasi modi distinctio ex aspernatur.',
            reference: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        },
        contactsData:{
            location:   `775 New York Ave. Brooklyn, Kings, New York 11203`,
            phone:'+ 0100-505-0000',
            email: 'info@your-domain.com'
        },
        appsData:{
            playStoreImg: require('@/assets/img/svg-and-png-Icons/download-android-200x66.png'),
            playStoreLink: 'https://store.google.com/it?hl=it',
            appStoreImg: require('@/assets/img/svg-and-png-Icons/download-app-store-200x66.png'),
            appStoreLink:'https://www.apple.com/app-store/',
        }
    }
})

export default state