<script>


import Wrapper from './components/layout/wrapper'
import turboConfig from './components/turbo/turboconfig'

export default {
  name: 'app',
  components: { Wrapper},
  created(){
    this.init_config();
  },
  data: function(){
    return{
      config:{}
    };
  },

  methods:{
    init_config(){
      let _config= window.localStorage.getItem("turboconfig");      
      _config=null;
      if(_config===null){
        _config= turboConfig; 
        window.localStorage.setItem("turboconfig", JSON.stringify(_config))
      }else{
        _config= JSON.parse(_config);  
      }
      this.config=_config;
    },

    persist_config(){
      window.localStorage.setItem("turboconfig", JSON.stringify(this.config));
    },

    on_bottombox_change(obj){
      switch(obj.component){
        case "wideframe":
          this.config.bottomBox.wideframe.color= obj.color;
        break;
        case "grating.bgcolor":
          this.config.bottomBox.grating.bgcolor= obj.color;
        break;
        case "grating.fgcolor":
          this.config.bottomBox.grating.fgcolor= obj.color;
        break;
        case "frameline":
          this.config.bottomBox.frameline.color= obj.color;
        break;
        case "updecorator":
          this.config.bottomBox.upDecorator.color= obj.color;
        break;
        case "middledecorator":
          this.config.bottomBox.middleDecorator.color= obj.color;
        break;
        case "downdecorator":
          this.config.bottomBox.downDecorator.color= obj.color;
        break;
      }
      this.persist_config();
    },
    on_middlebox_change(obj){
      switch(obj.component){
        case "frameline":
          this.config.middleBox.frameline.color= obj.color;
        break;
        case "grating.font.color":
          this.config.middleBox.grating.font.color= obj.color;
        break;
        case "grating.gradient.color1":
          this.config.middleBox.grating.gradient.color1= obj.color;
        break;
        case "grating.gradient.color2":
          this.config.middleBox.grating.gradient.color2= obj.color;
        break;
        case "grating.gradient.color3":
          this.config.middleBox.grating.gradient.color3= obj.color;
        break;
        case "grating.gradient.color4":
          this.config.middleBox.grating.gradient.color4= obj.color;
        break;        
        case "speakers.gradient.color1":
          this.config.middleBox.speakers.gradient.color1= obj.color;
        break;
        case "speakers.gradient.color2":
          this.config.middleBox.speakers.gradient.color2= obj.color;
        break;
        case "speakers.gradient.color3":
          this.config.middleBox.speakers.gradient.color3= obj.color;
        break;
        case "speakerboxes.gradient.color1":
          this.config.middleBox.speakerboxes.gradient.color1= obj.color;
        break;
        case "speakerboxes.gradient.color2":
          this.config.middleBox.speakerboxes.gradient.color2= obj.color;
        break;
      }
      this.persist_config();
    },
    on_topbox_change(obj){
      switch(obj.component){
        case "frameline":
          this.config.topBox.frameline.color= obj.color;
        break;
        case "grating.font.color":
          this.config.topBox.grating.font.color= obj.color;
        break;
        case "grating.gradient.color1":
          this.config.topBox.grating.gradient.color1= obj.color;
        break;
        case "grating.gradient.color2":
          this.config.topBox.grating.gradient.color2= obj.color;
        break;
        case "grating.gradient.color3":
          this.config.topBox.grating.gradient.color3= obj.color;
        break;
        case "grating.gradient.color4":
          this.config.topBox.grating.gradient.color4= obj.color;
        break;
        case "tweeters.gradient.color1":
          this.config.topBox.tweeters.gradient.color1= obj.color;
        break;
        case "tweeters.gradient.color2":
          this.config.topBox.tweeters.gradient.color2= obj.color;
        break;
        case "tweeters.gradient.color3":
          this.config.topBox.tweeters.gradient.color3= obj.color;
        break;
      }
      this.persist_config();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template>
    <div>
      <wrapper :config="config"
      @bottombox_changed="on_bottombox_change"
      @middlebox_changed="on_middlebox_change"
      @topbox_changed="on_topbox_change"
      ></wrapper> 
    </div>
    
</template>
