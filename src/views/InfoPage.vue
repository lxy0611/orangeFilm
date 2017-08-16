<template>
	<div class="infoPage-wrapper">
		<mt-header title="电影" fixed>
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		 	<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="bg-img">
			<img src="../assets/image/4.jpg">
		</div>
		<div>
			<div>
				<h3>二十二</h3>
				<p>2017/动作</p>
				<p>上映时间：2017-07-27（中国大陆）</p>
				<p>片长：123分钟</p>
			</div>


		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">评论</mt-tab-item>
		  	<mt-tab-item id="2">讨论区</mt-tab-item>
		</mt-navbar>

	</div>
</template>
<script>
export default {
	name: 'infoPage',
  	data () {
    	return {
      		selected:'1',
    	}
  	}
}
</script>
<style scoped>
.infoPage-wrapper .mint-header{
	background: rgba(255,255,255,0.1);
}
.infoPage-wrapper{
	position: relative;
	top:-40px;
}
.bg-img{
	width: 100%;
	height: 300px;
	background-color: #97B5B5;
}
.bg-img img{
	width:150px;
	height: 200px;
	margin-top:60px;
}
.mint-navbar{
	background-color: #EEEEEE;
}
</style>