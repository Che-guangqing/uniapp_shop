<template>
	<view class="wrapper">
		<view class="box">
			<view class="address_info">
				地址信息
			</view>
			<form @submit="" @reset="">
				<input class="uni-input" name="input" placeholder="收货人姓名(请使用真实姓名)" />
				<input class="uni-input" name="input" placeholder="手机号码" />


				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>


				<input class="uni-input" name="input" placeholder="街道,小区门牌灯详细地址" />

				<navigator url="../addressList/addressList" open-type="reLaunch">
					<button form-type="submit" class="submitBtn" type="warn">保存</button>
				</navigator>
			</form>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,

			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},

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
		background-color: #FFFFFF;
		font-size: 29rpx;
	}

	.address_info {
		height: 88rpx;
		line-height: 88rpx;
		background-color: #EEEEEE;
		padding-left: 30rpx;
		color: #3B3B3B;
	}

	.uni-input {
		padding-left: 30rpx;
		height: 88rpx;
		border-bottom: 2rpx solid #ededed;
		color: #999999;
	}

	.submitBtn {
		margin-top: 30rpx;
		width: 690rpx;
		height: 90rpx;
		border-radius: 6rpx;
		font-size: 29rpx;
		text-align: center;
	}
</style>
