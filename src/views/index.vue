<template>
	<div class="app-wrapper">
		<mt-tabbar fixed >
			<mt-tab-item id="tab1" @click.native.prevent="selected = 'tab-container1'">
				<img slot="icon" src="../assets/image/热映.png" v-if="selected !== 'tab-container1'">
				<img slot="icon" src="../assets/image/热映1.png" v-else>
				热映
			</mt-tab-item>
			<mt-tab-item id="tab2" @click.native.prevent="selected = 'tab-container2'">
				<img slot="icon" src="../assets/image/找片.png" v-if="selected !== 'tab-container2'">
				<img slot="icon" src="../assets/image/找片1.png" v-else>
				找片
			</mt-tab-item>
			<mt-tab-item id="tab3" @click.native.prevent="selected = 'tab-container3'">
				<img slot="icon" src="../assets/image/用户.png" v-if="selected !== 'tab-container3'">
				<img slot="icon" src="../assets/image/用户1.png" v-else>
				我的
			</mt-tab-item>
		</mt-tabbar>
		<div class="app-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="selected" swipeable>  
		        <mt-tab-container-item id="tab-container1">  
		            <Tab1></Tab1> 
		        </mt-tab-container-item>  
		        <mt-tab-container-item id="tab-container2">  
		            <!-- cell组件 -->  
		        </mt-tab-container-item>  
		        <mt-tab-container-item id="tab-container3">  
		            <!-- cell组件 -->  
		        </mt-tab-container-item>  
	      </mt-tab-container>  
		</div>
	</div>
</template>
<script>
import Tab1 from './home.vue'
export default {
	name: 'index',
  	data () {
    	return {
      		selected:'tab-container1',
    	}
  	},
  	watch:{
  		selected:function(val,oldval) {
  			console.log(val);
  		}
  	},
  	components:{
  		Tab1,
  	}
}
</script>
<style scoped>
.app-wrapper .mint-header{
	background-color: #f9c425;
}
.app-wrapper .mint-tabbar{
	background-color: white;
}

</style>
