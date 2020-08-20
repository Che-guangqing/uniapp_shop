<template>
	<view>
		<view class="nav_wrapper">
			<view class="nav">
				<view class="nav_item" v-for="(item,index) in navList" :key="index">
					<image class="nav_icon" :src="item.url" mode=""></image>
					<text class="nav_text">{{item.text}}</text>
				</view>
			</view>
		</view>

		<view class="card">
			<!-- 			<open-data type="userAvatarUrl" class="tx"></open-data>
			<text><open-data type="userNickName" ></open-data></text> -->
			<view class="card_avatar">
				<image :src="cardArr.avatarUrl" mode="" class="card_img"></image>
			</view>
			<view class="info">
				<view class="info_name">
					{{cardArr.nickName}}
				</view>
				<view class="info_invite">
					邀请人：SumH
				</view>
			</view>
			<view class="card_purple">
				邀请密友得N倍钻石
			</view>
		</view>

		<view class="order">
			<text class="my_title">我的订单</text>
			<text class="all">查看全部 </text>
			<text class="order_icon">&gt</text>
		</view>
		<view class="orders_iconfont">
			<view class="order_item" v-for="(item,index) in orderList" :key="index">
				<image class="o_icon" :src="item.url" mode=""></image>
				<view class="o_name">{{item.name}}</view>
			</view>
		</view>

		<view class="tool">
			<text class="my_title">常用工具</text>
		</view>
		<view class="tools_iconfont">
			<view class="tool_item" v-for="(item,index) in toolsList" :key="index" @click="go(item.name,$event)">
				<image class="o_icon" :src="item.url" mode=""></image>
				<view class="o_name">{{item.name}}</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardArr: [],
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
				orderList: [{
					name: '代付款',
					url: '../../static/my/order1.png',
				}, {
					name: '代发货',
					url: '../../static/my/order2.png',
				}, {
					name: '待收货',
					url: '../../static/my/order3.png',
				}, {
					name: '评价',
					url: '../../static/my/order4.png',
				}, {
					name: '退款退货',
					url: '../../static/my/order5.png',
				}],
				toolsList: [{
					name: '地址管理',
					url: '../../static/my/tool1.png',
				}, {
					name: '收藏',
					url: '../../static/my/tool2.png',
				}, {
					name: '帮助',
					url: '../../static/my/tool3.png',
				}, {
					name: '消息通知',
					url: '../../static/my/tool4.png',
				}, {
					name: '游戏中心',
					url: '../../static/my/tool5.png',
				}, {
					name: '签到',
					url: '../../static/my/tool6.png',
				}, {
					name: '幸运抽奖',
					url: '../../static/my/tool7.png',
				}, {
					name: '',
					url: ''
				}]
			}
		},
		methods: {
			go(item, e) {
				if (item === '地址管理') {
					uni.navigateTo({
						url: '../addressList/addressList'
					})
				} else {
					console.log(item)
				}

			}

		},
		onLoad() {
			let  that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息				
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							that.cardArr = infoRes.userInfo
							console.log(that.cardArr)
						}
					});
				}
			});
		},
	}
</script>

<style>
	/* nav */
	.nav_wrapper {
		height: 125rpx;
		width: 100%;
		background-color: #FFD700;
		box-sizing: border-box;
	}

	.nav {
		padding-top: 10rpx;
		height: 40rpx;
		line-height: 40rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;

		/* position: relative; */
	}

	.nav_item {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
	}

	.nav_icon {
		display: inline-block;
		width: 38rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}

	.nav_text {
		/* padding: 5px 10px; */
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		background-color: rgba(255, 255, 255, 0.7);
		color: #3b3b3b;
		border-radius: 20px 20px;
		font-size: 29rpx;
		padding: 0 20rpx;
	}

	/* card */
	.card {
		margin: 0 30rpx;
		width: 690rpx;
		height: 160rpx;
		border: 4rpx solid #3B3B3B;
		border-radius: 16rpx;
		box-shadow: 0px 6rpx 6rpx rgb(0, 0, 0, 0.4);
		transform: translatey(-50rpx);
		background-color: #FFFFFF;

		display: flex;
		align-items: center;

	}

	.card_avatar {
		width: 110rpx;
		height: 110rpx;
		border: 5rpx solid #000000;
		border-radius: 50%;
		/* background-color: #007AFF; */
		margin-left: 36rpx;
	}
	.card_img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.info {
		margin-left: 20rpx;
		color: #3B3B3B;
	}

	.info_name {
		font-size: 38rpx;
	}

	.info_invite {
		margin-top: 20rpx;
		font-size: 29rpx;
		background-color: #EDEDED;
		border-radius: 20rpx;
		padding: 0 20rpx;
	}

	.card_purple {
		font-size: 24rpx;
		color: #FFFFFF;
		width: 255rpx;
		height: 45rpx;
		background-color: #7B68EE;
		border: 5rpx solid #000000;
		box-shadow: -3rpx 5rpx 3rpx 5rpx rgba(0, 0, 0, 0.5);
		transform: translateX(36rpx) translateY(-40rpx)
	}

	.card_purple::before {
		content: '';
		display: inline-block;
		border-top: 25rpx solid transparent;
		border-right: 25rpx solid transparent;
		border-bottom: 25rpx solid transparent;
		border-left: 25rpx solid #fff;
		/* 		width: 50rpx;
		height: 50rpx; */
		/* background-color: #007AFF; */
	}

	/* order */
	.order {
		height: 35rpx;
		line-height: 35rpx;
		/* background-color: red; */
		margin: 0 30rpx;
		margin-top: -30rpx;
	}

	.my_title {
		font-size: 35rpx;
		color: #3B3B3B;
		margin-right: 405rpx;
	}

	.all {
		font-size: 29rpx;
		color: #bcbcbc;
		margin-right: 10rpx;
	}

	.order_icon {
		color: #bcbcbc;
	}

	.orders_iconfont {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.order_item {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.o_icon {
		margin-top: 40rpx;
		width: 60rpx;
		height: 60rpx;
	}

	.o_name {
		font-size: 26rpx;
		color: #3B3B3B;
		margin-top: 20rpx;
	}

	/* tool */
	.tool {
		height: 35rpx;
		line-height: 35rpx;
		/* background-color: red; */
		margin: 0 30rpx;
		margin-top: 50rpx;
	}

	.tools_iconfont {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.tool_item {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 187.5rpx;
	}
</style>
