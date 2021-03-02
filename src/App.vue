<template>
  <div class="app">
    <main-layout>
      <transition name="fade-in" mode="out-in">
        <router-view/>
      </transition>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/layout/MainLayout.vue';

export default {
  components: {
    MainLayout

  }
}
</script>

<style lang="scss">
.app {

 .fade-in-enter-active {
    animation: fadeIn 2s;
  }

  .fade-in-enter-leave {
    animation: fadeIn 2s;
  }

  @keyframes fadeIn {
      0% {
        opacity: 0; 
        }
      100% {
        opacity: 1; 
        }
  }

 
}
</style>
