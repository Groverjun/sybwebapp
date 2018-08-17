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
				<ly-tab
				    v-model="selectedId"
				    :items="items"
				    :options="options">
				</ly-tab>
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
			      selectedId: 0,
			      items: [
			        {label: '首页'},
			        {label: '推荐'},
			        {label: 'Android'},
			        {label: '前端'},
			        {label: '后端'},
			        {label: 'iOS'},
			        {label: '产品'},
			        {label: '人工智能'},
			        {label: '设计'}
			      ],
			      options: {
			        activeColor: '#1d98bd'
			        // 可在这里指定labelKey为你数据里文字对应的字段
			      },
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
	},
	mounted(){
		
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
