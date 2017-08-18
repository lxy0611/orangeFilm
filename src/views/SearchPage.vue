<template>
	<div class="search-wrapper">
		<mt-search v-model="inputVal" cancel-text="取消" placeholder="搜索电影/电视剧/影人">
			<mt-cell
			   title="标题文字"
			  to="//github.com"
			  is-link
			  value="带链接"
		   	>
		 	</mt-cell>
		</mt-search>
	</div>
</template>
<script>
export default {
	name: 'search',
  	data () {
    	return {
    		inputVal:'',
      		hotlist:[
      			{title:'二十二'},
      			{title:'二十二'},
      			{title:'二十二'},
      		]
    	}
  	}
}
</script>
<style>
.mint-searchbar-inner .mintui-search,.mint-searchbar-cancel,.mint-searchbar-core{
	font-size: 0.28rem;
}
.mint-searchbar-inner{
	height: 0.68rem;
}
.mint-searchbar{
	padding:0.19rem 0.24rem;
}
.search-wrapper{
	position: relative;
	top:-1rem;
}
</style>