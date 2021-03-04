<template>
  <div class="favorite">
    <x-header />
    <div class="favorite__container container">
         <ul class="favorite__list">
        <li class="favorite__list-item" v-for="item of favoriteGifArray" :key="item.id">
          <div class="favorite__item-wrap-image">
            <img :src="item.images.fixed_height.url" alt="1" class="favorite__item-image" />
          </div>
           <div class="favorite__item-delete-btn" @click="deleteItem(item.id)">
            <x-icon icon=delete class="favorite__delete-btn" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import {mapState, mapMutations} from 'vuex'
import {  favouriteArray} from "../utils.js"
import XHeader from "../components/XHeader.vue"

export default {
  name:'Favorite',
  components: {
  XHeader
  },
  data(){
    return{
      favoriteGifArray:[],
      itemId:[],
    }
  },
  computed:{
    ...mapState("favorite", ["favorite"]),
    ...mapState("gifs", ["gifs"]),
    ...mapState("randomGifs", ["randomGifs"]),
    
  },
  methods: {
    ...mapMutations("favorite", ["changeFavoriteState"]),

      getDataById() {
         let dataForFavorite = [];
        dataForFavorite = this.randomGifs.filter(item => this.favorite.includes(item.id));
        this.favoriteGifArray = dataForFavorite;
        },

      deleteItem(id){
        this.favoriteGifArray = this.favoriteGifArray.filter(item => item.id !== id);
        console.log(this.favoriteGifArray);
        this.itemId = this.favoriteGifArray.map((item)=>{
          if(item.id) {
            return item.id;
          }
        });
        this.changeFavoriteState(this.itemId);
        localStorage.setItem("favoriteGifs", JSON.stringify(this.favorite)) ; 
      },
  },
 
   async created(){

    const data = favouriteArray;
      if (data) {
            this.changeFavoriteState(data);
        } else {
            this.changeFavoriteState([]);
        }
    this.getDataById();
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
