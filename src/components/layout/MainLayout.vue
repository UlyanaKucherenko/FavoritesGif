<template>
    <div class="main-layout">
        <div class="main-layout__container">
                <div class="main-layout__nav">
                   <x-header @search="onSearch" />
                </div>
                <div class="main-layout__content">
                 <!--   <Home :filterGifs="getSearchInput(value)" ></Home>-->
                    <slot />
                </div>
        </div>
    </div>
</template>
<script>
import XHeader from '../XHeader.vue'
//import Home from '../../views/Home.vue'
export default {
    name: 'MainLayout',
    props:{

    },
    components: {
        XHeader,
        //Home
       
    },
    methods: {
        onSearch (data) {
        console.log('child component XHeader said text', data);
    //    getSearchInput(data);
        }
    }
}
</script>