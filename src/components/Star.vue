<template>
  <span class='star'>
  	<img src="../assets/image/star.png" class="star-img" v-for="n in ratingObj.star" :key="'star'+n">
	<img src="../assets/image/star_half.png" value="star_half" v-for="n in ratingObj.half" :key="'half'+n"/>
	<img src="../assets/image/star_unlit.png" value="star_unlit" v-for="n in ratingObj.unlit" :key="'unlit'+n"/>
  </span>
</template>
<script>
  export default {
    props: ['rating'],
    computed: {
    	//十分制转成五星评分标准
      	ratingObj() {
	        const intNum = Math.round(this.rating); //四舍五入
	        const star = Math.floor(intNum / 2);
	        const half = intNum % 2;
	        const unlit = 5 - star - half;
	        return { star, half, unlit};
      	},
    },
  };
</script>
<style>
.star img{
	width:  0.35rem;
}
</style>