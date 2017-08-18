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
		<div class="swiper-container">
		    <div class="swiper-wrapper cast-swiper">
		        <div class="swiper-slide" v-for="n in 6" key="1">
		        	<div>
		        		<img src="../assets/image/4.jpg">
		        		<p class="cast-p">古天乐{{n}}</p>
		        		<p class="act-p">饰：李忠志</p>
		        	</div>
		        </div>
		        <div class="swiper-slide">
		        	<a class="all-link">
		        		<div>
		        			<div>全部</div>
		        			<div>15人</div>
		        		</div>
		        	</a>
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
import Swiper from '../../static/swiper/swiper-3.4.2.min.js'
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
  	},
  	mounted:function(){
	    var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: false,
		    slidesPerView : 3,
			slidesPerGroup : 3,
		})
		},

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
.find-wrapper .mint-header .el-input {
    min-width: 220px;
    width: 100%;
    font-size: 0.35rem;
}
.find-wrapper .mint-header .is-left a {
    width: 100%;
    display: inline-block;
}
.find-wrapper .mint-header .is-left {
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
    width: 90%;
    margin-left: 5%;
}


.swiper-slide{
	width: 30% !important;
	height: auto;
}
.swiper-slide>div{
	width: 100%;
}
.swiper-slide>div img{
	width: 80%;
}
.cast-swiper .cast-p{
	font-size: 0.25rem;
}
.cast-swiper .act-p,{
	font-size: 0.2rem;
	color: #888;
}
.cast-swiper p{
	margin: 0.07rem 0.07rem;
}
.cast-swiper .all-link{
	width: 80%;
	height: 70%;
	background-color:  #f7f5f5;
	display: inline-block;
}
.cast-swiper .all-link>div{
	margin-top:45%;
	color: #888;
}
.cast-swiper .all-link>div div{
	width: 50%;
	margin: 0px auto;
}
.cast-swiper .all-link>div div:first-child{
	border-bottom:1px solid #ece7e7;
	padding-bottom: 5px;
	margin-bottom:5px;
}

</style>