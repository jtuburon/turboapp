

<script>
import LowBox from './boxes/low-box';
import MidBox from './boxes/mid-box';
import HighBox from './boxes/high-box';

export default {
  name: 'turbo',
  components: {LowBox, MidBox, HighBox},
  props: {
    config: null
  }
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1500" width="440" height="600">
    <defs>
      <radialGradient id="leftspboxgrd" gradientUnits="userSpaceOnUse"  cx="200" cy="330" r="128.403">
        <stop offset="0.5" :stop-color="config.middleBox.speakerboxes.gradient.color1"  />
        <stop offset="1" :stop-color="config.middleBox.speakerboxes.gradient.color2"  />
      </radialGradient>
      <radialGradient id="leftspgrd" gradientUnits="userSpaceOnUse"  cx="200" cy="330" r="104.327">
        <stop offset="0" :stop-color="config.middleBox.speakers.gradient.color1"  />
        <stop offset="0.5" :stop-color="config.middleBox.speakers.gradient.color2"  />
        <stop offset="1" :stop-color="config.middleBox.speakers.gradient.color3" />
      </radialGradient>
      <radialGradient id="rightspboxgrd" gradientUnits="userSpaceOnUse"  cx="900" cy="330" r="128.403">
        <stop offset="0.5" :stop-color="config.middleBox.speakerboxes.gradient.color1"  />
        <stop offset="1" :stop-color="config.middleBox.speakerboxes.gradient.color2"  />
      </radialGradient>
      
      <radialGradient id="rightspgrd" gradientUnits="userSpaceOnUse"  cx="900" cy="330" r="104.327">
        <stop offset="0" :stop-color="config.middleBox.speakers.gradient.color1"  />
        <stop offset="0.5" :stop-color="config.middleBox.speakers.gradient.color2"  />
        <stop offset="1" :stop-color="config.middleBox.speakers.gradient.color3" />
      </radialGradient>
      <radialGradient id="middisplaygrd" gradientUnits="userSpaceOnUse"  cx="550" cy="330" r="282.671">
        <stop offset="0.2" :stop-color="config.middleBox.grating.gradient.color1"  />
        <stop offset="0.3" :stop-color="config.middleBox.grating.gradient.color2"  />
        <stop offset="0.6" :stop-color="config.middleBox.grating.gradient.color3"  />
        <stop offset="1" :stop-color="config.middleBox.grating.gradient.color4"  />
      </radialGradient>


      <linearGradient id="highdisplaygrd" gradientTransform="rotate(90)">
        <stop offset="0.1" :stop-color="config.topBox.grating.gradient.color1"  />
        <stop offset="0.5" :stop-color="config.topBox.grating.gradient.color2"  />
        <stop offset="0.9" :stop-color="config.topBox.grating.gradient.color3"  />
        <stop offset="1" :stop-color="config.topBox.grating.gradient.color4"  />
      </linearGradient>


      <radialGradient id="lefttweetergrd" gradientUnits="userSpaceOnUse"  cx="270" cy="110" r="288">
        <stop offset="0.1" :stop-color="config.topBox.tweeters.gradient.color1" />
        <stop offset="0.38" :stop-color="config.topBox.tweeters.gradient.color2" />
        <stop offset="1" stop-color="#000000" />
      </radialGradient>

      <radialGradient id="lefttwettercrossgrd" gradientUnits="userSpaceOnUse"  cx="272.516" cy="111.5" r="250.2">
        <stop offset="0" stop-color="#000000"  />
        <stop offset="1" stop-color="#ffffff"  />
      </radialGradient>
      
      <radialGradient id="righttweetergrd" gradientUnits="userSpaceOnUse" cx="830" cy="122" r="288">
        <stop offset="0.1" :stop-color="config.topBox.tweeters.gradient.color1" />
        <stop offset="0.38" :stop-color="config.topBox.tweeters.gradient.color2" />
        <stop offset="1" stop-color="#000000" />
      </radialGradient>
    
      <radialGradient id="righttwettercrossgrd" gradientUnits="userSpaceOnUse" cx="829.516" cy="110.5" r="250.2">
        <stop offset="0" stop-color="#000000"  />
        <stop offset="1" stop-color="#ffffff"  />
      </radialGradient>


      <pattern id="bamboo" patternUnits="userSpaceOnUse" x="0" y="0" width="16" height="32" viewBox="0 0 16 32" patternTransform="scale(1 1)">               
       <path :stroke="config.bottomBox.grating.fgcolor"  fill-rule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z"/>
      </pattern>

      <pattern id="hexagon" patternUnits="userSpaceOnUse" x="0" y="0" width="28" height="49" viewBox="0 0 28 49" patternTransform="scale(0.6 0.6)">                       
        <path :stroke="config.bottomBox.grating.fgcolor"  d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z"/> 
      </pattern>
    </defs>  
    
    <low-box :config="config.bottomBox"></low-box>
    <mid-box :config="config.middleBox"></mid-box>
    <high-box :config="config.topBox"></high-box>
  </svg>
</template>

<style>
  tspan { white-space:pre }
  .frameline {fill: #808080;stroke: #000000;stroke-width: 4.4 } 
  .base-leg {fill: #000000; stroke: #000000;stroke-width: 4.4 } 
  
  .wide-frame { stroke: #000000;stroke-width: 4.4 } 
  .internal-wide-frame {stroke: #000000; stroke-width: 4.4} 
  
  .up-decorator {fill: #ff0000 } 
  .down-decorator {fill: #02601b } 
  .middle-decorator {fill: #fd7b00;stroke: #000000;stroke-width: 0 } 

  .left-speaker-box {fill: url(#leftspboxgrd);stroke: #000000;stroke-width: 4.4 } 
  .left-speaker {fill: url(#leftspgrd);stroke: #000000;stroke-width: 4.4 } 
  .right-speaker-box {fill: url(#rightspboxgrd);stroke: #000000;stroke-width: 4.4 }   
  .right-speaker {fill: url(#rightspgrd);stroke: #000000;stroke-width: 4.4 } 
  .medium-display {fill: url(#middisplaygrd);stroke: #000000;stroke-width: 4.4 } 
  .high-display {fill: url(#highdisplaygrd);stroke: #000000;stroke-width: 4.4 } 
  
  .left-tweeter {fill: url(#lefttweetergrd);stroke: #000000;stroke-width: 4.4 } 
  .right-tweeter {fill: url(#righttweetergrd);stroke: #000000;stroke-width: 4.4 } 

  .left-tweeter-cross { fill: url(#lefttwettercrossgrd);stroke: #000000;stroke-width: 4.4 }   
  .right-tweeter-cross { fill: url(#righttwettercrossgrd);stroke: #000000;stroke-width: 4.4 } 

  @font-face { 
    font-family: 'destroy'; 
    src: url('destroy.ttf') format('truetype'); 
    font-weight: 400; 
    font-style: normal; 
  }
</style>