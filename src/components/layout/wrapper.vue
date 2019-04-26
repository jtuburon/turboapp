<script>

import NavBar from './navbar'
import Sidebar from './sidebar'
import Turbo from '../turbo/turbo'


export default {
  name: 'wrapper',
  components: {NavBar, Sidebar, Turbo},
  props: {
    config: null
  },
  data:function(){
    return {
      playlist_visible: true,
      sidebar_visible: true 
    }
  },
  computed: {
    turbo_class: function(){
      return {
        medium_turbo_container: this.playlist_visible,
        large_turbo_container: !this.playlist_visible && !this.sidebar_visible
      }

    }
  },
  methods:{
    toogle_sidebar(){
      this.sidebar_visible=!this.sidebar_visible;
    },
    toogle_playlist(visible){
      this.playlist_visible=visible;
    },
    on_bottombox_change(obj){
      this.$emit('bottombox_changed', obj);
    },
    on_middlebox_change(obj){
      this.$emit('middlebox_changed', obj);
    },
    on_topbox_change(obj){
      this.$emit('topbox_changed', obj);
    }
  }
}
</script>

<template>
  <div>
    <NavBar @toogle_sidebar="toogle_sidebar" @toogle_playlist="toogle_playlist"></NavBar>
    <div id="wrapper">
      <sidebar v-if="sidebar_visible" :config="config"
      @bottombox_changed="on_bottombox_change"
      @middlebox_changed="on_middlebox_change"
      @topbox_changed="on_topbox_change"
      ></sidebar>
      <div id="content-wrapper">
        <div class="container-fluid">
          <div :class="turbo_class">
            <center>
              <turbo :config="config"></turbo>                    
            </center>
          </div>          
        </div>
      </div>      
    </div>
    <footer class="sticky-footer" :class="sidebar_visible ? '': 'full-sticky-footer'" >
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span> Copyright © teofilismo.com</span>
            </div>
          </div>
    </footer>
  </div>
</template>

<style>
  .full-sticky-footer{
    width:100% !important;
  }

  .medium_turbo_container{    
    max-width: calc(100% - 350px) !important;
  }

  .large_turbo_container{
    width: 100%;
  }
</style>
