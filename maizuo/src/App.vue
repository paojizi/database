<template>
  <div id="app">
    <nav class="nav" >
    	<h1 class="navleft" @click="btnAction1" >
    		<a href="javascript:;" class="iconfont toolbar-title-icon" >&#xe657;</a>
    		<a href="javascript:;" class="toolbar-title">卖座电影</a>
    		<div class="clear"></div>
    	</h1>
    	<div class="navright">
    		<router-link  class="city" :to="tabs.path">
					<span>深圳</span>
					<i class='iconfont'>&#xe60a;</i>
				</router-link>
				<router-link  class="user" :to="tabs1.path">
					<i class='iconfont'>&#xe606;</i>
				</router-link>
				<div class="clear"></div>
    	</div>
			<div class="clear"></div>
		</nav>
		<div class="content">
			<banner1></banner1>
			<homelist></homelist>
		</div>
		<div class="sidebar-container" >
			
					<transition name="fade">
						<div class="leftnav" v-if="isSelect">
							<ul>
								<li>
									<a href=""><span>首页</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>影片</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>影院</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>商城</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>演出</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>我的</span><i class="iconfont">&#xe649;</i></a>
								</li>
								<li>
									<a href=""><span>卖座卡</span><i class="iconfont">&#xe649;</i></a>
								</li>
							</ul>
						</div>
					</transition>
			<transition name="fade1">
				<div class="sidebar-overlay" v-if="isSelect" @click="btnAction2">
				</div>
			</transition>	
		</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from './components/Home/Banner.vue'
import Homelist from './components/Home/Homelist.vue'
export default {
	data(){
			return {
				tabs:{title: '外卖', path: '/city'},
				tabs1:{title: '外卖', path: '/register'},
				isSelect:false				
			}			
	},
	components:{
		'banner1':Banner,
		'homelist':Homelist
	},
	methods:{
		btnAction1(){
			
			this.isSelect = !this.isSelect;
		},
		btnAction2(){
			
			if(this.isSelect){
				this.isSelect = false;
			}			
		}
		
		
	}
}
</script>

<style>

/*.ani-time{
	animation-duration: 2s;
}*/
@keyframes enter{
	from{
		transform: translateX(-210px);
	}
	to{
		transform: translateX(0px);
	}
}
@keyframes leave{
	from{
		transform: translateX(0px);
	}
	to{
		transform: translateX(-210px);
	}
}
.fade-leave-active{
	animation: leave 1s;
}

.fade-enter-active{
	animation: enter 1s;
}

.fade1-enter-active, .fade1-leave-active {
  transition: opacity 1s
}
.fade1-enter, .fade1-leave-to {
  opacity: 0
}



.nav{
	background: #282828;
	position: fixed;
	z-index: 503;
	top: 0;
	right: 0;
	left: 0;
	width: auto;
	height: 50px;
	line-height: 50px;
	overflow: hidden;
}
.nav .navleft{
	color: #fff;
    font-size: 16px;
    line-height: 50px;
    text-align: left;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
    width: auto;
    height: 50px;
    margin: 0 auto;
    float: left;
}
.nav .navleft .toolbar-title-icon{
	float: left;
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;
}
.nav .navleft .toolbar-title{	
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    displdday: inline-block;
    overflow: hidden;
    width: 150px;
    max-width: 200px;
}
.nav .navright{
	float:right;
	
}
.nav .navright .city{
	float:left;
	font-size: 14px;
    padding: 0 6px;
    color: #999;
    outline: none;
}
.nav .navright .user{
	  float: left;
    font-size: 16px;
    width: 48px;
    text-align: center;
    color: #999;
    outline: none;
}




.sidebar-overlay{
	background: rgba(0,0,0,0.5);
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
   z-index: 501;
}
.leftnav{
	  border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: absolute;
    display: block;
    top: 0;
    right: 110px;
    bottom: 0;
    left: 0;
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
    z-index: 502;
}
.leftnav ul li{
	line-height: 50px;
}
    
.leftnav ul li a{
	color: #9a9a9a;
    font-size: 14px;
    display: block;   
    padding-left: 16px;
    border-bottom: 1px dotted #333;
}
.leftnav ul li a i{
	float: right;
  color: #666;
  font-size: 14px;
}
</style>
