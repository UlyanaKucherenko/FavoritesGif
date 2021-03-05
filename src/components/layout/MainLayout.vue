<template>
    <div class="main-layout">
        <div class="main-layout__container">
                <div class="main-layout__content">
               <slot /> 
                </div>
        </div>
    </div>
</template>
<script>
//import Favorite from '../../views/Favorite.vue';
//import Home from '../../views/Home.vue'
export default {
    name: 'MainLayout',
    props:{},
    components: {
     //   Home,
     //   Favorite
       
    },
    methods: {
        onSearch (data) {
        console.log('child component XHeader said text', data);
    //    getSearchInput(data);
        }
    }
}
</script>