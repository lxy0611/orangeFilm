<template>
	<div class="search-wrapper">
		<mt-header fixed>
			<div  slot="left">
				<el-input
					v-model="inputVal"
			  		placeholder="电影/电视剧/影人"
				  	icon="search"
				  	@keyup.enter.native="searchClick()"
				  	:autofocus=true
			  	>
				</el-input>
			</div>
			<div slot="right"  @click="backClick()">
				<span>取消</span>
			</div>
		</mt-header>
		<div class="result-div">
			<mt-cell  v-for="film in searchList.subjects" key="1" class="film-list"  :to="{path:'/detail/'+film.id}">
				<div style="width:30%;"><img :src="film.images.large" width="100%" height="auto"></div>
				<div  style="width:60%;" class="info-list">
					<p class="title-p">{{film.title}}</h4>
					<p class="introduce-p">
						<el-rate v-model="film.rating.average" disabled show-text text-color="#ff9900" v-if="film.rating.average!=0">
						</el-rate>
						<span v-else>暂无评分</span>
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
				</div>
			</mt-cell>
		</div>
	</div>
</template>
<script>
import jsonp from '@/directive/jsonp.js';
import Swiper from '../../static/swiper/swiper-3.4.2.min.js';
import Vue from 'vue';
export default {
	name: 'search',
  	data () {
    	return {
    		inputVal:'',
    		searchList:'',
    	}
  	},
  	methods:{
  		//搜索点击
  		searchClick(){
  			let val=this.inputVal.trim();
  			if(val.length==0)
  				return;
  			//跳转路由：带查询参数，变成 /search?q=this.inputVal
  			/*this.$route.push({ path: 'search', query: { q: this.inputVal }})*/
  			this.getData(val);
  		},

  		//搜索数据
  		getData(val){
        	let url='https://api.douban.com/v2/movie/search?q='+ val;
        	//loading效果
            let loading = Vue.prototype.$loading({text:"玩命加载中..."});
			jsonp(url, {city:'广州' }, function (data) {
				 console.log(this.searchList);
             	//先结束loading效果
                loading.close();
                this.searchList=data;
            }.bind(this));
		},

		//取消键：返回
		backClick(){
			this.$router.go(-1);
		}

  	},
  	mounted:function(){
	}
}
</script>
<style>
.search-wrapper .mint-header{
	background-color: #f9c425;
    height: 1rem;
    padding: 0 0.24rem;
}
.search-wrapper .mint-header span{
	font-size: 0.3rem;
	display: inline-block;
	line-height: 1rem;
	width: 100%;
	height: 100%;
}
.search-wrapper .mint-header-button.is-right {
	height: 100%;
	width: 18%;
	text-align: center;
}
.search-wrapper .mint-header-button.is-right>div{
	height: 100%;
	width: 100%;
}
.search-wrapper .mint-navbar .mint-tab-item.is-selected {
	border-bottom: 3px solid #f9c425;
	color: #2c3e50;
	margin-bottom:0px;
}
.search-wrapper .mint-header .el-input,.search-wrapper{
    min-width: 220px;
    width: 100%;
    font-size: 0.35rem;
}
.search-wrapper .mint-header .is-left a {
    width: 100%;
    display: inline-block;
}
.search-wrapper .mint-header .is-left {
	 width: 80%;
}
.search-wrapper .mint-header .is-left,.search-wrapper .mint-header .is-right{
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
   
}

/* mint-cell */
.search-wrapper .mint-button-text{
	font-size: 0.28rem;
}
.search-wrapper .mint-cell-value button{
    width: 1.2rem;
    height: 0.7rem;
	font-weight: bolder;
	background-color: white;
}
.search-wrapper .buyTicket-btn{
	color: #ec294f;
	border: 1px solid #f76884;
}
.search-wrapper .booking-btn,.interest-btn{
	color: #f8ab5b;
	border: 1px solid #f9c425;
}
.search-wrapper .mint-cell-value>div{
	height: 100%;
}
.search-wrapper .mint-cell-value{
	width: 100%;
	padding:10px 0px;
}

.search-wrapper .film-list .title-p{
	font-size: 0.4rem;
	font-weight: bold;
	color: #2f2b2b;
	font-family: "STSong";
	margin:  0.25rem 0.1rem;
}
.search-wrapper .film-list .info-list{
	text-align: left;
	padding-left: 0.35rem;
}
.search-wrapper .film-list .introduce-p{
	font-size: 0.28rem;

}
.search-wrapper .film-list .see-p{
	font-size: 0.3rem;
	color: black;
	margin: 0.18rem 0.1rem;
}
.search-wrapper .film-list p{
	margin: 0.2rem  0.1rem;
}
.search-wrapper .film-list .star-img{
	height:  0.45rem;
	width:  0.45rem;
	position: relative;
    top: -3px;
}


.search-wrapper .el-rate__icon,.search-wrapper .el-rate__text{
	font-size: 0.3rem;
}


</style>