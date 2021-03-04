<template>
  <div class="app">
    <main-layout>
        <router-view/>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/layout/MainLayout.vue';

export default {
  components: {
    MainLayout,

  }
}
</script>

