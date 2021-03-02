<template>
  <div class="favorite">
    <div class="favorite__container container">
         <ul class="favorite__list">
        <li class="favorite__list-item">
          <div class="favorite__item-wrap-image">
            <img src="https://picsum.photos/id/240/312/368" alt="1" class="favorite__item-image" />
          </div>
           <div class="favorite__item-delete-btn">
            <icon-delete class="favorite__delete-btn" />
          </div>
        </li>
        <li class="favorite__list-item">
          <div class="favorite__item-wrap-image">
            <img src="https://picsum.photos/id/241/312/368" alt="2" class="favorite__item-image" />
          </div>
        </li>
         <li class="favorite__list-item">
          <div class="favorite__item-wrap-image">
            <img src="https://picsum.photos/id/242/312/368" alt="3" class="favorite__item-image" />
          </div>
        </li>
        <li class="favorite__list-item">
          <div class="favorite__item-wrap-image">
            <img src="https://picsum.photos/id/243/312/368" alt="4" class="favorite__item-image" />
          </div>
        </li>
        <li class="favorite__list-item">
          <div class="favorite__item-wrap-image">
            <img src="https://picsum.photos/id/244/312/368" alt="4" class="favorite__item-image" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IconDelete from "../components/icon/IconDelete.vue"
export default {
  name:'Favorite',
  components: {
    IconDelete
  }
}
</script>
<style lang="scss" scoped>
.favorite{

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
      .favorite__item-delete-btn {
        @include flex(center,center);  
      }
    }
  }
  &__item-wrap-image{
    width: 100%;
    @include padding-hack(100%, cover);
  }

  &__delete-btn {
    color:red;
  }

   &__item-delete-btn {
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
