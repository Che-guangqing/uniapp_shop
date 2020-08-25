<template>
	<view class="wrapper">
		<view class="swiper_wrapper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
				<swiper-item v-for="(item,index) in goods.swiperImg" :key="index">
					<image :src="item" mode="" class="swiper_img"></image>
				</swiper-item>
			</swiper>
			<button class="swiper_card" @click="onshare" open-type="share">
				推荐好友
			</button>
		</view>
		<view class="goods_info">
			<text class="goods_des">
				{{goods.goodsDes}}
			</text>
			<view class="goods_price">
				<image class="gold" src="../../static/shop/icon/币.png" mode=""></image>
				<text class="price">{{goods.price}}</text>
				<text class="remain">包邮 剩余999+件</text>
			</view>
		</view>
		<view class="goods_info num">
			<view class="row row_b" @click="openPopup">
				<text class="row_title">请选择规格数量</text>
				<text class="row_icon">></text>
			</view>
			<view class="row">
				<text class="row_title">兑换记录</text>
				<text class="row_icon">></text>
			</view>
		</view>

<!-- 		<view class="show">
			<view class="show_title">
				兑换说明
			</view>
			反反复复付付付付付付付地方法科技佛法看懂食品款卡螺丝刀，了电控柜皮肤科目搜女。
		</view> -->
		
		<view class="pingjia">
			<view class="pingjia_title">用户评价</view>
			<view class="pingjia_info">
				<view class="avatar">
					<image class="avatar_img" src="../../static/avatar.jpg" mode=""></image>
				</view>
				<view class="pingjia_right">
					<view class="name">
						车车
					</view>
					<view class="content">
						防腐剂比地方可能吧附近批示GV就，分别放那边，大家覅山东海冠化工覅。
					</view>
					<view class="pingjia_img">
						<image class="imageItem" src="../../static/1.jpg" mode=""></image>
						<image class="imageItem" src="../../static/2.jpg" mode=""></image>
						<image class="imageItem" src="../../static/3.jpeg" mode=""></image>
					</view>
				</view>
			</view>
			<view class="pingjia_btn">
				查看更多评价
			</view>
		</view>
		<view class="goods_detail">
			商品详情
		</view>
		<view class="bottom">
			<view class="bottom_left" @click="onCollect">
				<image class="b_img" v-if="!collect" src="../../static/shop/collect0.png" ></image>
				<image class="b_img" v-else src="../../static/shop/collect1.png" ></image>
				<view class="bottom_text">
					{{collect?'已收藏':'收藏'}}
				</view>
			</view>
			<button class="bottom_right" @click="onshare" open-type="share">
				商城币不够，快去邀请好友玩游戏吧
			</button>
		</view>

		<popUp ref="popup" :goodsData="goods" ></popUp>
	</view>
</template>

<script>
	import popUp from "../../layout/popup/popup.vue"
	export default {
		data() {
			return {
				goods: null,
				collect: true
			}
		},
		methods: {
			openPopup () {
				this.$refs.popup.open()
				console.log(this.$refs.popup)
			},
			onshare () {
				return {
					title:'海蓝之谜',
					path:'',
					imageUrl:'',
					success(res) {
						console.log('success',res)
					},
					fail:(err) => {
						console.log('error',err)
					}
				}
			},
			onCollect() {
				this.collect= !this.collect
			}
		},
		components: {
			popUp
		},
		onLoad(option) {
			console.log(JSON.parse(option.info))
			// console.log(typeof(option.info))
			this.goods = JSON.parse(option.info)
		},
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 2370rpx;
		background-color: #f6f6f6;
	}

	/* swiper_wrapper */
	.swiper_wrapper {
		position: relative;
	}

	.swiper {
		width: 100%;
		height: 702rpx;
	}

	.swiper_img {
		width: 100%;
		height: 100%;
	}

	.swiper_card {
		width: 150rpx;
		height: 74rpx;
		line-height: 74rpx;
		background-color: #803bfd;
		font-size: 29rpx;
		color: #FFFFFF;
		text-align: center;
		border-radius: 37rpx 0 0 37rpx;
		position: absolute;
		right: 0;
		bottom: 74rpx;
		padding: 0;
	}

	/* goods_info */
	.goods_info {
		height: 150rpx;
		background-color: #FFFFFF;
		padding: 0 0 0 30rpx;
	}

	.goods_des {
		display: inline-block;
		margin-top: 30rpx;
		font-size: 35rpx;
		color: #3B3B3B;
	}

	.goods_price {
		display: flex;
		align-items: center;
	}

	.gold {
		width: 38rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}

	.price {
		font-size: 36rpx;
		color: #de3238;
		width: 430rpx;
		line-height: 75rpx;
	}

	.remain {
		color: #999999;
		font-size: 29rpx;
	}

	/* goods_info num */
	.goods_info.num {
		margin-top: 20rpx;
	}

	.row {
		font-size: 29rpx;
		color: #666666;
		height: 75rpx;
		width: 690rpx;
		line-height: 75rpx;
		margin-top: 0;
	}
	.row.row_b {		
		border-bottom: 1rpx solid #EDEDED;
		color: #3B3B3B;
	}

	.row_title {
		display: inline-block;
		width: 200rpx;
		margin-right: 440rpx;
	}

	.row_icon {}

	/* show */
	.show {
		margin-top: 20rpx;
		height: 390rpx;
		background-color: #fff6a2;
		padding: 30rpx 30rpx 0 30rpx;
		font-size: 29rpx;
	}

	.show_title {
		text-align: center;
		color: #3B3B3B;
		font-size: 35rpx;
	}

	/* pingjia */
	.pingjia {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 30rpx 0 30rpx 30rpx;
	}

	.pingjia_title {
		color: #3B3B3B;
		color: 35rpx;
		height: 40rpx;
	}

	.pingjia_info {
		margin-top: 34rpx;
		display: flex;
	}

	.avatar {
		width: 110rpx;
		height: 110rpx;
	}

	.avatar_img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 3rpx solid #3B3B3B;
	}

	.pingjia_right {
		/* flex: 1; */
		margin-left: 16rpx;
		width: 550rpx;
		font-size: 29rpx;
	}

	.name {
		color: #666666;
	}

	.content {
		color: #3B3B3B;
	}

	.pingjia_img {
		margin-top: 40rpx;
	}

	.imageItem {
		width: 140rpx;
		height: 140rpx;
		border-radius: 16rpx;
		margin-right: 30rpx;
	}

	.pingjia_btn {
		margin: 0 auto;
		margin-top: 34rpx;
		margin-bottom: 30rpx;
		background-color: #ffe700;
		width: 200rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 19rpx;
		font-size: 29rpx;
		color: #3B3B3B;
	}

	.goods_detail {
		height: 670rpx;
		text-align: center;
		margin-top: 40rpx;
	}

	/* bottom */
	.bottom {
		height: 120rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}

	.bottom_left {
		padding: 0 30rpx;
		margin-right: 40rpx;
        text-align: center;
		
		width: 78rpx;
	}

	.b_img {
		width: 45rpx;
		height: 43rpx;
	}
	.bottom_text {
		font-size: 26rpx;
		color: #3B3B3B;
	}

	.bottom_right {
		margin: 0;
		padding: 0;
		border: 1px solid transparent;  //自定义边框
		outline: none;    //消除默认点击蓝色边框效果
		
		width: 540rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #ffe700;
		border: 3rpx solid #3B3B3B;
		border-radius: 16rpx;
		font-size: 31rpx;
		text-align: center;
	}
</style>
