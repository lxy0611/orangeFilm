<template>
	<div class="find-wrapper">
		<mt-header fixed>
			<router-link to="/" slot="left">
				<el-input
			  		placeholder="电影/电视剧/影人"
				  	icon="search"
				  	:on-icon-click="handleIconClick">
				</el-input>
			</router-link> 
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">电影</mt-tab-item>
		  	<mt-tab-item id="2">电视</mt-tab-item>
		</mt-navbar>
	</div>
</template>
<script>
export default {
	name: 'find',
  	data () {
    	return {
      		selected:'1',
    	}
  	},
  	methods: {
  		handleIconClick(){
  			console.log("");
  		},
  	}
}
</script>
<style>
.find-wrapper .mint-header{
	background-color: #f9c425;
}
.find-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
</style>