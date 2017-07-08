//轮播
const banner = '/api/billboard/home?__t=1498871531912';

//首页列表
const homelist = '/api/film/now-playing?__t=1498871531920&page=1&count=5';


//首页列表更多
const homelistmore = '/api/film/coming-soon?__t=1498871531925&page=1&count=3';

export default{
	bannerApi:banner,
	homelistApi:homelist,
	homelistmoreApi:homelistmore
}
