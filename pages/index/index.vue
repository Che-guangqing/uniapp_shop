<template>
	<view>
		<view class="top">

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
<!-- 		<view class="content">
			<swiper class="swiper">
				<swiper-item v-for="(item,index) in contentList" :key="index">
					<view class="">{{item.type}}{{item.typeDes}}</view>
					<view class="swiper_flex">
						<view class="swiper_item" v-for="(item,index) in item.cont">
							<image class="item_img" :src="item.img" mode=""></image>
							<view class="item_des">{{item.goodsDes}}</view>
							<text class="item_price">{{item.price}}</text>
							<text class="item_num">已有{{item.num}}兑换</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view> -->
		
		<!-- 导航 -->
		<view class="bar">
			<scroll-view scroll-x="true" scroll-with-animation class="scroll-tab">
				<block v-for="(item,index) in bars" :key="index">
					<view class="scroll-tab-item" :class="{'active': tabIndex==index}" 
					@tap="toggleTab(index)">
						{{item.name}}
						<view class="scroll-tab-line"></view>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!-- 内容区 -->
		<view class="content">
			<!-- 滑块视图 -->
			<swiper :current="tabIndex" @change="tabChange"><!-- current:当前所在滑块的index -->
				<swiper-item v-for="(item,index) in contentList" :key="index">
					<view class="">{{item.type}}{{item.typeDes}}</view>
					<view class="swiper_flex">
						<view class="swiper_item" v-for="(item,index) in item.cont">
							<image class="item_img" :src="item.img" mode=""></image>
							<view class="item_des">{{item.goodsDes}}</view>
							<text class="item_price">{{item.price}}</text>
							<text class="item_num">已有{{item.num}}兑换</text>
							<image class="free_img" src="../../static/shop/icon/免费兑换.png" mode=""></image>
						</view>
					</view>
				</swiper-item>
			</swiper>
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
				bars:[
				// {
				// 	name:'全部',
				// 	id:'quanbu'		
				// },
				{
					name: '闪兑专区',
					id: 'shandui'
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
				}],
				contentList: [{
						type: '闪兑专区',
						typeDes: '使用商城币兑换相应产品，不限次数',
						cont: [{
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '999+'
						}, {
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '999+'
						},]
					}, {
						type: '密友专区',
						typeDes: '密友越多，解锁更多专项产品',
						cont: [{
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '999+'
						}, {
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '999+'
						}]
					}, {
						type: '任务专区',
						typeDes: '密友越多，解锁更多专项产品',
						cont: [{
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '999+'
						}, {
							img: '../../static/shop/goods.webp',
							goodsDes: '海蓝之谜，啦啦啦啦啦啦啦',
							icon: '',
							price: '199',
							num: '500'
						}]
					}


				]

			}
		},
		methods: {
			//切换选项卡
			toggleTab (index) { 
				this.tabIndex=index;
			},
			//滑动切换swiper
			tabChange (e) { 
				console.log(e);
				this.tabIndex=e.detail.current;
			}
		}
	}
</script>

<style>
	.top {
		height: 280rpx;
		border: 3rpx solid #000;
		/* background-image: url(''); */
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
		padding: 5px 10px;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		background-color: #DDDDDD;
		border-radius: 20px 20px;
	}

	/* bg */
	.bg {
		padding: 0 8rpx;
		display: flex;
		margin-top: ;
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
		width: 239rpx;
		height: 142rpx;
	}

	.green {
		margin: 10rpx 14rpx 0 14rpx;
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

	uni-swiper {
		height: 800rpx;
	}

	.swiper_flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
	}

	.swiper_item {
		width: 330rpx;
		height: 473rpx;
		border-radius: 16rpx;
		border: 4rpx solid #000;
	}

	.item_img {
		width: 330rpx;
		height: 329rpx;
	}
	
	/* scroll */
	.horizonal-tab{
		
	}
	.horizonal-tab .active{
		color: #F0AD4E;
	}
	.active .scroll-tab-line[data-v-57280228]{
		    border-bottom: 2px solid #F0AD4E;
		    border-top: 2px solid #F0AD4E;
	}
	.scroll-tab{
		white-space: nowrap; /* 必要，导航栏才能横向*/
		/* border-bottom: 1rpx solid #eee; */
		text-align: center;
	}
	.scroll-tab-item{
		display: inline-block; /* 必要，导航栏才能横向*/
		margin: 20rpx 30rpx 0 30rpx;
	}
	.active .scroll-tab-line{
		border-bottom: 5rpx solid red;
		border-top: 5rpx solid red;
		border-radius: 20rpx;
		width: 70rpx;
	}
	.free_img{
		width: 240rpx;
		height: 79rpx;
		margin-top: 30rpx;
	}
</style>
