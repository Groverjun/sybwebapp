<template>
  <vue-drawer-layout :content-drawable="true" ref="drawerLayout" @slide-start="handleSlideStart"
    @slide-move="handleSlideMove"
    @slide-end="handleSlideEnd"
    @mask-click="handleMaskClick">
    <div class="drawer" slot="drawer">
      <div class="text">
      		导航内容
      	  <span @click="handleToggleDrawer">关闭</span>
      </div>
    </div>
    <div class="content" slot="content">
      <div class="text">
      		<div ref="wrapper" class="wrapper">
					  <ul class="content">
					    <li>1</li>
					    <li>2</li>
					    <li>2</li>
					    <li>4</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					    <li>5</li>
					  </ul>
				</div>
      </div>
    </div>
  </vue-drawer-layout>
</template>

<script>
	import BScroll from 'better-scroll'
export default {
	name:"home",
	data () {
		return{
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
	},
	mounted(){
		this.$nextTick(() => {
        let bscrollDom = this.$refs.wrapper;
        this.aBScroll = new BScroll(bscrollDom,{scrollX: true,scrollY: false,})
    }) 
	},
	methods:{
		handleToggleDrawer() {
	    this.$refs.drawerLayout.toggle();
	  },
	  handleSlideStart() {},
	  handleSlideMove(position) {},
	  handleSlideEnd(visible) {},
	  handleMaskClick() { this.$refs.drawerLayout.toggle(false);},
   
  
	},
}
</script>
<style>
	*{margin: 0;padding: 0;list-style: none;}
	.text{
		font-size: 0.28rem;
	}
	.wrapper{
		height: 2rem;
		background: #000;
		color: #fff;
		width: 100%;
		overflow: hidden;
	}
	.wrapper .content{
		width: 150rem;
	}
		.wrapper li{
			display: inline-block;
			width: 3rem;
			text-align: center;
			line-height:2rem;
		}
</style>
