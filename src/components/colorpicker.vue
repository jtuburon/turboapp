<script>
import { Chrome } from 'vue-color'

export default {
	name: 'color-picker',



	props: {
		colorvalue:null
	},

	data() {
		return {
			colors: {
				hex: this.colorvalue,
			},
			displayPicker: false,
			color: '',
		};
	},

	components: {
		'chrome-picker': Chrome
	},
	methods: {
		setColor(color) {
			this.updateColors(color);
			this.color = color;
		},
		updateColors(color) {
			if(color.slice(0, 1) == '#') {
				this.colors = {
					hex: color
				};
			}
			else if(color.slice(0, 4) == 'rgba') {
				var rgba = color.replace(/^rgba?\(|\s+|\)$/g,'').split(','),
				hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
				this.colors = {
					hex: hex,
					a: rgba[3],
				}
			}
		},
		showPicker() {
			document.addEventListener('click', this.documentClick);
			this.displayPicker = true;
		},
		hidePicker() {
			document.removeEventListener('click', this.documentClick);
			this.displayPicker = false;
		},
		togglePicker() {
			this.displayPicker ? this.hidePicker() : this.showPicker();
		},
		updateFromInput() {
			this.updateColors(this.color);
			this.$emit('color_changed', color);
		},
		updateFromPicker(color) {
			this.colors = color;
			if(color.rgba.a == 1) {
				this.color = color.hex;
			}else {
				this.color = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
			}
			this.$emit('color_changed', this.color);
		},
		documentClick(e) {
			var el = this.$refs.colorpicker,
			target = e.target;
			if(el !== target && !el.contains(target)) {
				this.hidePicker()
			}
		}
	},
}
</script>

<template>
	<div>
		<b-input-group size="sm" ref="colorpicker">
			<b-form-input type="text" v-model="colorvalue" @focus="showPicker()" @input="updateFromInput"/>			
		    <b-input-group-append>
		      	<span class="current-color" :style="'background-color: ' + colorvalue" @click="togglePicker()"></span>
				<chrome-picker v-if="displayPicker" :value="colors" @input="updateFromPicker"/>
		    </b-input-group-append>
		</b-input-group>
	</div>
	
</template>

<style type="text/css">



	.current-color {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #000;
		cursor: pointer;
		margin: 5px
	}
</style>

