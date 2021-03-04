<template>
  <div class="x-header">
    <div class="x-header__container container">
      <nav class="x-header__nav">
        <router-link to="/" exact active-class="_active" class="x-header__nav-item"> Home </router-link>
        <router-link to="/favorite" exact active-class="_active" class="x-header__nav-item"> Favorites </router-link>
      </nav>
      <div  class="x-header__search-wrap">
        <x-icon icon=search  class="x-header__search-icon" />
        <input type="search" class="x-header__search-input" placeholder="Search  GIF"/>
      </div>
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'XHeader',
  components: {
  },
}
</script>

<style lang="scss">
.x-header {
    background-color: #464646;
    &__container{
       @include flex(space-between,center,row,wrap);
       min-height:104px;
    }
    &__nav-item {
      @include text(18px,500, $white);
      text-transform: uppercase;
      position: relative;
      display: inline-block;

    &:hover{
      color:$white;
      text-decoration: underline;
      transition: all 0.5s ease-out;
    }

    &.router-link-exact-active {
       text-decoration: underline;
    }

    &:first-child{
      margin-right: 53px;
    }
  }

  &__search-wrap {
    position: relative;
    width: 100%;
    max-width: 872px;
  }

   &__search-icon {
    position: absolute;
    left:16px;
    top:50%;
    transform: translateY(-50%);
  }

  &__search-input {
    max-width: 872px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 0 40px;
    @include flex(center,center,row);
    min-height: 56px;
    overflow: hidden;
    outline: none;
    border: none;
    @include text(16px,500, #706d6d);

    &[type="search"]::placeholder { 
      @include text(16px,400, #C0C0C0);
    } 

    &:focus::placeholder {
      color: transparent
    }
  }
}
</style>
