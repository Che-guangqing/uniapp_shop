<template>
	<view class="">

		<uni-popup ref="popup" type="bottom" animation>
			<!-- {{goodsData.img}} -->
			<view class="pop_up">
				<view class="box top">
					<image class="goodImg" :src="goodsData.img" mode=""></image>
					<view class="right">
						<view class="row">
							<image class="gold" src="../../static/shop/icon/币.png" mode=""></image>
							<text class="gold_num">{{goodsData.price}} + </text>
							<text class="price">￥45.20</text>
							<text class="close" @click="close">X</text>
						</view>
						<view class="row">
							<text class="font">已选: </text>
							<text class="font_size"> {{sizeIndex}} </text>
							<text class="font"> {{colorIndex}}</text>
							 
						</view>
					</view>
				</view>
				<view class="box">
					<view class="title">尺码</view>
					<view class="box_row">
						<view 
						 v-for="(item,index) in goodsData.size" 
						 :key="index" 
						 @click="chooseSize(item)" 
						 :class="{'item': true, 'active': item === sizeIndex}"
						>
						  {{item}}
						</view>
					</view>
				</view>
				<view class="box">
					<view class="title">颜色</view>
					<view class="box_row">
						<view 
						 v-for="(item,index) in goodsData.color" 
						 :key="index" 
						 @click="chooseColor(item)" 
						 :class="{'item': true, 'active': item === colorIndex}"
						>
						  {{item}}
						</view>
					</view>
				</view>
				<view class="box buy ">
					<view class="box_row">
						<text class="buy_num">
							购买数量
						</text>
						<view class="buy_right">
							<text class="num_btn" @click="cut($event)">-</text>
							<text class="number">{{number}}</text>
							<text class="num_btn" @click="add($event)">+</text>
						</view>
					</view>
				</view>
				<view class="buy_btn" @click="buy($event)">
					确定
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				number: 1,      //购买数量
				sizeIndex: '',  //大小
				colorIndex: '', // 颜色
				allMoney: 0     //总价
			}
		},
		props: ['goodsData'],
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {  
				this.$refs.popup.close()
			},
			cut(e) {  // 减
				if (this.number <= 1) {
					return false
				}
				this.number = this.number - 1
			},
			add(e) {  //加
				this.number = this.number + 1
			},
			buy(e) {    //确定
				let reduce = this.number * this.goodsData.price;
				this.allMoney = reduce; //总价
				// console.log(this.allMoney, this.money)
				if (this.allMoney > this.money) {
					uni.showModal({
						content: '金币不够，可以邀请好友获取金币喔',
						success: (res) => {
							if (res.confirm) {
								this.$refs.popup.close()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				} else if (!this.colorIndex || !this.sizeIndex) {
					uni.showModal({
						content: '请选择数量规格',
						success: (res) => {
							if (res.confirm) {
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				} else {
					// 当前时间
					let now = new Date()
					let year = now.getFullYear()
					let mouth = now.getMonth() + 1
					let day = now.getDate()
					let hour = now.getHours()
					let minutes = now.getMinutes()
					
					let currentTime = year + '.' + mouth + '.' + day + ' ' + hour + ':' + minutes ;
	                
					// 生成随机数
					let randomNum = ''
					for(var i =0 ; i<8;i++){
						randomNum+=Math.floor(Math.random() * 10 + 1)
					}
					// console.log(randomNum)
					let obj = {
						curTime :currentTime,
						num : this.number,  //购买数量
						size : this.sizeIndex,  //大小
						color : this.colorIndex, // 颜色
						all : this.allMoney ,     //
				        name:this.goodsData.goodsDes,
						img :this.goodsData.img,
						id:randomNum
					}
		
					uni.navigateTo({
						url:"../../pages/order/order?data=" + JSON.stringify(obj)
					})
				}
			},
			chooseSize(size) {
				this.sizeIndex = size
				// console.log(this.sizeIndex)
			},
			chooseColor(color) {
				this.colorIndex = color
				// console.log(this.colorIndex)
			}
		},
		computed: {
			...mapState(['money']),
		}
	}
</script>

<style>
	.pop_up {
		width: 100%;
		padding-bottom: 46rpx;
		/* height: 760rpx; */
		background-color: #FFFFFF;
	}

	.box {
		border-bottom: 1rpx solid #f4f4f4;
		padding-left: 30rpx;
	}

	.box.top {
		width: 100%;
		display: flex;
	}

	.goodImg {
		flex-shrink: 0;
		width: 200rpx;
		height: 200rpx;
		border-radius: 16rpx;
		margin-right: 30rpx;
		transform: translateY(-45rpx);
		border: 1rpx solid red;
	}

	.right {
		flex-shrink: 1;
		flex-grow: 1;
		width: auto;
		font-size: 32rpx;
		display: flex;
		flex-direction: column;

	}

	.row {
		display: flex;
		align-items: center;
		margin-top: 30rpx;
		
		height: 32rpx;
		line-height: 32rpx;
	}
	.font{
		font-size: 24rpx;
		margin-right: 10rpx;
	}
	.font_size{
		font-size: 29rpx;
		margin-right: 10rpx;
	}

	.gold {
		width: 38rpx;
		height: 38rpx;
		margin-right: 10rpx;
	}

	.gold_num {
		color: #3B3B3B;
	}

	.price {
		/* margin-right: 180rpx; */
		color: #fe5001;
	}
	.close {

		transform: translateY(-10rpx);
		color: #999999;
	}

	.title {
		margin-top: 32rpx;
		font-size: 29rpx;
	}

	.box_row {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
	}

	.item {
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

	.item.active {
		border: 1rpx solid #FE5001;
		color: #FE5001;
		background-color: #FFFFFF;
	}

	.box.buy {
		border: none;
		margin-top: 36rpx;
		padding-bottom: 45rpx;
	}

	.buy_num {
		flex: 1;
		font-size: 29rpx;
	}

	.buy_right {
		font-size: 29rpx;
	}

	.num_btn {
		display: inline-block;
		background-color: #F4F4F4;
		width: 38rpx;
		height: 38rpx;
		text-align: center;
		line-height: 38rpx;
		border-radius: 50%;
		margin-right: 30rpx;
	}

	.number {
		margin-right: 30rpx;
	}

	.buy_btn {
		margin: 0 auto;
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
