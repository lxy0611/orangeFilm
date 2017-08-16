<template>
	<div class="home-wrapper">
		<mt-header fixed>
			<router-link to="/" slot="left">
				<span>广州</span>
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/" slot="right">
					<el-input
				  		placeholder="电影/电视剧/影人"
					  	icon="search"
					  	v-model="input2"
					  	:on-icon-click="handleIconClick">
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
				<mt-cell  v-for="file in filmList" key="1" class="film-list">
					<div style="width:30%;"><img src="../assets/image/4.jpg" width="90" height="120"></div>
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
				<mt-cell v-for="n in 14" :title="'content ' + n" key="n" />
  			</mt-tab-container-item>
  		</mt-tab-container >

	</div>
</template>
<script>
export default {
	name: 'home',
  	data () {
    	return {
      		selected: '1',
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

      		]
    	}
  	}
}
</script>
<style>
.home-wrapper .mint-header{
	background-color: #f9c425;
}
.mint-header .el-input{
	width: 220px;
}
.mint-button-icon{
	transform:rotate(-90deg);
	-ms-transform:rotate(-90deg); 	/* IE 9 */
	-moz-transform:rotate(-90deg); 	/* Firefox */
	-webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
	-o-transform:rotate(-90deg); 	/* Opera */
}
.mint-swipe-item{
	width: 100%;
	background-color: red;
}
.mint-swipe-items-wrap,.mint-swipe,.mint-swipe-item{
	height: 180px;
}
.mint-swipe img{
	height: 100%;
	width: 100%;
}
.mint-navbar .mint-tab-item{
	color:#6b747d;
}
.mint-tab-item-label{
	font-size: 14px;
}
.mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.mint-navbar a{
	padding-bottom: 15px;
	padding-top: 15px;
}
.mint-button-text{
	font-size: 12px;
}
.mint-cell-value button{
	width: 50px;
	height: 30px;
	font-weight: bolder;
	background-color: white;
}
.buyTicket-btn{
	color: #ec294f;
	border: 1px solid #f76884;
}
.booking-btn{
	color: #f8ab5b;
	border: 1px solid #f9c425;
}
.mint-cell-value>div{
	height: 100%;
}
.mint-cell-value{
	width: 100%;
}

.film-list .title-p{
	font-size: 16px;
	font-weight: bold;
	color: #2f2b2b;
	font-family: "STSong";
	margin: 10px 6px;
}
.film-list .info-list{
	text-align: left;
	margin:10px auto;
}
.film-list .introduce-p{
	font-size: 12px;

}
.film-list .see-p{
	font-size: 14px;
	color: black;
	margin: 10px 6px;
}
.film-list p{
	margin: 6px;
}
.film-list .star-img{
	height: 18px;
	width: 18px;
	position: relative;
    top: -3px;
}
</style>