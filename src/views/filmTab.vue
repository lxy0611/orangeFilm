<template>
	<div class="film-wrapper">
		<mt-header fixed >
			<router-link to="/" slot="left">
				<span>广州</span>
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/search" slot="right">
				<el-input
			  		placeholder="电影/电视剧/影人"
				  	icon="search"
				  	:on-icon-click="getIntheaters">
				</el-input>
			</router-link> 
		</mt-header>
		<mt-swipe :auto="4000" class="banner-swipe">
			<mt-swipe-item>
				<img src="../assets/image/1.jpg">
			</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../assets/image/2.jpg">
		  	</mt-swipe-item>
		  	<mt-swipe-item>
		  		<img src="../assets/image/3.jpg">
		  	</mt-swipe-item>
		</mt-swipe>
		<mt-navbar v-model="selected" class="nav-menu">
			<mt-tab-item id="1">正在热映</mt-tab-item>
		  	<mt-tab-item id="2" >即将上映</mt-tab-item>
		</mt-navbar>
		<!-- <div style="width:100%;height:16rem;"></div> -->
		<mt-tab-container v-model="selected" element-loading-text="拼命加载中" v-loading="loading">
			<mt-tab-container-item id="1">
				<mt-cell  v-for="film in intheatersList" key="1" class="film-list"  :to="{path:'/detail/'+film.id}">
					<div style="width:30%;"><img :src="film.images.large" width="100%" height="auto"></div>
					<div  style="width:50%;" class="info-list">
						<p class="title-p">{{film.title}}</h4>
						<p class="introduce-p">
							<span v-if="film.rating.average!=0">
								<Star :rating="film.rating.average"></Star>
								<span class="grade-span">{{film.rating.average}}</span>
							</span>
							</el-rate>
							<span v-else>未有上映</span>
						</p>
						<p class="introduce-p">导演：
							<span v-for="(director,index) in film.directors">
								{{director.name + (index==film.directors.length-1?'':' / ')}}
							</span>
						</p>
						<p class="introduce-p">主演：
							<span v-for="(cast,index) in film.casts">
								{{cast.name + (index==film.casts.length-1?'':' / ')}}
							</span>
						</p>
						<p class="see-p">{{film.collect_count}}人看过</p>
					</div>
			  		<div style="width:20%;">
			  			<mt-button type="default" class="buyTicket-btn" v-if="film.rating.average!=0">购票</mt-button>
			  			<mt-button type="default" class="booking-btn" v-else>预售</mt-button>
		  			</div>
				</mt-cell>
			</mt-tab-container-item>
  			<mt-tab-container-item id="2" >
  				<div class="select-tab">
  					<div style="width:50%;float:left;">
						<mt-navbar v-model="selected2" >
							<mt-tab-item id="1">全部</mt-tab-item>
						  	<mt-tab-item id="2">{{date.month}}月</mt-tab-item>
						  	<mt-tab-item id="3">{{date.month+1}}月</mt-tab-item>
						  	<mt-tab-item id="4">{{date.month+2}}月</mt-tab-item>
						</mt-navbar>
					</div>
					<div style="width:25%;float:right;">
						<mt-navbar v-model="selected2" >
							<mt-tab-item id="5" class="time-div">时间</mt-tab-item>
						  	<mt-tab-item id="6">热度</mt-tab-item>
						</mt-navbar>
					</div>
				</div>
				<div class="film-list" style="clear:both;">
					<div class="show-date">{{date.month}}月{{date.day}}日，星期{{date.weekday}}</div>
					<mt-cell  v-for="film in comingList" key="1" class="film-list" :to="{path:'/detail/'+film.id}">
					<div style="width:30%;"><img :src="film.images.large" width="100%" height="auto"></div>
					<div  style="width:50%;" class="info-list">
						<p class="title-p">{{film.title}}</h4>
						<p class="introduce-p">主演：
							<span v-for="(director,index) in film.directors">
								{{director.name}}
							</span>
						</p>
						<p class="introduce-p">主演：
							<span v-for="(cast,index) in film.casts">{{cast.name + (index==film.casts.length-1?'':' / ')}}</span>
						</p>
						<p class="see-p">{{film.collect_count}}人想看</p>
					</div>
			  		<div style="width:20%;">
			  			<mt-button type="default" class="interest-btn">想看</mt-button>
		  			</div>
				</mt-cell>
				</div>
  			</mt-tab-container-item>
  		</mt-tab-container >

	</div>
</template>
<script>
import Vue from 'vue';
import {api} from '@/global/api';
import jsonp from '@/directive/jsonp.js';
import Star from '@/components/Star.vue';
export default {
	name: 'home',
	components: { 
		Star,
    },
  	data () {
    	return {
      		selected: '1',
      		selected2: '1',
      		intheatersList:{},
      		comingList:{},
     		loading:false,
     		scrolled:false,
     		mark:false,
     		date:{
      			month:'',
      			day:'',
      			weekday:'',
      		}
    	}
  	},
  	methods: {

	    //热映
  		getIntheaters(){
			/*Vue.http.get(api.in_theaters).then(function(response){
				console.log(response.data);
			}, function(response){
				console.log('请求失败.');
			})*/
			//loading效果
            let _this=this;
            this.mark=false;
            _this.loading=true;
            jsonp('https://api.douban.com/v2/movie/in_theaters', {city:'广州',count: 15 }, function (data) {
            	 //先结束loading效果
              	_this.loading=false;
              	_this.mark=true;
                this.intheatersList=data.subjects;
            }.bind(this));
		},

		//即将上映
		getComingsoon(){
			let _this=this;
            //_this.loading=true;
			jsonp('https://api.douban.com/v2/movie/coming_soon', {city:'广州', count: 15 }, function (data) {
                this.comingList=data.subjects;
            	//_this.loading=false;
            }.bind(this));
		},

		//窗口滚动实现样式变动
		handleScroll () {
		    let bannerTop=$(".banner-swipe").offset().top;
		   	let navTop = $(".nav-menu").offset().top;
		   	$(window).scroll(function(){
		   		let winTop = $(this).scrollTop();
		   		if(winTop >= navTop-bannerTop){
			   		$(".nav-menu").css({"position":"fixed","top":"1rem","z-index":"99","width":"100%"});
			   	}
			   	else{
			   		$(".nav-menu").css({"position":"static"});
			   	}
		   	})
	  	},

	  	//获取时间：月日星期
	  	getNowDate(){
	  		let myDate=new Date();
	  		//let dd=myDate;
	  		this.date.month=myDate.getMonth()+1;
	  		this.date.day=myDate.getDate();
	  		//dd.setDate(dd.getDate()+1);//获取明天后的日期 
	  		let weekIndex=myDate.getDay(); //星期几
  			let weekDay=new Array('一','二','三','四','五','六','日');
  			this.date.weekday=weekDay[weekIndex];
	  		console.log("-------date",this.date);
	  	},

	  	//初始化
	  	init(){
  		 	this.getIntheaters();
		   	this.getComingsoon();
		   	this.getNowDate();
	  	}
  	},
  	watch: {
        //监测$route对象，如果发生改变，就触发getIntheaters方法
        //"$route":'getIntheaters',
        //监测intheatersList，如果发生改变，就触发handleScroll,getBgcolor方法
        intheatersList:function(){
        	this.$nextTick(function () {
        		console.log("mark:",this.mark);
        		if(this.mark==true){
        			this.handleScroll();
        		}
	        })
        },
    },
	created:function(){
	  this.$nextTick(function () {
	     	this.init();
	    })
	},
}
</script>
<style>
.film-wrapper .mint-header{
	background-color: #f9c425;
	font-size: 0.35rem;
	height: 1rem;
}
.film-wrapper .mint-header .is-right{
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
    width: 80%;
}
.film-wrapper .mint-header .is-right a{
	width: 100%;
    display: inline-block;
}
.film-wrapper .el-input__icon {
    width: 0.9rem;
}
.film-wrapper .mint-header .el-input{
	min-width: 220px;
	width: 100%;
	font-size: 0.35rem;
}
.el-input__inner {
	height: 0.78rem;
	font-size: 0.3rem;
}
.film-wrapper .mint-header .el-input input{
	border: none;
}
.film-wrapper .mint-button-icon{
	transform:rotate(-90deg);
	-ms-transform:rotate(-90deg); 	/* IE 9 */
	-moz-transform:rotate(-90deg); 	/* Firefox */
	-webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
	-o-transform:rotate(-90deg); 	/* Opera */
}
.film-wrapper .mint-swipe-item{
	width: 100%;
}
.film-wrapper .mint-swipe-items-wrap,.film-wrapper .mint-swipe,.film-wrapper .mint-swipe-item{
	width: 100%;
	height: 4rem;
} 
.film-wrapper .mint-swipe img{
	width: 100%;
	height: 100%;
}
.film-wrapper .mint-navbar .mint-tab-item{
	color:#6b747d;
}

.film-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.film-wrapper .mint-button-text{
	font-size: 0.28rem;
}
.film-wrapper .mint-cell-value button{
    height: 0.7rem;
	font-weight: bolder;
	background-color: white;
}
.film-wrapper .mint-button--normal{
	padding:0 0.25rem;
}
.film-wrapper .buyTicket-btn{
	color: #ec294f;
	border: 1px solid #f76884;
}
.film-wrapper .booking-btn,.interest-btn{
	color: #f8ab5b;
	border: 1px solid #f9c425;
}
.film-wrapper .mint-cell-value>div{
	height: 100%;
}
.film-wrapper .mint-cell-value{
	width: 100%;
	padding:10px 0px;
}

.film-wrapper .film-list .title-p{
	font-size: 0.4rem;
	font-weight: bold;
	color: #2f2b2b;
	font-family: "STSong";
	margin:  0.25rem 0.1rem;
}
.film-wrapper .film-list .info-list{
	text-align: left;
	padding-left: 0.35rem;
}
.film-wrapper .film-list .introduce-p{
	font-size: 0.28rem;

}
.film-wrapper .film-list .see-p{
	font-size: 0.3rem;
	color: black;
	margin: 0.18rem 0.1rem;
}
.film-wrapper .film-list p{
	margin: 0.2rem  0.1rem;
}
.film-wrapper .show-date{
	background-color: #EEEEEE;
	height:  0.80rem;
	font-size: 0.35rem;
	line-height:  0.80rem;
	text-align: left;
	padding-left: 0.23rem;
}
.film-wrapper .time-div .mint-tab-item-label{
	border-left: 1px solid #C9C9C9;
}
.film-wrapper .select-tab .mint-navbar .mint-tab-item.is-selected{
	border-bottom: none;
}
.film-wrapper .introduce-p>span .grade-span {
	position: relative;
	top:3px;
}
.film-wrapper .mint-header-button.is-left{
	padding-left: 0.12rem;
}
</style>