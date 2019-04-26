<script>
import ColorPicker from '../colorpicker';
export default {
	name: 'sidebar',
	props: {
		config: null
	},
	data: function(){
		return {
			colors: "#194d33"
		}
	},
	components: {
		ColorPicker
	},
	computed: {
	},

	methods:{
		on_bottombox_wideframe_color(color){
			this.$emit('bottombox_changed', {component: "wideframe", color: color});
		},
		on_bottombox_grating_bgcolor(color){
			this.$emit('bottombox_changed', {component: "grating.bgcolor", color: color});
		},
		on_bottombox_grating_fgcolor(color){
			this.$emit('bottombox_changed', {component: "grating.fgcolor", color: color});
		},
		on_bottombox_frameline_color(color){
			this.$emit('bottombox_changed', {component: "frameline", color: color});
		},
		on_bottombox_updecorator_color(color){
			this.$emit('bottombox_changed', {component: "updecorator", color: color});
		},
		on_bottombox_middledecorator_color(color){
			this.$emit('bottombox_changed', {component: "middledecorator", color: color});
		},
		on_bottombox_downdecorator_color(color){
			this.$emit('bottombox_changed', {component: "downdecorator", color: color});
		},

		//Middlebox
		on_middlebox_label_change(value){
			this.$emit('middlebox_changed', {component: "label", label: value});
		},
		on_middlebox_frameline_color(color){
			this.$emit('middlebox_changed', {component: "frameline", color: color});
		},
		on_middlebox_grating_fontcolor(color){
			this.$emit('middlebox_changed', {component: "grating.font.color", color: color});
		},
		on_middlebox_grating_color1(color){
			this.$emit('middlebox_changed', {component: "grating.gradient.color1", color: color});
		},
		on_middlebox_grating_color2(color){
			this.$emit('middlebox_changed', {component: "grating.gradient.color2", color: color});
		},
		on_middlebox_grating_color3(color){
			this.$emit('middlebox_changed', {component: "grating.gradient.color3", color: color});
		},
		on_middlebox_grating_color4(color){
			this.$emit('middlebox_changed', {component: "grating.gradient.color4", color: color});
		},
		on_middlebox_speakers_color1(color){
			this.$emit('middlebox_changed', {component: "speakers.gradient.color1", color: color});
		},
		on_middlebox_speakers_color2(color){
			this.$emit('middlebox_changed', {component: "speakers.gradient.color2", color: color});
		},
		on_middlebox_speakers_color3(color){
			this.$emit('middlebox_changed', {component: "speakers.gradient.color3", color: color});
		},
		on_middlebox_speakerboxes_color1(color){
			this.$emit('middlebox_changed', {component: "speakerboxes.gradient.color1", color: color});
		},
		on_middlebox_speakerboxes_color2(color){
			this.$emit('middlebox_changed', {component: "speakerboxes.gradient.color2", color: color});
		},

		//TopBox

		on_topbox_label_change(value){
			this.$emit('topbox_changed', {component: "label", label: value});
		},
		on_topbox_frameline_color(color){
			this.$emit('topbox_changed', {component: "frameline", color: color});
		},
		on_topbox_grating_fontcolor(color){
			this.$emit('topbox_changed', {component: "grating.font.color", color: color});
		},
		on_topbox_grating_color1(color){
			this.$emit('topbox_changed', {component: "grating.gradient.color1", color: color});
		},
		on_topbox_grating_color2(color){
			this.$emit('topbox_changed', {component: "grating.gradient.color2", color: color});
		},
		on_topbox_grating_color3(color){
			this.$emit('topbox_changed', {component: "grating.gradient.color3", color: color});
		},
		on_topbox_grating_color4(color){
			this.$emit('topbox_changed', {component: "grating.gradient.color4", color: color});
		},
		on_topbox_tweeters_color1(color){
			this.$emit('topbox_changed', {component: "tweeters.gradient.color1", color: color});
		},
		on_topbox_tweeters_color2(color){
			this.$emit('topbox_changed', {component: "tweeters.gradient.color2", color: color});
		}
	}
}
</script>

<template>
	<div >
		<div class="sidebar navbar-nav">      
			<div role="tablist">
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion-1 variant="info">Bottom Box</b-button>
					</b-card-header>
					<b-collapse visible id="accordion-1" accordion="my-accordion" role="tabpanel">
						<b-card-body body-class="p-2">
							<b-form-group class="custom_margin"  label-size="sm" label="Frame" label-for="input-1" label-class="m-0 p-0">
								<color-picker :colorvalue="config.bottomBox.wideframe.color" @color_changed="on_bottombox_wideframe_color"></color-picker>				
							</b-form-group>
							<b-form-group  label-size="sm" label="Edge" label-for="input-1"  label-class="m-0 p-0">
								<color-picker :colorvalue="config.bottomBox.frameline.color" @color_changed="on_bottombox_frameline_color"></color-picker>				
							</b-form-group>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" header-bg-variant="success" header-text-variant="white" class="p-1" role="tab">
									Grating
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Type" label-for="input-1"  label-class="m-0 p-0">
										<b-form-select size="sm" v-model="config.bottomBox.grating.type" class="mb-3">
											<option value="bamboo">Bamboo</option>
											<option value="hexagon">Hexagon</option>
										</b-form-select>
									</b-form-group>
									<b-form-group  label-size="sm" label="BG Color" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.bottomBox.grating.bgcolor" @color_changed="on_bottombox_grating_bgcolor"></color-picker>
									</b-form-group>
									<b-form-group  label-size="sm" label="FG color" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.bottomBox.grating.fgcolor" @color_changed="on_bottombox_grating_fgcolor"></color-picker>
									</b-form-group>

									<b-form-group  label-size="sm" label="Image URL" label-for="input-1"  label-class="m-0 p-0">
										<b-form-input type="url" size="sm" v-model="config.bottomBox.grating.imageUrl" :value="config.bottomBox.grating.imageUrl"></b-form-input>
									</b-form-group>

								</b-card-body>
							</b-card>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Decorators
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group  label-size="sm" label="Top" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.bottomBox.upDecorator.color" @color_changed="on_bottombox_updecorator_color"></color-picker>        
									</b-form-group>
									<b-form-group  label-size="sm" label="Middle" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.bottomBox.middleDecorator.color" @color_changed="on_bottombox_middledecorator_color"></color-picker>        
									</b-form-group>
									<b-form-group  label-size="sm" label="Bottom" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.bottomBox.downDecorator.color" @color_changed="on_bottombox_downdecorator_color"></color-picker>        
									</b-form-group>
								</b-card-body>
							</b-card>			
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion-2 variant="info">Middle Box</b-button>
					</b-card-header>
					<b-collapse id="accordion-2"  accordion="my-accordion" role="tabpanel">
						<b-card-body body-class="p-2">
							<b-form-group label-size="sm" label="Edge" label-for="input-1"  label-class="m-0 p-0">
								<color-picker :colorvalue="config.middleBox.frameline.color" @color_changed="on_middlebox_frameline_color"></color-picker>				
							</b-form-group>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Grating
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Label" label-for="input-1"  label-class="m-0 p-0">
										<b-form-input type="text" size="sm" v-model="config.middleBox.label" :value="config.middleBox.label" @change="on_middlebox_label_change"></b-form-input>
									</b-form-group>
									
									<b-form-group label-size="sm" label="Font color" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.grating.font.color" @color_changed="on_middlebox_grating_fontcolor"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 1" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.grating.gradient.color1" @color_changed="on_middlebox_grating_color1"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 2" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.grating.gradient.color2" @color_changed="on_middlebox_grating_color2"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 3" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.grating.gradient.color3" @color_changed="on_middlebox_grating_color3"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 4" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.grating.gradient.color4" @color_changed="on_middlebox_grating_color4"></color-picker>				
									</b-form-group>
								</b-card-body>
							</b-card>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Speakers
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Color 1" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.speakers.gradient.color1" @color_changed="on_middlebox_speakers_color1"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 2" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.speakers.gradient.color2" @color_changed="on_middlebox_speakers_color2"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 3" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.speakers.gradient.color3" @color_changed="on_middlebox_speakers_color3"></color-picker>				
									</b-form-group>
								</b-card-body>

							</b-card>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Speaker Boxes
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Color 1" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.speakerboxes.gradient.color1" @color_changed="on_middlebox_speakerboxes_color1"></color-picker>
									</b-form-group>
									<b-form-group label-size="sm" label="Color 2" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.middleBox.speakerboxes.gradient.color2" @color_changed="on_middlebox_speakerboxes_color2"></color-picker>
									</b-form-group>
								</b-card-body>

							</b-card>						
						</b-card-body>
					</b-collapse>
				</b-card>

				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion-3 variant="info">Top Box</b-button>
					</b-card-header>
					<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
						<b-card-body body-class="p-2">
							<b-form-group label-size="sm" label="Edge" label-for="input-1"  label-class="m-0 p-0">
								<color-picker :colorvalue="config.topBox.frameline.color" @color_changed="on_topbox_frameline_color"></color-picker>				
							</b-form-group>			
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Grating
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Label" label-for="input-1"  label-class="m-0 p-0">
										<b-form-input type="text" size="sm" v-model="config.topBox.label" :value="config.topBox.label" @change="on_topbox_label_change"></b-form-input>
									</b-form-group>
									<b-form-group label-size="sm" label="Font color" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.grating.font.color" @color_changed="on_topbox_grating_fontcolor"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 1" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.grating.gradient.color1" @color_changed="on_topbox_grating_color1"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 2" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.grating.gradient.color2" @color_changed="on_topbox_grating_color2"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 3" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.grating.gradient.color3" @color_changed="on_topbox_grating_color3"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 4" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.grating.gradient.color4" @color_changed="on_topbox_grating_color4"></color-picker>				
									</b-form-group>
								</b-card-body>
							</b-card>
							<b-card no-body class="mb-1">
								<b-card-header header-tag="header" class="p-1" role="tab" header-bg-variant="success" header-text-variant="white">
									Tweeters
								</b-card-header>
								<b-card-body body-class="p-1">
									<b-form-group label-size="sm" label="Color 1" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.tweeters.gradient.color1" @color_changed="on_topbox_tweeters_color1"></color-picker>				
									</b-form-group>
									<b-form-group label-size="sm" label="Color 2" label-for="input-1"  label-class="m-0 p-0">
										<color-picker :colorvalue="config.topBox.tweeters.gradient.color2" @color_changed="on_topbox_tweeters_color2"></color-picker>				
									</b-form-group>
								</b-card-body>
							</b-card>
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</div>
	</div>
</template>

<style>
.form-group{
	margin-bottom: 0.3rem !important;
}
.sidebar{
	min-height: calc(100vh + 80px) !important;
}

.sidebar-hidden{
	display: none;
	width: 10px !important
}
</style>