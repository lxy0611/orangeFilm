<template>
	<div class="infoPage-wrapper">
		<mt-header title="电影" fixed>
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		 	<mt-button slot="right"><i class="el-icon-share"></i></mt-button>
		</mt-header>
		<div class="bg-img">
			<img src="../assets/image/4.jpg">
		</div>
		<div class="info-div">
			<div style="width:55%">
				<h3 style="margin-bottom: 15px;">二十二</h3>
				<p>2017/动作</p>
				<p>上映时间：2017-07-27（中国大陆）</p>
				<p>片长：123分钟</p>
			</div>
			<div style="width:38%">
				<div class="score-div">
					<p>豆瓣评分</p>
					<h3>7.5</h3>
					<p>
						<img src="../assets/image/星1.png" class="star-img">
						<img src="../assets/image/星1.png" class="star-img">
						<img src="../assets/image/星1.png" class="star-img">
						<img src="../assets/image/星1.png" class="star-img">
						<img src="../assets/image/星.png" class="star-img">
					</p>
					<p>318693人</p>
				</div>
			</div>
		</div>
		<div class="operbtn-div">
			<mt-button type="default" class="wantsee-btn" style="width:30%;">想看</mt-button>
			<mt-button type="default" class="seen-btn" style="width:57%;">
				看过
				<img src="../assets/image/星2.png" class="star-img" v-for="n in 5" key="1">
			</mt-button>
		</div>
		<div class="buyTicket-div">
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
				<p class="content-p limit-p">在日本侵华战争（1931-1945）的十四年间，中国大约曾有20万，甚至更多的女性被日军诱骗、强迫，沦为日军发泄性欲、任意摧残的性奴隶。她们在战争期间受尽各种难以想象、难以启齿的虐待，其中大部分当时就被折磨至死</p>
			</div>
			<div>
				<p class="title-p">影人</p>
				<p class="content-p"></p>
			</div>
			<div>
				<p class="title-p">预告片/剧照</p>
				<p class="content-p"></p>
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
<style>
.infoPage-wrapper .mint-header{
	padding-top:  0.25rem;;
	background: rgba(255,255,255,0);
	font-size: 0.35rem;
}
.infoPage-wrapper .el-icon-share{
	margin-right: 10px;
}
.infoPage-wrapper{
	position: relative;
	top:-1rem;
}
.bg-img{
	width: 100%;
	padding-bottom: 20px;
	background-color: #97B5B5;
}
.bg-img img{
	width:70%;
	height: auto;
	margin-top:60px;
}
.mint-navbar{
	background-color: #F5F5F5;
}
.info-div{
	text-align: left;
	margin: 10px 10px;
	width: 100%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
 	-moz-box-sizing: border-box;
 	padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
}
.info-div h3{
	color: rgb(92, 100, 107);
	font-size: 0.45rem;
}
.info-div p,.detailInfo-div .title-p{
	font-size: 0.28rem;
	margin:0.2rem 0px;
	color: #888;
}
.score-div{
	position: relative;
    top: -0.3rem;
	min-width: 2.5rem;
	width: 80%;
	height: 2.5rem;
	margin-left: 0.25rem;
	text-align: center;
	background-color: white;
	box-shadow: 2px 2px 2px 2px #EEEEEE;
    padding-bottom: 10px;
}
.info-div>div{
	display: inline-block;
}
.info-div div:first-child h3{
    margin-top: 8px;
    margin-bottom: 8px;
}
.star-img{
	height: 0.35rem;
	width: 0.35rem;
}
.operbtn-div .star-img{
	height: 0.25rem;
	width: 0.25rem;
}
.operbtn-div button{
	height:  0.9rem;
	font-size: 0.28rem;
	background-color: white;
	color:#f9c425;
	border: 1px solid #f9c425;
}
.infoPage-wrapper>div,.infoPage-wrapper>a{
	margin-bottom:30px;
}
.mint-cell-value{
	width: 100%;
}
.infoPage-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.redWord{
	color:#ec294f;;
}
.buyTicket-div{
	font-size: 0.35rem;
}
.buyTicket-div>div{
	width: 50%;
	display: inline-block;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
 	-moz-box-sizing: border-box;
}
.buyTicket-div>div:first-child{
	text-align: left;
	padding-left: 20px;
}
.buyTicket-div>div:last-child{
	text-align: right;
	padding-right: 20px;
}
.detailInfo-div{
	border-top:1px solid #F1F1F1;
}
.detailInfo-div>div{
	padding: 0px 20px;
}
.detailInfo-div p{
	text-align: left;
}
.detailInfo-div .content-p,.mintui{
	font-size: 0.35rem;
}
.detailInfo-div .limit-p{
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.mint-tab-item-label{
	font-size: 0.28rem;
}
.mint-navbar .mint-tab-item{
	padding: 0.4rem;
}
.buyTicket-div>div img{
    width: 0.48rem;
 	height: 0.48rem;
}
</style>