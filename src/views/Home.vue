<template>
  <div class="home">
    <div class="home__header">
        <div class="home__header-container container">
            <nav class="home__nav">
                <router-link to="/" exact active-class="_active" class="home__nav-item"> Home </router-link>
                <router-link to="/favorite" exact active-class="_active" class="home__nav-item"> Favorites </router-link>
            </nav>
            <div  class="home__search-wrap">
                <x-icon icon=search  class="home__search-icon" />
                <input type="search" class="home__search-input" v-model="query" placeholder="Search  GIF" @keyup.enter="handleSubmit()"/>
            </div>
        </div>   
    </div>
    <div class="home__main">
        <div class="container">
            <ul class="home__list">
                <li class="home__list-item" v-for="item of gifsArray" :key="item.id">
                    <div class="home__item-wrap-image">
                        <img :src="item.images.fixed_height.url" alt="1" class="home__item-image" />
                    </div>
                    <div class="home__item-favorite-btn" :class="isInFavoriteList(item.id) ? 'favorite' : ''" @click="selectFavorite(item.id)">
                        <x-icon icon=favorite /> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { getRandomGifs} from "../utils.js"

export default {
  name: "Home",
  components: {
    
  },
  
  data() {
    return {
      query: "",
      offset:20,
      limit:20,
      favoriteGifs:[],
      gifsArray:[],
    };
  },
  computed: {
    ...mapState("gifs", ["gifs"]),
    ...mapState("randomGifs", ["randomGifs"]),
  },
  methods: {
    ...mapActions("gifs", ["getGifsByQuery"]),
    ...mapMutations('favorite', ['changeFavoriteState']),
    ...mapActions('randomGifs', ['addItemToRandomGifs']),
    
   async handleSubmit() {
       if(!this.query === "") {
           console.log("no! words!");
       }
       else{
           await this.getGifsByQuery({query:this.query,limit:this.limit, offset:this.offset});
           this.gifsArray = this.gifs;
       }
    },

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
  },

async created() {
  

    if (this.randomGifs.length === 0) {
			const dataGif = await getRandomGifs();
      const data = dataGif.data;
			data.forEach(item =>{
				this.addItemToRandomGifs(item);
			});
      this.gifsArray = this.randomGifs;
		} 
    else {
      this.gifsArray = this.randomGifs;
      }
 
    }

};
</script>
<style lang="scss">
.home {
  
    &__header{
        background-color: #464646;
        @include flex(center,center,row,wrap);
        min-height:104px;
        margin-bottom: 32px;
        
        z-index: 5;
        position: fixed;
        width: 100%;
        top:0;
    }

    &__header-container {
        @include flex(space-between,center,row,wrap);
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
    background-color: #464646;
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

  &__main {
      margin-top: 128px;
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