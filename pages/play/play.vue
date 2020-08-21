<template>
	<view>
		<!--form表单-->
		<!-- 		<form bindsubmit="formSubmit">
			<input style="border:1px solid #000;" name="geocoder"></input>
			<button form-type="submit">地址解析</button>
		</form> -->

	</view>
</template>

<script>
	// 引入高德地图
	// var amapFile = require('../../libs/amap-wx.js')
	// var config = require('../../libs/config.js');

	// 引入腾讯地图
	var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');


	export default {
		data() {
			return {
				tips: {},
				address: '',
				//经纬度
				latitude:'', 
				longitude:''
			}
		},
		onLoad() {
			var that = this;
			var qqmapsdk = new QQMapWX({
				key: 'UXEBZ-KBZ35-RQ5IJ-QCPL4-SJWMF-NJBWG'
			});

			//  通过输入的地址获取经纬度
			qqmapsdk.geocoder({
				address: '时候覅都能',
				success: function(res) {
					//成功回调
					this.latitude = res.result.location.lat;
					this.longitude = res.result.location.lng;
					console.log('成功', this.latitude,this.longitude)
				},
				fail: function(info) {
					//失败回调
					console.log('失败', info)
				}
			});
			
			// 通过经纬度获取详细信息
			qqmapsdk.reverseGeocoder({
				location:{
					latitude:34.22259 ,
					longitude:108.94878 
				},
				success:function (res) {
					console.log('成功',res)
				},
				fail: function(info) {
					//失败回调
					console.log('失败', info)
				}
			})
		},

		methods: {

		}
	}
</script>

<style>
	.horizonal-tab {}

	.horizonal-tab .active {
		color: red;
	}

	.scroll-tab {
		white-space: nowrap;
		/* 必要，导航栏才能横向*/
		border-bottom: 1rpx solid #eee;
		text-align: center;
	}

	.scroll-tab-item {
		display: inline-block;
		/* 必要，导航栏才能横向*/
		margin: 20rpx 30rpx 0 30rpx;
	}

	.active .scroll-tab-line {
		border-bottom: 5rpx solid red;
		border-top: 5rpx solid red;
		border-radius: 20rpx;
		width: 70rpx;

	}
</style>
