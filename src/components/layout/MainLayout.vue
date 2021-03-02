<template>
    <div class="main-layout">
        <div class="main-layout__container">
                <div class="main-layout__nav">
                   <x-header />
                </div>
                <div class="main-layout__content">
                    <slot />
                </div>
        </div>
    </div>
</template>

<script>
import XHeader from '../XHeader.vue'
export default {
    name: 'MainLayout',
    components: {
        XHeader
       
    }
}
</script>