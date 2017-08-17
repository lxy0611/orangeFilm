
//把全体接口封装在的前端配置文件（序号与接口文档一一对应），多个环境配置时可快速切换整站式的全部接口，不用逐个页面去改。
const config = require('../../config');
export const api = {
	//"in_theaters":url.staticPath+"/dataJson/in_theaters.json",  //获取电影列表,json
    "in_theaters":"/v2/movie/in_theaters",  //获取电影列表
}
    