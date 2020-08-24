<template>
	<view class="wrapper">
		<view class="state">
			<view class="state_text">
				<view>等待卖家付款</view>
				<view>剩9小时15分自动关闭</view>
			</view>
			<view class="bg">
				<!-- <image src="" mode=""></image> -->
			</view>
		</view>
		<view class="address">
			<view class="info_row">
				<text class="info_name">{{address.name}}</text>
				<text class="info_tel">{{address.tel}}</text>
			</view>
			<view class="info_address">
				{{address.txt}} {{address.address}} 
			</view>
		</view>
		
		<view class="goods">
			<view class="top">包裹1</view>
			<view class="bottom">
				<view class="left">
					<!-- <image class="goods_img" src="" mode=""></image> -->
				</view>
				<view class="right">
					<view class="row">
						<text class="row_title">是基础js语法。浏览器基于标准js</text>
						<text class="num">X1</text>
					</view>
					<view class="color">
						白色；M
					</view>
					<view class="money">
						<image class="gold" src="../../static/shop/icon/币.png" mode=""></image>
						<text class="money_text">4512</text>
					</view>
				</view>
			</view>

		</view>
		<view class="order_info">
			<view class="order_title">
				订单信息
			</view>
			<view class="order_num">
				订单编号：24526562
			</view>
			<view class="order_time">
				下单时间：2019.0502 11：10
			</view>
		</view>
		<view class="button">
			<view class="item">
				取消订单
			</view>
			<view class="item pay">
				付款
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				// address:null
			}
		},
		computed: {
			...mapState(['addressList']),
			address() {
				console.log(this.addressList)
				let data = this.addressList
				for (var i = 0; i < data.length; i++) {
					if (data[i].flag) {
						return data[i]
					}
				}
			}
		},
		methods: {

		},

		mounted() {

		}
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 1246rpx;;
		background-color: #f6f6f6;
	}
	.state {
		height: 150rpx;
		background-color: #ffe2ca;
	}
	.state_text {
		font-size: 29rpx;
		color: #000000;
		margin-left: 76rpx;
	}
    /* address */
	.address {
		height: 150rpx;
		background-color: #FFFFFF;
		font-size: 26rpx;
		color: #3B3B3B;
		padding-left: 30rpx;
	}
	.info_row{

	}
	.info_name{
		display: inline-block;
		margin-top: 20rpx;
		margin-right: 60rpx;
	}
	.info_tel{
		
	}
	.info_address{
		margin-top: 20rpx;
	}



	.bg {}
	
	/* goods */
	.goods{
		margin-top: 20rpx;
		background-color: #FFFFFF;
		padding-left: 30rpx;
	}
	.top{
		font-size: 29rpx;
		color: #3B3B3B;
		border-bottom: 1rpx solid #999999;
		line-height: 50rpx;
	}
	.bottom{
		display: flex;
		margin-top: 20rpx;
	}
	.left{
		width: 140rpx;
		height: 140rpx;
		margin-right: 20rpx;
		border: 1rpx solid red;
	}
	.right{
		/* flex: 1; */
	}
	.row{
		font-size: 26rpx;
		display: flex;
	}
	.row_title{
		display: inline-block;
		width: 320rpx;
		margin-right: 200rpx;
	}
	.num{
		display: inline-block;
	}
	.color{
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.money{
		display: flex;
		justify-content:flex-end;
		align-items: center;
	}
	.gold {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	.money_text{
		font-size: 29rpx;
	}
	/* order_info */
	.order_info{
		height: 162rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		font-size: 24rpx;
		padding-left: 30rpx;
		color: #666666;
		line-height: 45rpx;
	}
	.order_title{
		display: inline-block;
		margin-top: 20rpx;
		font-size: 29rpx;
		color: #3B3B3B;
	}
	.order_num{
		/* margin-top: 28rpx; */
	}
	.order_time{
		/* margin-top: 20rpx; */
	}
	
	/* button */
	.button{
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: #FFFFFF;
		width: 100%;
		height:120rpx;
		text-align: center;
		/* border-top:3rpx solid #999 */
	}
	.item{
		width: 160rpx;
		height: 80rpx;
		line-height: 80rpx;
		border: 2rpx solid #999999;
		border-radius: 16rpx;
		margin-right: 30rpx;
	}
	.item.pay{
		border-color: #FE5001;
		color: #fe5001;
	}
</style>
