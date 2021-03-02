<template>
  <div class="home">
    <div class="home__container container">
      <ul class="home__list">
        <li class="home__list-item">
          <div class="home__item-wrap-image">
            <img src="https://picsum.photos/id/237/312/368" alt="1" class="home__item-image" />
          </div>
          <div class="home__item-favorite-btn">
            <icon-favorite />
          </div>
        </li>
        <li class="home__list-item">
          <div class="home__item-wrap-image">
            <img src="https://picsum.photos/id/238/312/368" alt="2" class="home__item-image" />
          </div>
        </li>
         <li class="home__list-item">
          <div class="home__item-wrap-image">
            <img src="https://picsum.photos/id/239/312/368" alt="3" class="home__item-image" />
          </div>
        </li>
        <li class="home__list-item">
          <div class="home__item-wrap-image">
            <img src="https://picsum.photos/id/240/312/368" alt="4" class="home__item-image" />
          </div>
        </li>
        <li class="home__list-item">
          <div class="home__item-wrap-image">
            <img src="https://picsum.photos/id/241/312/368" alt="4" class="home__item-image" />
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import IconFavorite from "../components/icon/IconFavorite.vue"
export default {
  name: 'Home',
  components: {
    IconFavorite
  }
}
</script>

<style lang="scss" scoped>
.home {

  &__container {
    padding-top: 32px;
  }
  &__list {
    width: 100%;
    @include flex(space-between,center,row,wrap);
  }
  &__list-item {
    max-width: 312px;
    width: 24%;
    display: flex;
    flex-basis: 24%;
    margin-bottom: 24px;
    cursor: pointer;
    position: relative;
    &:hover {
      .home__item-favorite-btn {
        @include flex(center,center);  
      }
    }
  }
  &__item-wrap-image{
    width: 100%;
    @include padding-hack(100%, cover);
  }
  &__item-favorite-btn {
    width:40px;
    height:32px;
    background-color:$white;
    display: none;
    position: absolute;
    right: 16px;
    top:16px;
      &:hover,
      &:focus {
        background-color:rgb(146, 146, 3); 
        transition: all 0.5s ease-out;
      }
  }
}
</style>
