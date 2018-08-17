<template>
	<ly-tab v-model="selectedId" :items="items" :options="options"></ly-tab>
</template>

<script>
export default {
	name:"lytab",
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
	},
}
</script>

<style>
</style>