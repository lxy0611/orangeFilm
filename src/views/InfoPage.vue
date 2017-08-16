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
		<mt-cell>
			<div class="info-div">
				<div style="width:60%">
					<h3 style="margin-bottom: 15px;">二十二</h3>
					<p>2017/动作</p>
					<p>上映时间：2017-07-27（中国大陆）</p>
					<p>片长：123分钟</p>
				</div>
				<div>
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
		</mt-cell>
		<div class="operbtn-div">
			<mt-button type="default" class="wantsee-btn" style="width:30%;">想看</mt-button>
			<mt-button type="default" class="seen-btn" style="width:57%;">
				看过
				<img src="../assets/image/星2.png" class="star-img" v-for="n in 5" key="1">
			</mt-button>
		</div>
		<mt-cell >
			<div>
  				<span>
  				<img slot="icon" src="../assets/image/票.png" width="20" height="20">&nbsp;&nbsp;选座购票</span>
  			</div>
  			<div style="float:right; ">
  				<span class="redWord">￥27元起&nbsp;></span>
  			</div>
		</mt-cell>
		
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
	background: rgba(255,255,255,0);
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
.info-div{
	text-align: left;
	margin: 10px 10px;
	width: 100%;
}
.info-div h3{
	color: rgb(92, 100, 107);
}
.info-div p{
	font-size: 12px;
	margin:5px 0px;
	color: #888;
}
.score-div{
	width: 90px;
	height: 90px;
	margin-left: 15px;
	text-align: center;
	background-color: white;
	box-shadow: 2px 2px 2px 2px #EEEEEE;
}
.info-div>div{
	display: inline-block;
}
.info-div div:first-child h3{
    margin-top: 8px;
    margin-bottom: 8px;
}
.star-img{
	height: 14px;
	width: 14px;
}
.operbtn-div .star-img{
	height: 10px;
	width: 10px;
}
.operbtn-div button{
	height: 30px;
	font-size: 12px;
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
</style>