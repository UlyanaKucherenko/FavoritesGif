<template>
  <div class="home">
    <div class="home__container container">
     
      <ul class="home__list">
        <li class="home__list-item" v-for="item of gifs" :key="item.id">
          <div class="home__item-wrap-image">
            <img :src="item.images.fixed_height.url" alt="1" class="home__item-image" />
          </div>
          <div class="home__item-favorite-btn" :class="isInFavoriteList(item.id) ? 'favorite' : ''" @click="selectFavorite(item.id)">
            <icon-favorite />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconFavorite from "../components/icon/IconFavorite.vue"
import { getRandomGifs } from "../utils.js"
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'Home',
  components: {
    IconFavorite
  },
  data(){
    return{
      gifs:[],
      favoriteGifs: [],
    }
  },
  computed: {
		...mapState("randomGifs", ["randomGifs"]),
    ...mapState("searchGifs", ["searchGifs"]),
    ...mapState("favorite", ["favorite"]),
	},
  methods: {
    ...mapActions('randomGifs', ['addItemToRandomGifs']),
    ...mapMutations('favorite', ['changeFavoriteState']),
    

     selectFavorite(id) {

            if (this.favoriteGifs.includes(id)) {
                this.favoriteGifs = this.favoriteGifs.filter(item => item !== id)
                console.log('this.favoriteGifs delete', this.favoriteGifs);
                this.changeFavoriteState(this.favoriteGifs);
               
              
            } else {
                this.favoriteGifs.push(id);
                this.changeFavoriteState(this.favoriteGifs);
                console.log('this.favoriteGifs add', this.favoriteGifs);                
            }
            
            localStorage.setItem("favoriteGifs", JSON.stringify(this.favoriteGifs)) ; 
        },

         isInFavoriteList(id) {
            let isInFavorite = false;
            if (this.favoriteGifs.includes(id)) {
                isInFavorite = true;
            } else {
                isInFavorite = false;
            }
            return isInFavorite;
        },

    /* async getGif(){
        try {
          const apiKey="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb"
          const q = "cats"
          const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q="${q}"`);
          const parsedRes = await res.json();
          console.log('parsedRes:',parsedRes);
         // this.gifs=parsedRes.data;
         // console.log('gifs:',this.gifs);
          return parsedRes;
          }
        catch (error) {
        console.log(error);
        }
    }*/
  },
   mounted(){
  },
  async created() {
    if (this.randomGifs.length === 0) {
			const dataGif = await getRandomGifs();
      const data = dataGif.data;
			data.forEach(item =>{
				this.addItemToRandomGifs(item);
			});
      this.gifs = this.randomGifs;
		} 
    else {
      this.gifs = this.randomGifs;
      }
    },
 
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
   .favorite{
       background-color:rgb(146, 146, 3);
    }
}
</style>
