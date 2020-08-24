<template>
	<view class="">

		<uni-popup ref="popup" type="bottom" animation>
								<!-- {{goodsData.img}} -->
			<view class="pop_up">
				<view class="box top">
					<image  class="goodImg" :src="goodsData.img"  mode=""></image>
					<view class="right">
						<view class="row">
							<image class="gold" src="../../static/shop/icon/币.png" mode=""></image>
							<text class="gold_num">4512 + </text>
							<text class="price">￥{{goodsData.price}}</text> 
							<text class="close" @click="close">X</text>
						</view>
						<view class="row">
							已选: M 紫色
						</view>
					</view>
				</view>
				<view class="box" >
					<view class="title">
						尺码
					</view>
					<view class="box_row" >
						<view v-for="(item,index) in goodsData.size" :key="index" class="item">{{item}}</view>
					</view>
<!-- 					<label class="radio" v-for="(item,index) in goodsData.size" :key="index">
						<radio :value="item"  /> {{item}}
					</label> -->
				</view>
				<view class="box" >
					<view class="title">
						颜色
					</view>
		<!-- 			<label class="radio" v-for="(item,index) in goodsData.color" :key="index">
						<radio  /> {{item}}
					</label> -->
					<view class="box_row">
						<view  v-for="(item,index) in goodsData.color" :key="index" class="item">{{item}}</view>
					</view>
				</view>
				<view class="box buy ">
					<view class="box_row">
						<text class="buy_num">
							购买数量
						</text>
						<view class="buy_right">
							<text class="num_btn" @click="cut">-</text>
							<text class="number">{{number}}</text>
							<text class="num_btn" @click="add">+</text>
					    </view>
					</view>
				</view>
				<view class="buy_btn" @click="buy">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:1

			}
		},
		props: ['goodsData'],
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close(){
				this.$refs.popup.close()
			},
			cut() {
	            this.number --
				console.log('减')
			},
			add() {
				if(this.number >= 1) {
					this.number ++
				}else{
					// this.number =1
				}
				console.log('加')
			},
			buy() {
				uni.navigateTo({
					url:"../../pages/order/order"
				})
			}
		},
		onLoad() {
		}

	}
</script>

<style>
	.pop_up {
		width: 100%;
		height: 760rpx;
		background-color: #FFFFFF;
	}
	.box{
		border-bottom: 1rpx solid #f4f4f4;
		padding-left: 30rpx;
	}
	.box.top{
		display: flex;
	}
	.goodImg{
		width: 200rpx;
		height: 200rpx;
		border-radius: 16rpx;
		margin-right: 30rpx;
		transform: translateY(-45rpx);
		border: 1rpx solid red;
	}
	.right{
		font-size: 32rpx;
		display: flex;
		flex-direction: column;
		
	}
	.row{
		margin-top: 30rpx;
		display: flex;
		align-items: center;
	}
	.gold {
		width: 38rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}
	.gold_num{
		color: #3B3B3B;
	}
	.price{
		color: #fe5001;	
	}
	.close{
		
		color: #999999;
	}
	.title{
		margin-top: 32rpx;
		font-size: 29rpx;
	}
	.box_row{
		margin-top: 30rpx;
		display: flex;
		align-items: center;
	}
	.item{
		width: 90rpx;
		height: 50rpx;
		line-height: 50rpx;
		background-color: #F4F4F4;
		text-align: center;
		font-size: 26rpx;
		color: #3B3B3B;
		border-radius: 25rpx;
		margin-right: 44rpx;
		margin-bottom: 30rpx;
	}
	.item.active{
	    border: 1rpx solid #FE5001;
		color: #FE5001;
		background-color: #FFFFFF;
	}
	.box.buy{
		border: none;
		margin-top: 36rpx;
	}
	.buy_num{
		flex: 1;
		font-size: 29rpx;
	}
	.buy_right{
		font-size: 29rpx;
	}
	.num_btn{
		display: inline-block;
		background-color: #F4F4F4;
		width: 38rpx;
		height: 38rpx;
		text-align: center;
		line-height: 38rpx;
		border-radius: 50%;
		margin-right: 30rpx;
	}
	.number{
		margin-right: 30rpx;
	}
	.buy_btn{
		margin: 0 auto ;
		background-color: #FE5001;
		width: 690rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 29rpx;
		line-height: 70rpx;
		text-align: center;
		border-radius: 35rpx;
	}
	
	
	
</style>
