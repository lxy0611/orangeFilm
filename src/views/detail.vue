<template>
	<div class="infoPage-wrapper" v-cloak>
		<mt-header title="电影" fixed v-if="filmInfo.subtype==='movie'" class="header-nav">
		 	<router-link to="/" slot="left">
		   	<mt-button icon="back"></mt-button>
		 	</router-link>
			<mt-button slot="right"><i class="el-icon-share"></i></mt-button>
		</mt-header>
		<mt-header title="电视" fixed v-else>
		 	<router-link to="/" slot="left">
		   	<mt-button icon="back"></mt-button>
		 	</router-link>
			<mt-button slot="right"><i class="el-icon-share"></i></mt-button>
		</mt-header>
		<div class="bg-img">
			<img :src="filmInfo.images.large" id="bgImage" data-adaptive-background>
		</div>
		<div class="info-div">
			<div style="width:55%">
				<h3 style="margin-bottom: 15px;">{{filmInfo.title}}</h3>
				<p>
					{{filmInfo.year}}
					<span v-for="(genre,index) in filmInfo.genres">
						{{'/'+genre}}
					</span>
				</p>
				<p>上映时间：{{filmInfo.year}}（{{filmInfo.countries[0]}}）</p>
				<p>片长：123分钟</p>
			</div>
			<div style="width:38%">
				<div class="score-div">
					<p>豆瓣评分</p>
					<h3 v-if="filmInfo.rating.average!=0">{{filmInfo.rating.average}}</h3>
					<p>
						<Star :rating="filmInfo.rating.average"></Star>
					</p>
					<p v-if="filmInfo.rating.average!=0">{{filmInfo.ratings_count}}人</p>
					<p v-else>暂无评分</p>
				</div>
			</div>
		</div>
		<div class="operbtn-div">
			<mt-button type="default" class="wantsee-btn" style="width:30%;">想看</mt-button>
			<mt-button type="default" class="seen-btn" style="width:57%;">
				看过
				<img src="../assets/image/star_border.png" class="star-img" v-for="n in 5" key="n">
			</mt-button>
		</div>
		<div class="buyTicket-div" v-if="filmInfo.year<year">
			<div>
 				<span>
 				<img slot="icon" src="../assets/image/播放.png">&nbsp;&nbsp;在线观看</span>
 			</div>
 			<div style="float:right; ">
 				<span class="redWord">播放源&nbsp;></span>
 			</div>
		</div>
		<div class="buyTicket-div" v-else>
			<div>
 				<span>
 				<img slot="icon" src="../assets/image/票.png">&nbsp;&nbsp;选座购票</span>
 			</div>
 			<div style="float:right; ">
 				<span class="redWord">￥27元起&nbsp;></span>
 			</div>
		</div>
		
		<div class="detailInfo-div">
			<div>
				<p class="title-p">简介</p>
				<p class="content-p limit-p">{{filmInfo.summary}}</p>
			</div>
			<div>
				<p class="title-p">影人</p>
				<div class="swiper-container">
					<div class="swiper-wrapper cast-swiper">
					 	<div class="swiper-slide" v-for="(director,index) in filmInfo.directors" key="idex">
				        	<div>
				        		<img :src="director.avatars.large">
				        		<p class="cast-p">{{director.name}}</p>
				        		<p class="act-p">导演</p>
				        	</div>
				        </div>
				        <div class="swiper-slide" v-for="(cast,index) in filmInfo.casts" key="idex">
				        	<div>
				        		<img :src="cast.avatars.large">
				        		<p class="cast-p">{{cast.name}}</p>
				        	</div>
				        </div>
					</div>
				</div>
			</div>
			<!-- <div>
				<p class="title-p">预告片/剧照</p>
				<p class="content-p"></p>
			</div> -->
		</div>
	<!-- 	<mt-navbar v-model="selected">
		<mt-tab-item id="1">评论</mt-tab-item>
	 			<mt-tab-item id="2">讨论区</mt-tab-item>
	</mt-navbar> -->
		
	</div>
</template>
<script>
import jsonp from '@/directive/jsonp.js';
import Swiper from '../../static/swiper/swiper-3.4.2.min.js'
import Star from '@/components/Star.vue'
import Vue from 'vue';

export default {
	name: 'infoPage',
  	data () {
    	return {
      		selected:'1',
      		filmInfo:{},
      		photos:{},
      		year:'',
      		bgcolor:'',
    	}
  	},
 	components: { 
    	Star,
    },
  	methods: {
  		//通过动态路由传参，检索某一条信息
        getData(){
        	//loading效果
            let loading = Vue.prototype.$loading({text:"玩命加载中..."});
        	let url='https://api.douban.com/v2/movie/subject/'+ this.$route.params.id;
			jsonp(url, {city:'广州' }, function (data) {
                this.filmInfo=data;
             	loading.close();
            }.bind(this));
		},

		//窗口滚动实现样式变化
		handleScroll () {
			let infoTop=$(".info-div").offset().top;
			let _this=this;
			$(window).scroll(function(){
				console.log("滚动：",_this.bgcolor);
				let winTop = $(this).scrollTop();
				if(winTop >=infoTop){
					$(".infoPage-wrapper .mint-header").css({"background":_this.bgcolor});
				}
				else if(winTop >0){
					$(".infoPage-wrapper .mint-header").css({"background":"rgba(255,255,255,0.3)"});
				}
				else{
					$(".infoPage-wrapper .mint-header").css({"background":"rgba(255,255,255,0)"});
				}
			})
	  	},

	  	//得到背景图片色
	  	getBgcolor(){
	  		let _this=this;
	  		$.adaptiveBackground.run({
	  			 success: function($img, data) {
	  			 	_this.bgcolor=data.color;
				    console.log('Success!', $img, data);
				    console.log('bgcolor!', _this.bgcolor);
				  }
	  		});	
	  	},

	  	//初始化
	  	init(){
	  		this.year=2017;
		    this.getData();
		 	var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: false,
			    slidesPerView : 3,
				slidesPerGroup : 3,
			});
			
	  	}

  	},
  	//页面渲染前获得数据
  	created:function() {
  		let _this=this;
	    //this.$nextTick(function () {
	     	_this.init();
	    //})
  	},
  	//页面渲染后得到相应的操作
  	mounted:function(){
  		let _this=this;
  		this.$nextTick(function () {
	  		setTimeout(function(){
	  			_this.handleScroll();
				_this.getBgcolor();	
	  		},1000);
	  	})
	},
	beforeDestroy:function(){
  		
	},
	watch: {
        //监测$route对象，如果发生改变，就触发getIntheaters方法
        "$route":'getData',
    },


}
</script>
<style>
.infoPage-wrapper .mint-header{
	padding:  0.25rem auto;
	background: rgba(255,255,255,0);
	font-size: 0.35rem;
    height: 0.95rem;
}
.infoPage-wrapper .el-icon-share{
	margin-right: 10px;
}
.infoPage-wrapper{
	position: relative;
	top:-1rem;
}
.infoPage-wrapper .bg-img{
	width: 100%;
	padding-bottom: 20px;
	background-color: #97B5B5;
}
.infoPage-wrapper .bg-img img{
	width:70%;
	height: auto;
	margin-top:60px;
}
.infoPage-wrapper .mint-navbar{
	background-color: #F5F5F5;
}
.infoPage-wrapper .info-div{
	text-align: left;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
 	-moz-box-sizing: border-box;
 	padding-left:0.48rem;
 	padding-right:0.24rem;

}
.infoPage-wrapper .info-div h3{
	color: rgb(92, 100, 107);
	font-size: 0.45rem;
}
.infoPage-wrapper .info-div p,.infoPage-wrapper .detailInfo-div .title-p{
	font-size: 0.28rem;
	color: #888;
	margin: 0px;
}
.infoPage-wrapper .score-div{
	min-width: 2.5rem;
	width: 80%;
	margin-left: 0.25rem;
	text-align: center;
	background-color: white;
	box-shadow: 2px 2px 2px 2px #EEEEEE;
    padding: 10px 0px; 
}
.infoPage-wrapper .info-div>div{
	display: inline-block;
}
.infoPage-wrapper .info-div div:first-child h3{
    margin: 4px auto;
}
.infoPage-wrapper .operbtn-div .star-img{
	height: 0.25rem;
	width: 0.25rem;
}
.infoPage-wrapper .operbtn-div button{
	height:  0.9rem;
	font-size: 0.28rem;
	background-color: white;
	color:#f9c425;
	border: 1px solid #f9c425;
}
.infoPage-wrapper>div,.infoPage-wrapper>a{
	margin-bottom:30px;
}
.infoPage-wrapper .mint-cell-value{
	width: 100%;
}
.infoPage-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.infoPage-wrapper .redWord{
	color:#ec294f;;
}
.infoPage-wrapper .buyTicket-div{
	font-size: 0.35rem;
}
.infoPage-wrapper .buyTicket-div img,.infoPage-wrapper .buyTicket-div .redWord{
	position: relative;
	top:4px;
}
.infoPage-wrapper .buyTicket-div>div{
	width: 50%;
	display: inline-block;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
 	-moz-box-sizing: border-box;
}
.infoPage-wrapper .buyTicket-div>div:first-child{
	text-align: left;
	padding-left: 0.48rem;
}
.infoPage-wrapper .buyTicket-div>div:last-child{
	text-align: right;
	padding-right: 0.48rem;
}
.infoPage-wrapper .detailInfo-div{
	border-top:1px solid #F1F1F1;
}
.infoPage-wrapper .detailInfo-div>div{
	padding: 0px 0.48rem;
}
.infoPage-wrapper .detailInfo-div p{
	text-align: left;
}
.infoPage-wrapper .detailInfo-div .content-p,.infoPage-wrapper .mintui{
	font-size: 0.35rem;
}
.infoPage-wrapper .detailInfo-div .limit-p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.infoPage-wrapper .mint-tab-item-label{
	font-size: 0.28rem;
}
.infoPage-wrapper .mint-navbar .mint-tab-item{
	padding: 0.4rem;
}
.infoPage-wrapper .buyTicket-div>div img{
    width: 0.48rem;
 	height: 0.48rem;
}

.swiper-slide{
	width: 33.33% !important;
}
.swiper-slide>div{
	width: 100%;
}
.swiper-slide>div img{
	width: 80%;
}
.cast-swiper{
	margin-top: 10px;
}
.detailInfo-div .title-p{
	margin-top: 10px !important;
}
.cast-swiper .cast-p{
	font-size: 0.25rem;
	text-align: center !important;
}
.cast-swiper .act-p{
	font-size: 0.2rem;
	color: #888;
	text-align: center !important;
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


[v-cloak] {
  display: none;
}
</style>