<template>
	<view>
		<view class="top">
			<swiper  :autoplay="true" :interval="3000" :duration="1000" >
				<swiper-item>
					<image class="swiper_img" src="../../static/shop/goods.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper_img" src="../../static/shop/goods2.png" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper_img" src="../../static/shop/goods3.jpg" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navList" :key="index">
				<image class="nav_icon" :src="item.url" mode=""></image>
				<text class="nav_text">{{item.text}}</text>
			</view>
		</view>
		<view class="bg">
			<image class="blue" src="../../static/shop/icon/蓝.png" mode=""></image>
			<view class="mid">
				<image class="yellow" src="../../static/shop/icon/黄_.png" mode=""></image>
				<image class="green" src="../../static/shop/icon/绿.png" mode=""></image>
			</view>
			<image class="red" src="../../static/shop/icon/红.png" mode=""></image>
		</view>
		
		<view class="iconfont">
			<view class="iconfont_item" v-for="(item,index) in iconfontList" :key="index">
				<image class="iconfont_icon" :src="item.url" mode=""></image>
				<view class="iconfont_text">{{item.text}}</view>
			</view>
		</view>

		<!-- 导航 -->
		<view class="bar">
			<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab">
				<block v-for="(item,index) in bars" :key="item.id">
					<view class="scroll-tab-item" 
					:class="{'active': tabIndex==index}" 
					@tap="toggleTab(index)"
					>{{item.name}}
					<view class="scroll-tab-line"></view>
					</view>
				</block>
			</scroll-view>
		</view>

		<!-- 内容区 -->
		<view class="content">
			<scroll-view scroll-y="true" v-for="(content,index) in newArry" :key="index">
				<view class="text"><text class="big">{{content.type}}</text> <text class="small">{{content.typeDes}}</text></view>
				<view class="swiper_flex">
					<view class="swiper_item" v-for="(item,index) in content.cont">
						<view class="swiper_con">
							<image class="item_img" :src="item.img" mode=""></image>
							<view class="item_des">{{item.goodsDes}}</view>
							<view class="item_bottom">
								<view class="round"></view>
								<text class="item_price">{{item.price}}</text>
								<text class="item_num">已有{{item.num}}兑换</text>
							</view>
						</view>
						<image class="free_img" src="../../static/shop/icon/免费兑换.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						url: '../../static/shop/icon/币.png',
						text: '20000'
					},
					{
						url: '../../static/shop/icon/钻石.png',
						text: '20000'
					},
					{
						url: '../../static/shop/icon/币.png',
						text: '20000'
					},
				],
				iconfontList: [{
					url: '../../static/shop/icon/好运.png',
					text: '好运来'
				}, {
					url: '../../static/shop/icon/打卡.png',
					text: '打卡得钻石'
				}, {
					url: '../../static/shop/icon/任务.png',
					text: '任务'
				}, {
					url: '../../static/shop/icon/公益.png',
					text: '公益'
				}],
				tabIndex: 0,
				bars: [
					{
						name:'全部',
						id:'quanbu'		
					},
					{
						name: '闪兑专区',
						id: 'shandui',
					},
					{
						name: '密友专区',
						id: 'miyou'
					},
					{
						name: '任务专区',
						id: 'renwu'
					},
					{
						name: '超值专区',
						id: 'chaozhi'
					},
					{
						name: '公益专区',
						id: 'gongyi'
					}
				],
				contentList: [{
					type: '闪兑专区',
					id: 'shandui',
					typeDes: '使用商城币兑换相应产品，不限次数',
					cont: [{
						img: '../../static/shop/goods.jpg',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '999+'
					}, {
						img: '../../static/shop/goods.jpg',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '5000'
					}, ]
				}, {
					type: '密友专区',
					id:'miyou',
					typeDes: '密友越多，解锁更多专项产品',
					cont: [{
						img: '../../static/shop/goods2.png',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '5000'
					}, {
						img: '../../static/shop/goods3.jpg',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '999+'
					},{
						img: '../../static/shop/goods4.jpg',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '999+'
					}, {
						img: '../../static/shop/goods.jpg',
						goodsDes: '海蓝之谜，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦绿',
						icon: '',
						price: '199',
						num: '999+'
					}]
				}],
				newArry:[]
			}
		},
		onReady() {
			this.newArry = this.contentList
		},
		methods: {
			toggleTab(index) {
				let list = this.contentList
				if(index === 1) {
					this.newArry = list.slice(0,1)
				}else if(index ===2){
					this.newArry = list.slice(1,2)
				}else if(index === 0) {
					this.newArry = list
				}else{
					this.newArry = [];
				}
				console.log(this.newArry)
				this.tabIndex = index;
			},
		}
	}
</script>

<style>
	/* top */
	.top {
		height: 280rpx;
		border: 4rpx solid #000;
	}
	.swiper_img{
		width: 100%;
		height: 280rpx;
	}

	/* nav */
	.nav {
		margin: 0 20rpx;
		height: 90rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}

	.nav_icon {
		display: inline-block;
		width: 38rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}

	.nav_item {
		display: flex;
		align-items: center;
		/* 	margin: 20rpx 106rpx 30rpx 20rpx */
		/* margin-right: 106rpx; */
	}

	.nav_text {
		/* padding: 5px 10px; */
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		background-color: #DDDDDD;
		border-radius: 20px 20px;
		font-size: 29rpx;
		padding: 0 10rpx;
	}

	/* bg */
	.bg {
		padding: 0 8rpx;
		display: flex;
		margin-top: ;
		position: relative;
		
	}

	.mid {
		display: flex;
		flex-direction: column;
	}

	.blue {
		width: 236rpx;
		height: 258rpx;
	}

	.yellow {
/* 		width: 239rpx;
		height: 142rpx; */
		left: 208rpx;
		width: 330rpx;
		height: 142rpx;
		position: absolute;
	}

	.green {
		margin: 152rpx 14rpx 0 14rpx;
		width: 234rpx;
		height: 108rpx;
	}

	.red {
		width: 244rpx;
		height: 258rpx;
	}

	/* iconfont */
	.iconfont {
		display: flex;
		justify-content: space-between;
		margin: 30rpx 40rpx 50rpx 40rpx;
	}

	.iconfont_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
	}

	.iconfont_icon {
		width: 121rpx;
		height: 121rpx;
		margin-bottom: 14rpx;
	}
	.iconfont_text{
		font-size: 26rpx;
		font-weight: 500;
	}
	
	
	/* bar */
	.bar{
		
	}
	

	.scroll-tab {
		white-space: nowrap;
		/* 导航栏横向*/
		/* border-bottom: 1rpx solid #eee; */
		text-align: center;
	}

	.scroll-tab-item {
		display: inline-block;
		margin-left: 30rpx;	
		font-size: 26rpx;
		color: #333333;
	}
	.scroll-tab-item.active{
		color: #000000;
        font-size: 39rpx;
		font-weight: 500;
	}
	.active .scroll-tab-line {
		margin-top: 10rpx;
		border-radius:3rpx;
		width: 26rpx;
		height: 6rpx;
		background-color: #fec502;
		margin-left: 15rpx;
	}
	.active .scroll-tab-line::after{
		content: '';
		width: 12rpx;
		height: 6rpx;
		background-color: #fec502;
		border-radius:3rpx;
		position: absolute;
		margin-left: 20rpx;
	}

	/* scroll */
	.text{
		margin-top: 30rpx;
	}
	.big{
		font-size: 35rpx;
		margin: 0 20rpx 0 30rpx;
	}
	.small{
		font-size: 26rpx;
	}
	.swiper_flex {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	
	.swiper_item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.swiper_con{
		width: 330rpx;
		height: 473rpx;
		border-radius: 16rpx;
		border: 4rpx solid #000;
		margin-top: 40rpx;
	}
	.item_img {
		width: 330rpx;
		height: 329rpx;	
	}
	.item_des{
		/* margin-top: 18rpx; */
		padding:0 20rpx;
		font-size: 24rpx;
		height: 52rpx;
	}
	.item_bottom{
		margin-top: 30rpx;
		padding: 0 12rpx;
		line-height:26rpx;
		height: 26rpx;
	}
	.round{
		width: 26rpx;
		height: 26rpx;
		background-color: #8EE5EE;
		border-radius: 50%;
		display: inline-block;
		margin-right: 8rpx;
	}
	.item_price{
		font-size: 26rpx;
	}
	.item_num{
		color: #9a9a9a;
		font-size: 23rpx;
		margin-left: 77rpx;
	}
	
	.free_img {
		display: inline-block;
		width: 240rpx;
		height: 79rpx;
		margin-top: 30rpx;
	}
	

</style>
