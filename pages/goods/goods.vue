<template>
	<view>
		<view class="tx-w">
			<view class="tx">
				<image class="tx-img" :src="yonghuwx.avatarUrl"></image>
				<view class="zx"></view>
			</view>
			<view class="name">{{yonghuwx.nickName}} </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yonghuwx: []
			}
		},
		onLoad(){
			let that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息				
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {				
							that.yonghuwx = infoRes.userInfo
							console.log(that.yonghuwx)
						}
					});
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	.tx-w{
		margin-top:200upx;
	}
	
	.tx{
		text-align:center;
	}
	
	.tx image{
		width:140upx;
		height:140upx;
		border-radius: 50%;
	}
	
	.name{
		text-align:center;
		margin-top:20upx;
	}
	
	.name-qm{
		text-align:center;
		margin-top:20upx;
		font-size:30upx;
	}
</style>