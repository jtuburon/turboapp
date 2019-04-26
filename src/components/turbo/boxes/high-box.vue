<script>
export default {
  name: 'highbox',
  
  props: {
    config:null
  },

  computed: {
    frameline_style(){
      return "fill: "+ this.config.frameline.color+"; stroke: #000000;stroke-width: 4.4";
    },
    base_leg_style(){
      return "fill: "+ this.config.baseleg.color+"; stroke: #000000;stroke-width: 4.4";
    }
  },

  data() {
    return {
    }
  },

  methods: {
  
  }
}
</script>

<template>  
  <g id="CajaA">
    <path id="CA" :style="frameline_style" d="M150,210h800v-200h-800z" />
    <path id="CAI" d="M170,190h760v-160h-760z" />
    <path id="DA" class="high-display" d="M390,190h320v-160h-320z" />
    <path id="da2" :style="frameline_style" d="M710,190h20v-160h-20z" />
    <path id="da1" :style="frameline_style" d="M370,190h20v-160h-20z" />
    <g id="TWT1">
      <path id="TW1"  class="left-tweeter" d="M170,190h200v-160h-200z" />
      <path id="TWC1" class="left-tweeter-cross" d="M279.02,116.36l84.49,-5.62l-84.64,-4.2l-7.36,-64.53l-5.51,64.64l-84.49,5.62l84.64,4.2l7.36,64.53z" />
    </g>
    
    <g id="TWT2">
      <path id="TW2" class="right-tweeter" d="M730,190h200v-160h-200z" />
      <path id="TWC2" class="right-tweeter-cross" d="M836.02,115.36l84.49,-5.62l-84.64,-4.2l-7.36,-64.53l-5.51,64.64l-84.49,5.62l84.64,4.2l7.36,64.53z" />
    </g>
    <path id="p6" :style="base_leg_style" d="M880,230h20v-20h-20z" />
    <path id="p5" :style="base_leg_style" d="M200,230h20v-20h-20z" />
    
    <text id="DTM" font-size="45" font-family="destroy" x="400" y="130" textLength="300" lengthAdjust="spacingAndGlyphs" :fill="config.grating.font.color">
      {{config.label}}
    </text>
  </g>
</template>

