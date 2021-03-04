<template>
  <div class="x-header">
    <div class="x-header__container container">
      <nav class="x-header__nav">
        <router-link to="/" exact active-class="_active" class="x-header__nav-item"> Home </router-link>
        <router-link to="/favorite" exact active-class="_active" class="x-header__nav-item"> Favorites </router-link>
      </nav>
      <div  class="x-header__search-wrap">
        <icon-search  class="x-header__search-icon" />
        <input type="search" class="x-header__search-input" v-model="textSearch" placeholder="Search  GIF" @keyup.enter="search()"/>
        <h6>Texy: {{textSearch}}</h6>
      </div>
    </div>
   
  </div>
</template>

<script>
import IconSearch from "./icon/IconSearch.vue"
import {mapState, mapActions, mapMutations} from 'vuex'
import { favouriteArray } from "../utils"
export default {
  name: 'XHeader',
  components: {
    IconSearch
  },
  
  data(){
    return{
      textSearch:"",
      gifsItems:[],
    }
  },
  computed: {
		...mapState("searchGifs", ["searchGifs"]),
    ...mapState("randomGifs", ["randomGifs"]),
    ...mapState("favorite", ["favorite"]),

    input_value: {
      get() {
        return this.$store.state.value;
      },
      set(value) {
        this.$store.dispatch("setValue", value)
      }
    }
	},
  methods:{

    search() {

      if(this.$store.state.value.length === 0) {
        console.log('Input can not be empty');
      } 
      else {
         console.log("Search Run!");
         console.log("Value: ",this.$store.state.value);
         this.getSearchGif();
      }

    console.log('search', this.textSearch);
    
    this.$emit('search', {text:this.textSearch});
      
    },

    ...mapActions('searchGifs', ['addItemToSearchGifs']),
    ...mapMutations('favorite', ['changeFavoriteState']),
    ...mapMutations(['setValue']),

     async getSearchGif(){
        try {
          const apiKey="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb"
          const q = this.$store.state.value;
          const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q="${q}"`);
          const parsedRes = await res.json();
          console.log('parsedRes:',parsedRes);

          const dataMainGif = parsedRes.data;
          dataMainGif.forEach(item =>{
            this.addItemToSearchGifs(item);
          }); 
            console.log(this.searchGifs);
          //return parsedRes;
          }
        catch (error) {
        console.log(error);
        }
    },


  async created() {
    const data = favouriteArray;
      if (data) {
            this.changeFavoriteState(data);
        } else {
            this.changeFavoriteState([]);
        }
    }
  }
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
