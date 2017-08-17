<template>
	<div class="film-wrapper">
		<mt-header fixed>
			<router-link to="/" slot="left">
				<span>广州</span>
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/" slot="right">
				<el-input
			  		placeholder="电影/电视剧/影人"
				  	icon="search"
				  	:on-icon-click="getData">
				</el-input>
			</router-link> 
		</mt-header>
		<mt-swipe :auto="4000">
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
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">正在热映</mt-tab-item>
		  	<mt-tab-item id="2">即将上映</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell  v-for="file in filmList" key="1" class="film-list"  to="/infoPage">
					<div style="width:30%;"><img src="../assets/image/4.jpg" width="100%" height="auto"></div>
					<div  style="width:50%;" class="info-list">
						<p class="title-p">{{file.name}}</h4>
						<p class="introduce-p">
							<img src="../assets/image/星.png" class="star-img">
							{{file.star}}
						</p>
						<p class="introduce-p">导演：{{file.director}}</p>
						<p class="introduce-p">主演：{{file.act}}</p>
						<p class="see-p">{{file.see}}人看过</p>
					</div>
			  		<div style="width:20%;">
			  			<mt-button type="default" class="buyTicket-btn" v-if="file.state==true">购票</mt-button>
			  			<mt-button type="default" class="booking-btn" v-else>预售</mt-button>
		  			</div>
				</mt-cell>
			</mt-tab-container-item>
  			<mt-tab-container-item id="2" >
  				<div class="select-tab">
  					<div style="width:50%;float:left;">
						<mt-navbar v-model="selected2" >
							<mt-tab-item id="1">全部</mt-tab-item>
						  	<mt-tab-item id="2">8月</mt-tab-item>
						  	<mt-tab-item id="3">9月</mt-tab-item>
						  	<mt-tab-item id="4">10月</mt-tab-item>
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
					<div class="show-date">8月25日，星期五</div>
					<mt-cell  v-for="file in filmList" key="1" class="film-list">
					<div style="width:30%;"><img src="../assets/image/4.jpg" width="100%" height="auto"></div>
					<div  style="width:50%;" class="info-list">
						<p class="title-p">{{file.name}}</h4>
						<p class="introduce-p">导演：{{file.director}}</p>
						<p class="introduce-p">主演：{{file.act}}</p>
						<p class="see-p">{{file.see}}想看</p>
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
export default {
	name: 'home',
  	data () {
    	return {
      		selected: '1',
      		selected2: '1',
      		filmList:[
      			{
      				name:"二十二",
      				star:"9.0",
      				director:"郭柯",
      				act:"",
      				see:"17175",
      				state:true
      			},
      			{
      				name:"战狼2",
      				star:"7.5",
      				director:"吴京",
      				act:"吴京/弗兰克.格里罗/吴刚",
      				see:"326062",
      				state:true
      			},
      			{
      				name:"破局",
      				star:"尚未上映",
      				director:"连",
      				act:"郭富城/王千源/刘涛",
      				see:"698",
      				state:false
      			},
      			{
      				name:"十万个冷笑话2",
      				star:"尚未上映",
      				director:"卢恒宇 李姝洁",
      				act:"皇贞季/山新/郝祥海/藤新/图特哈蒙",
      				see:"999",
      				state:false
      			},
      		]
    	}
  	},
  	methods: {
  		handleIconClick(){
  			console.log("");
  		},
  		getData(){
			Vue.http.get('https://api.douban.com/v2/movie/in_theaters').then(function(response){
				console.log(response.data);
			}, function(response){
				console.log('请求失败.');
			})
		},
  	},
	/*mounted:function(){
	    this.getData();
	    this.updateInfo();
	},*/
}
</script>
<style>
.film-wrapper .mint-header{
	background-color: #f9c425;
	font-size: 0.3rem;
	height: 1rem;
}
.mint-header .is-right{
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
    width: 80%;
}
.mint-header .is-right a{
	width: 100%;
    display: inline-block;
}
.film-wrapper .mint-header .el-input{
	min-width: 220px;
	width: 100%;
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
	background-color: red;
}
.film-wrapper .mint-swipe-items-wrap,.film-wrapper .mint-swipe,.film-wrapper .mint-swipe-item{
	width: 100%;
	height: 3.5rem;
} 
.film-wrapper .mint-swipe img{
	width: 100%;
	height: auto;
}
.film-wrapper .mint-navbar .mint-tab-item{
	color:#6b747d;
}
.film-wrapper .mint-tab-item-label{
	font-size: 0.3rem;
}
.film-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.film-wrapper .mint-navbar a{
	padding-bottom: 15px;
	padding-top: 15px;
}
.film-wrapper .mint-button-text{
	font-size: 0.25rem;
}
.film-wrapper .mint-cell-value button{
	width: 50px;
	height: 30px;
	font-weight: bolder;
	background-color: white;
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
	margin: 10px 6px;
}
.film-wrapper .film-list .info-list{
	text-align: left;
	margin:10px auto;
}
.film-wrapper .film-list .introduce-p{
	font-size: 0.25rem;

}
.film-wrapper .film-list .see-p{
	font-size: 0.3rem;
	color: black;
	margin: 10px 6px;
}
.film-wrapper .film-list p{
	margin: 6px;
}
.film-wrapper .film-list .star-img{
	height: 18px;
	width: 18px;
	position: relative;
    top: -3px;
}
.film-wrapper .show-date{
	background-color: #EEEEEE;
	height: 33px;
	font-size: 0.3rem;
	line-height: 33px;
	text-align: left;
	padding-left: 10px;
}
.film-wrapper .time-div .mint-tab-item-label{
	border-left: 1px solid #C9C9C9;
}
.film-wrapper .select-tab .mint-navbar .mint-tab-item.is-selected{
	border-bottom: none;
}

</style>