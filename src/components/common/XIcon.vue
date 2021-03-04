<template>
    <component :is="getIcon"></component>
</template>

<script>
const getName = (name) => `icon-${name}`;
export default {
    name: 'Icon',
    props: {
        icon:{
            type:   String,
            default: 'search',
        },
    }, 
    components: {

        [getName('delete')]: () => import('../icons/IconDelete.vue'),
        [getName('favorite')]: () => import('../icons/IconFavorite.vue'),
        [getName('search')]: () => import('../icons/IconSearch.vue'),

    },
    computed: {
        getIcon() {
            return getName(this.icon);
        },
    },
};
</script>
