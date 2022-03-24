<template>
   <ul class="social">
        <li v-for="(el, i) in socialData" :key="i">
            <a :href="el.socialUrl"> <i :class="el.socialIcon"></i>  </a>
        </li>
    </ul>
</template>

<script>
export default {
    name:'SocialComponent',
    data(){
        return{
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
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_shared.scss';
    ul.social{
        display: flex;
        column-gap: 20px;

    }

    li{
        // border: 1px solid black;
        color: $icons;
        &:hover{
            color: $brand;
        }
    }
    // li:first-child{
    //     // margin-left: auto;
    // }
</style>