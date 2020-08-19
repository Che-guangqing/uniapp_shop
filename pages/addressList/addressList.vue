<template>
	<view class="wrapper">
		<view class="box" v-for="(item,index) in list" :key="index">
			<view class="info">
				<view class="info_row">
					<text class="info_name">{{item.name}}</text>
					<text class="info_tel">{{item.tel}}</text>
				</view>
				<view class="address">
					{{item.address}}
				</view>
			</view>
			<view class="btn">
				<view class="btn_row">
					<view class="flex1">
						<image class="btn_sure" src="../../static/my/sure.png" mode=""></image>
						<text>默认地址</text>
					</view>
					<image class="btn_del" src="../../static/my/del.png" mode=""></image>
					<text>删除</text>
				</view>
			</view>
		</view>

		<navigator url="../addAddress/addAddress"  open-type="redirect">
			<button class="add_address" type="warn">添加新地址</button>
		</navigator>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '马玉娇',
					tel: '17682927656',
					address: '陕西省西安市雁塔区科技路',
					flag: true
				}, {
					name: '马玉娇',
					tel: '17682927656',
					address: '陕西省西安市雁塔区科技路',
					flag: true
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 1334rpx;
		background-color: #f6f6f6;
	}

	.box {
		margin-bottom: 20rpx;
		box-sizing: border-box;
		width: 100%;
		background-color: #FFFFFF;
		width: 100%s;
		height: 232rpx;
	}

	/* info */
	.info {
		padding: 0 30rpx;
		border-bottom: 2rpx solid #ededed;
		height: 136rpx;
	}

	.info_row {
		margin-top: 30rpx;
		font-size: 29rpx;
		color: #3B3B3B;
		display: flex;

	}

	.info_name {
		flex: 1;
	}

	.info_tel {
		width: 170rpx;
	}

	.address {
		margin-top: 30rpx;
		font-size: 24rpx;
		color: #666666;

	}

	/* btn */
	.btn {
		padding: 0 30rpx;
		font-size: 24rpx;
		height: 96rpx;
		line-height: 96rpx;
	}

	.btn_row {
		display: flex;
		align-items: center;
	}

	.flex1 {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.btn_sure {
		width: 38rpx;
		height: 38rpx;
		margin-right: 20rpx;
	}

	.btn_del {
		width: 50rpx;
		width: 38rpx;
		height: 38rpx;
		margin-right: 20rpx;
	}

	.add_address {
		margin-top: 30rpx;
		width: 690rpx;
		height: 90rpx;
		border-radius: 6rpx;
		font-size: 29rpx;
		text-align: center;
	}
</style>
