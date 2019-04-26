<script>
  
import Player from '../player/player'

export default {
  name: 'NavBar',
  components:{Player},
  methods: {
    toogle_sidebar(){
      this.$emit("toogle_sidebar")
    },
    toogle_playlist(visible){
      this.$emit("toogle_playlist", visible)
    }
  }
}
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand ><i @click="toogle_sidebar" class="fas fa-bars"></i> My Super Turbo</b-navbar-brand>      
    <player @toogle_playlist="toogle_playlist"></player>
    
  </b-navbar>
</template>

