<template>
	<div class="find-wrapper">
		<!-- <mt-header fixed>
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
		        <div class="swiper-slide">
		        	<div class="topTitle-div"><h3>{{topList.title}}</h3></div>
			       	<div v-for="(top,index) in topList.subjects" key="top+index" class="list-item" >
			       		<div style="width:10%;">{{index+1}}</div>
			       		<div style="width:14%;"><img :src="top.images.large" class="banner-img"></div>
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
		        	<div class="topTitle-div"><h3>{{us_boxList.title}}</h3></div>
			       	<div v-for="(item,index) in us_boxList.subjects" key="item+index" class="list-item" >
			       		<div style="width:10%;">{{index+1}}</div>
			       		<div style="width:14%;"><img :src="item.subject.images.large" class="banner-img"></div>
			       		<div style="width:60%;text-align:left;">
			       			<div>
				        		<p class="name-p">{{item.subject.title}}</p>
				        		<p class="score-p">
					        		<Star :rating="item.subject.rating.average"></Star>
					        		<span>{{item.subject.rating.average}}&nbsp;</span>
					        		<span>x人评价</span>
				        		</p>
				        	</div>
				        	<div><i>></i></div>
			        	</div>
			       	</div>
		       </div>
		    </div>
		</div> -->
	</div>
</template>
<script>
import Swiper from '../../static/swiper/swiper-3.4.2.min.js'
import jsonp from '@/directive/jsonp.js'
import Star from '@/components/Star.vue'
import Vue from 'vue';
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
      		us_boxList:{},
      		listArry:["/v2/movie/top250","/v2/movie/weekly","/v2/movie/us_box","/v2/movie/new_movies"],
    	}
  	},
  	methods: {
  		//top250
		getTop250(){
			let count=3;
			//loading效果
            let loading = Vue.prototype.$loading({text:"玩命加载中..."});
			jsonp('https://api.douban.com/'+this.listArry[0], {count:count}, function (data) {
                this.topList=data;
                //先结束loading效果
                loading.close();
            }.bind(this));
		},
		getUs_box(){
			let count=3;
			//loading效果
            let loading = Vue.prototype.$loading({text:"玩命加载中..."});
			jsonp('https://api.douban.com/'+this.listArry[2], {count:count}, function (data) {
                this.us_boxList=data;
                console.log("us_boxList",data);
            }.bind(this));
		},
		togger(){
			 /*this.getComingsoon();*/
		}
  	},
  	mounted:function(){
  		/*this.getTop250();
  		this.getUs_box();
	    var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: false,
		    slidesPerView : 3,
			slidesPerGroup : 3,
		})*/
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
	width: 0.2rem;
}
.find-wrapper .topTitle-div{
	padding-left: 5%;
	padding-top: 10px;
	padding-bottom: 10px;
	text-align: left;
}

</style>