<template>
	<div class="find-wrapper">
		<mt-header fixed>
			<router-link to="/search" slot="left">
				<el-input
			  		placeholder="电影/电视剧/影人"
				  	icon="search"
				  	>
				</el-input>
			</router-link> 
		</mt-header>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">电影</mt-tab-item>
		  	<mt-tab-item id="2">电视</mt-tab-item>
		</mt-navbar>
		<div class="swiper-container">
		    <div class="swiper-wrapper cast-swiper">
		        <div class="swiper-slide" v-for="n in 3" key="n">
		        	<div class="topTitle-div"><h3>{{topList.title}}</h3></div>
			       	<div v-for="(top,index) in topList.subjects.slice(0,3)" key="top+index" class="list-item" >
			       		<div style="width:10%;">1</div>
			       		<div style="width:18%;"><img :src="top.images.large" class="banner-img"></div>
			       		<div style="width:60%;text-align:left;">
			       			<div>
				        		<p class="name-p">{{top.title}}</p>
				        		<p class="score-p">
					        		<Star :rating="top.rating.average"></Star>
					        		<span>{{top.rating.average}}&nbsp;</span>
					        		<span>x人评价</span>
				        		</p>
				        	</div>
				        	<div><i>></i></div>
			        	</div>
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
import jsonp from '@/directive/jsonp.js'
import Star from '@/components/Star.vue'
export default {
	name: 'find',
	components: { 
		Star,
    },
  	data () {
    	return {
      		selected:'1',
      		score:6,
      		topList:{},
    	}
  	},
  	methods: {
  		//top250
		getTop250(){
			jsonp('https://api.douban.com/v2/movie/top250', {count:3 }, function (data) {
                this.topList=data;
                console.log("top250",data);
            }.bind(this));
		},
		togger(){
			 /*this.getComingsoon();*/
		}
  	},
  	mounted:function(){
  		this.getTop250();
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


.find-wrapper .swiper-slide{
	width: 88% !important;
	height: auto;
}
.find-wrapper .swiper-slide>div{
	width: 100%;
}
.find-wrapper .swiper-slide>div .banner-img{
	width: 80%;
}
.find-wrapper .cast-swiper .name-p{
	font-size: 0.3rem;
}
.find-wrapper .cast-swiper .score-p{
	font-size: 0.2rem;
	color: #b1b1b1;
}
.find-wrapper .cast-swiper p{
	margin: 0.07rem 0.07rem;
}
.find-wrapper .cast-swiper .list-item div:last-child{
	border-bottom:1px solid #ece7e7;
	padding-bottom: 5px;
}

.find-wrapper .cast-swiper .list-item div{
	display: inline-block;
}
.find-wrapper .cast-swiper .list-item div>div{
	height: 100%;
}
.find-wrapper .score-p img{
	width: 0.25rem;
}
.find-wrapper .topTitle-div{
	padding-left: 5%;
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: left;
}

</style>