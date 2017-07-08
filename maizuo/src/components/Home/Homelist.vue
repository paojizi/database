<template>
	<div class="homelistbox">
		<ul class="homelist">
			<li v-for="(item,index) in homelist" >
				<div class="listimgbox">
					<img :src="item.cover.origin" />
				</div>
				
				<div class="listtxt">
					<div class="listtxtleft">
						<p class="listtxtleft_1">{{item.name}}</p>
						<p class="listtxtleft_2">
							<span>{{item.cinemaCount}}</span>
							<span>家影院上映</span>
							<span>{{item.watchCount}}</span>
							<span>人购票</span>
						</p>
					</div>
				
					<div class="listtxtright">{{item.grade}}</div>
				</div>
			</li>
		</ul>
		
		<div class="more-button">
			更多热映电影
		</div>
		
		<div class="dividing-line">
			<div class="upcoming">即将上映</div>
		</div>
		
		<ul class="homelistmore">
			<li v-for="(item,index) in homelistmore" >
				<div>
					<img :src="item.cover.origin"/>
				</div>
				<div>
					<div>{{item.name}}</div>
					<div>{{}}</div>
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
import api from '../../common/api'
import axios from 'axios'
export default {
	data(){
		return {
			homelist:[],
			homelistmore:[],
			time:[]
		}
	},
	computed(){
		sum:function(){
			return
		}
	},
	created(){
		this.$http.get(api.homelistApi)
		.then((response)=>{
//			console.log(response.data.data.films)
			let list = response.data.data.films
			this.homelist = list;
			
		})
		.catch((error)=>{
			console.log(error)
		})
		
		this.$http.get(api.homelistmoreApi)
		.then((response)=>{
			
			let list = response.data.data.films
			this.homelistmore = list;
			console.log(this.homelistmore)
			
		})
		.catch((error)=>{
			console.log(error)
		})
	}
}
</script>

<style>
.homelistbox{
	position: absolute;
	top:230px;
	left:0;
	width:100%;
	background-color: #f9f9f9;
}	
.homelist{
	padding-top: 18px;
	padding-left: 0;    
    margin-bottom: 10px;
    
}
.homelist li{
	margin: 0 17px 17px 17px;
   
    cursor: pointer;
    box-sizing: border-box;
    
}
.listimgbox{
	overflow: hidden;
    
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
}
.listimgbox img{
	width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
    vertical-align: middle;
    border: 0;
}
.listtxt{
	
    height: 50px;
    box-sizing: border-box;
    background: white;
   
}
.listtxtleft{
	height: 50px;
    padding-right: 0;
    padding-top: 13px;
    padding-left: 10px;
    
    float: left;
    
    min-height: 1px;
}
.listtxtleft_1{
	font-size: 12px;
    line-height: 15px;
    user-select: text;
    box-sizing: border-box;
}
.listtxtleft_2{
	font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
    box-sizing: border-box;
}
.listtxtleft_2 span{
	font-size: 8px;
    color: #9a9a9a;
    line-height: 15px;
}
.listtxtright{		
	float: right;	
    min-height: 1px;    
    box-sizing: border-box;
    color: #f78360;
    display: inline-block;
    line-height: 50px;    
    margin-right: 15px;
    font-size: 18px;
}


.more-button{
	width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
}

.dividing-line{
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
}

.upcoming{
	width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;    
}
</style>