<script>
  const msToHms = require('ms-to-hms')
  
  import PlayList from './playlist';

  export default {
    name: 'player',  
    components:{PlayList},    
    created(){
      this.init_playlist();
    },

    data() {
      return {
        playlist:[],
        current_video_index: 0,
        isPlaying: false,
        playRequested: false,
        currentTimeInterval: null,
        currentTime: 0.0,
        elapsedTime: '0:00:00',
        totalTime: "0:00:00"
      }
    },

    computed:{
      player(){
        return this.$refs.playlist.$refs.youtube.player;
      },
      has_previous(){
        return this.current_video_index>0;
      },
      current_video: function(){   
        if(this.current_video_index < this.playlist.length){
          return this.playlist[this.current_video_index];
        }else{
          return {title: "", videoID: ""};
        }
      },
      has_next(){
        return this.current_video_index < this.playlist.length-1;
      }   
    },

    methods:{
      init_playlist(){
        let _playlist= window.localStorage.getItem("videos_playlist");
        if(_playlist===null){
          _playlist= [
            {title: "BM - Rosalina", videoID: "g3n_LiD1O0A"},
            {title: "Mr Black - La Mala Racha", videoID: "KKbVY0qmC48"},
            {title: "Twister Ft. Rey Three Latino - La PupiCole", videoID: "74yo_jkHvgk"},
            {title: "Papoman - El rompecabezas", videoID: "_paXPN8aksE"},
            {title: "Mr Black - El clavo", videoID: "xFYL9ESRBG0"}
          ]; 
          window.localStorage.setItem("videos_playlist", JSON.stringify(_playlist))
        }else{
          _playlist= JSON.parse(_playlist);  
        }
        this.playlist=_playlist;
      },
      persist_playlist(){
        window.localStorage.setItem("videos_playlist", JSON.stringify(this.playlist));
      },
      toogle_playlist(visible){
        this.$emit("toogle_playlist", visible)
      },
      startCurrentTimeInterval(){
        const vm=this;
        if(this.currentTimeInterval===null){
          this.currentTimeInterval=setInterval(()=>{
            vm.player.getCurrentTime()
            .then((time)=>{
              vm.currentTime=time;
              const elapsedTime=msToHms(time*1000);
              vm.elapsedTime=elapsedTime;
            });
            
          },1000)  
        }
      },

      stopCurrentTimeInterval(){
        if(this.currentTimeInterval!==null){
          clearInterval(this.currentTimeInterval)
          this.currentTimeInterval = null
        }        
      },

      play(index){        
        this.playRequested=true;
        if(this.current_video_index=== index){
          this.player.seekTo(0, true);
        }else{
          this.current_video_index=index;
        }
      },
      play_or_pause(){
        if(this.isPlaying){
          this.isPlaying=false;
          this.player.pauseVideo();
          this.stopCurrentTimeInterval();
        }else{
          this.playRequested=true;
          this.player.playVideo();                    
        }
      },
      stop(){        
        this.player.stopVideo();
        this.isPlaying= false;
        this.stopCurrentTimeInterval();
        this.elapsedTime='0:00:00';
      },
      previous(){
        if(this.has_previous){
          this.current_video_index--;
        }
      },
      next(){
        if(this.has_next){
          this.current_video_index++;  
        }
      },
      backward(){
        if(this.isPlaying){
          const newtime= this.currentTime - 5.0;
          this.player.seekTo(newtime, true);
        }
      },
      forward(){
        if(this.isPlaying){
          const newtime= this.currentTime + 5.0;
          this.player.seekTo(newtime, true);
        }
      },
      on_play_video(index){        
        this.play(index);
      },
      on_add_video(video){
        this.playlist.push(video);
        this.persist_playlist();
      },
      on_remove_video(songs){     
        songs.forEach((s)=>{
          if(s.position-1!== this.current_video_index){
            this.playlist.splice(s.position-1 , 1);
            if(s.position-1< this.current_video_index){
              this.current_video_index--;
            }
          }
        });
        if(songs.length>0){
          this.persist_playlist();
        }
      },

      on_cued_video(){
        if(this.playRequested || this.isPlaying){
          this.player.playVideo();
        }
      },

      on_ended_video(){
        if(this.has_next){
          this.next();  
        }else{
          this.current_video_index=0;
        }
      },

      on_start_playing_video(){
        this.isPlaying=true;
        this.playRequested=false;
        this.startCurrentTimeInterval();
        this.player.getDuration()
        .then((duration)=>{
          const totalTime=msToHms(duration*1000);
          this.totalTime=totalTime;
        });
      },

      on_ytplayer_error(){
        this.stopCurrentTimeInterval();
        this.isPlaying=false;
        this.totalTime='0:00:00'
        this.elapsedTime='0:00:00';
      }
    }
  }
</script>

<template>
  <b-navbar-nav class="ml-auto">
    <!--b-form-input size="sm" class="mr-sm-2" placeholder="Enter a youtube video URL"></b-form-input-->
    <div class="marquee">
      <p>{{current_video.title}}</p>
    </div>
    

    <div class="mr-md-2 timerdisplay">{{this.elapsedTime}} / {{this.totalTime}}</div>
    <i @click="previous" class="btn-sm fas fa-step-backward" :class="has_previous ? 'text-white': 'text-gray'"></i>
    <i @click="backward" class="btn-sm fas fa-backward" :class="isPlaying ? 'text-white': 'text-gray'"></i>
    <i @click="play_or_pause" class="btn-sm text-white fas" :class="isPlaying ? 'fa-pause': 'fa-play'"></i>
    <i @click="forward" class="btn-sm fas fa-forward" :class="isPlaying ? 'text-white': 'text-gray'"></i>
    <i @click="next" class="btn-sm fas fa-step-forward" :class="has_next ? 'text-white': 'text-gray'"></i>
    <i @click="stop" class="btn-sm text-white fas fa-stop"></i>    
    <PlayList :playlist="playlist" ref="playlist" :current_video_index="current_video_index" @toogle_playlist="toogle_playlist" @play_video="on_play_video" @add_video="on_add_video" @remove_video="on_remove_video" @cued_video="on_cued_video" @start_playing_video="on_start_playing_video" @ended_video="on_ended_video" @on_ytplayer_error="on_ytplayer_error"></PlayList>
  </b-navbar-nav>  
</template>

<style>
  .timerdisplay{
    color:#FFFFFF;
    padding: .25rem;
  }

  .marquee {
    width: 280px;    
    color:#FFFF00;
    padding: .25rem;
    margin-right: 20px!important;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}
.marquee p {    
    height: 0.5rem;
    display: inline-block;
    padding-left: 100%;    
    animation: marquee 5s linear infinite;
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>