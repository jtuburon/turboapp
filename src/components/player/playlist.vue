<script>

import { required, url } from "vuelidate/lib/validators";

export default {
  name: 'PlayList',
  props: {   
    current_video_index: Number,
    playlist: Array
  },

  data() {
    return {
      show_playlist: true,

      playerVars: {
        "autoplay": 0,
        "controls": 0,
        "playsinline" : 1
      },
      fields: {
        position: {
          label: 'No.',
          sortable: true
        },
        title: {
          label: 'Song title',
          sortable: false
        }
      },
      
      new_song_title: "",
      new_video_url:"",      
      new_video_dialog_show: false,

      selectedSongs: []
    }
  },

  validations: {
    new_song_title: {required},
    new_video_url: { required, url}    
  },

  computed: {
    songs_list(){
      const songs= this.playlist.map((song, index)=>{ return {position: index+1, title: song.title}})
      return songs;
    },

    current_video: function(){   
      if(this.current_video_index < this.playlist.length){
        return this.playlist[this.current_video_index];
      }else{
        return {title: "", videoID: ""};
      }
    },

    is_form_invalid(){
      return this.$v.new_song_title.$invalid || this.$v.new_video_url.$invalid;      
    },

    can_remove(){
      return this.selectedSongs.length>0 && this.playlist.length>1;
    }
  },

  methods: {
    playing() {
      this.$emit("start_playing_video");      
    },

    on_cued_video(){
      this.$emit("cued_video")      
    },

    on_ended_video(){
      this.$emit("ended_video")      
    },
    on_player_error(p, e){
      this.$emit("on_ytplayer_error")      
    },

    onClose() {
      this.show_playlist = false
      this.$emit("toogle_playlist", this.show_playlist);    
    },

    onToggle() {
      this.show_playlist = !this.show_playlist;
      this.$emit("toogle_playlist", this.show_playlist);    
    },

    play_video(song, index){
      this.$emit("play_video", index);
    },

    decorate_row(item) {
      if (item.position === this.current_video_index +1){
        return 'unselectable table-info';
      }
      return 'unselectable';
    },

    add_song(){
      const videoID= this.$youtube.getIdFromUrl(this.new_video_url);
      const video={title: this.new_song_title,
        videoID: videoID
      }
      this.new_video_dialog_show=false;
      this.$emit("add_video", video);
    },

    songSelected(songs){
      this.selectedSongs= songs;
    },

    remove_video(){
      if(this.can_remove){
        this.$emit("remove_video", this.selectedSongs);
      }
    }
  }
}
</script>

<style>
  .unselectable{
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;    
  }
</style>

<template>
  <div>
    <i id="settingsPopup" @click="onToggle" class="btn-sm text-white fas fa-list"></i>  
    <div id="popover-container" :class="show_playlist?'':'hide_playlist'" >
      
    </div>
    <b-popover container="popover-container" no-fade placement="bottom" target="settingsPopup" ref="popover" triggers="" show>
      <template slot="title">
        <b>My Super Turbo playlist</b>
        <b-button  class="close" aria-label="Close" @click="onClose">
          <span class="d-inline-block" aria-hidden="true">&times;</span>
        </b-button>
      </template>
      <div>
        <b-table select-mode="single" selectable :tbody-tr-class="decorate_row" @row-dblclicked="play_video"  small :items="songs_list" :fields="fields" @row-selected="songSelected"></b-table>
      </div>
      <b-navbar type="dark" variant="secondary">
        <b-navbar-nav>
          <i v-b-modal.modal-1 class="btn-sm fas fa-plus-circle text-white"></i>    
          <i class="btn-sm fas fa-minus-circle" :class="can_remove ? 'text-white': 'text-gray'" @click="remove_video"></i>          
        </b-navbar-nav>
      </b-navbar>    
      <br>
        <youtube :video-id="current_video.videoID" :player-vars="playerVars" ref="youtube" @playing="playing" width=320 height=200 @cued="on_cued_video" @ended="on_ended_video" @error="on_player_error"></youtube>
    </b-popover>

    <b-modal id="modal-1" v-model="new_video_dialog_show" title="Add a song to your playlist">
      <b-form>
        <b-form-group  label-size="sm" label="Song's Title" label-for="input-1"  label-class="m-0 p-0">
           <b-form-input v-model="new_song_title" type="text" size="sm" placeholder="Enter the song's title"></b-form-input>
        </b-form-group>         
        <b-form-group  label-size="sm" label="Song's URL" label-for="input-1"  label-class="m-0 p-0">
           <b-form-input v-model="new_video_url" type="url" size="sm" placeholder="Enter a valid YouTube video URL"></b-form-input>
        </b-form-group>
      </b-form>
      <div slot="modal-footer" class="modal-footer">
        <b-button variant="secondary" size="sm" @click="new_video_dialog_show=false">Close</b-button>        
        <b-button :disabled="is_form_invalid" variant="primary" size="sm" @click="add_song">Add song</b-button>
      </div>
    </b-modal>
  </div>
</template>

<style>
  .popover{
    max-width: 100% !important; /* Max Width of the popover (depending on the container!) */
  }

  .popover-header {
    background-color: #17a2b8 !important;
  }

  .hide_playlist{
    display: none; 
  }
</style>