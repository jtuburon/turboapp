<script>
export default {
  name: 'lowbox',
  
  props: {
    config: null
  },
  computed: {
    frameline_style(){
      return "fill: "+ this.config.frameline.color+"; stroke: #000000;stroke-width: 4.4";
    },
    base_leg_style(){
      return "fill: "+ this.config.baseleg.color+"; stroke: #000000;stroke-width: 4.4";
    },
    wide_frame_style(){
      return "fill: "+this.config.wideframe.color+ "; stroke: #000000;stroke-width: 4.4";
    },
    internal_wide_frame_style(){
        return "fill: "+ this.config.grating.bgcolor+"; stroke: #000000; stroke-width: 4.4";
        
      },
    grating_style(){
        return "fill: url(#"+ this.config.grating.type+ "); stroke: #000000; stroke-width: 4.4";  
      },
    up_decorator_style(){
        return "fill: "+ this.config.upDecorator.color;
      },
    down_decorator_style(){
        return "fill: "+ this.config.downDecorator.color;
      },
    middle_decorator_style(){
        return "fill: "+ this.config.middleDecorator.color;
      },
  },

  methods: {
  
  }
}
</script>

<template>
  <g id="CajaB">
    <path id="CB" :style="frameline_style" d="M50,1350h1000v-900h-1000z" />
    <path id="CBI" :style="wide_frame_style" d="M70,1330h960v-860h-960z" />
    <path id="ICB" :style="frameline_style" d="M170,1230h760v-660h-760z" style=':fill="a"'/>
    <!--path id="ICBI" :style="internal_wide_frame_style" d="M190,1210h720v-620h-720z" /-->
    
    <path id="ICBI" :style="internal_wide_frame_style" d="M190,1210h720v-620h-720z" />
    <path id="ICBIG" :style="grating_style" d="M190,1210h720v-620h-720z" />
    <path id="p2" :style="base_leg_style" d="M930,1370h20v-20h-20z" />
    <path id="p1" :style="base_leg_style" d="M150,1370h20v-20h-20z" />
    <g id="LU">
      <path id="LU1" :style="up_decorator_style" d="M70.84,565.42l101.16,30.58v-25l-101.16,-30.58zM70.84,565.42l101.16,30.58v-25l-101.16,-30.58z" />
      <path id="LU3" :style="down_decorator_style" d="M70.84,665.42l101.16,30.58v-25l-101.16,-30.58zM70.84,665.42l101.16,30.58v-25l-101.16,-30.58z" />
      <path id="LU2" :style="middle_decorator_style" d="M70.84,615.42l101.16,30.58v-25l-101.16,-30.58zM70.84,615.42l101.16,30.58v-25l-101.16,-30.58z" />
    </g>
    <g id="LD">
      <path id="LD1" :style="up_decorator_style" d="M172,1103.42l-101.16,30.58v25l101.16,-30.58zM172,1103.42l-101.16,30.58v25l101.16,-30.58z" />
      <path id="LD3" :style="down_decorator_style" d="M172,1203.42l-101.16,30.58v25l101.16,-30.58zM172,1203.42l-101.16,30.58v25l101.16,-30.58z" />
      <path id="LD2" :style="middle_decorator_style" d="M172,1153.42l-101.16,30.58v25l101.16,-30.58zM172,1153.42l-101.16,30.58v25l101.16,-30.58z" />
    </g>
    <g id="RD">
      <path id="RD1" :style="up_decorator_style" d="M929.84,1128.42l101.16,30.58v-25l-101.16,-30.58zM929.84,1128.42l101.16,30.58v-25l-101.16,-30.58z" />
      <path id="RD3" :style="down_decorator_style" d="M929.84,1228.42l101.16,30.58v-25l-101.16,-30.58zM929.84,1228.42l101.16,30.58v-25l-101.16,-30.58z" />
      <path id="RD2" :style="middle_decorator_style" d="M929.84,1178.42l101.16,30.58v-25l-101.16,-30.58zM929.84,1178.42l101.16,30.58v-25l-101.16,-30.58z" />
    </g>
    <g id="RU">
      <path id="RU1" :style="up_decorator_style" d="M1031,542.42l-101.16,30.58v25l101.16,-30.58zM1031,542.42l-101.16,30.58v25l101.16,-30.58z" />
      <path id="RU3" :style="down_decorator_style" d="M1031,642.42l-101.16,30.58v25l101.16,-30.58zM1031,642.42l-101.16,30.58v25l101.16,-30.58z" />
      <path id="RU2" :style="middle_decorator_style" d="M1031,592.42l-101.16,30.58v25l101.16,-30.58zM1031,592.42l-101.16,30.58v25l101.16,-30.58z" />
    </g>

     <image :href="config.grating.imageUrl" x="190" y="590" height="620" width="720" opacity="0.5"/>
  </g>
</template>




    