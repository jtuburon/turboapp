<script>
export default {
  name: 'midbox',
  
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

    font_size(){
      return 68;
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
  <g id="CajaM">
    <path id="p4" :style="base_leg_style" d="M930,450h20v-20h-20z" />
    <path id="p3" :style="base_leg_style" d="M150,450h20v-20h-20z" />
    <path id="CM" :style="frameline_style" d="M100,430h900v-200h-900z" />
    <path id="CMI" d="M120,410h860v-160h-860z" />

    <path id="PM1" class="left-speaker-box" d="M120,410h160v-160h-160z" />
    <path id="PMC1" class="left-speaker" d="M265,330c0,-35.95 -29.05,-65 -65,-65c-35.94,0 -65,29.06 -65,65c0,35.94 29.06,65 65,65c35.95,0 65,-29.06 65,-65z" />
    <path id="dm1" :style="frameline_style" d="M280,410h20v-160h-20z" />
    <path id="PM2" class="right-speaker-box" d="M820,410h160v-160h-160z" />      
    <path id="PMC2" class="right-speaker" d="M965,330c0,-35.95 -29.06,-65 -65,-65c-35.95,0 -65,29.06 -65,65c0,35.94 29.05,65 65,65c35.94,0 65,-29.06 65,-65z" />
    <path id="dm2" :style="frameline_style" d="M800,410h20v-160h-20z" />
    <path id="DM" class="medium-display" d="M300,410h500v-160h-500z" />
    
    <text id="DTM" font-size="60" font-family="destroy" x="310" y="350" textLength="480" lengthAdjust="spacingAndGlyphs" :fill="config.grating.font.color">
      {{config.label}}
    </text>
  </g>
</template>




    