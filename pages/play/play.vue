<template>
	<view>
		play
		<!-- <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">授权账号信息</button> -->
		<open-data type="userNickName" ></open-data>
		<open-data type="userAvatarUrl"></open-data>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			this.changeLogin();
		},
		methods: {
			changeLogin() {
				// 授权
				// 获取用户详细信息, 可以获取到说明已经授权过, 直接拿到用户信息
				uni.getUserInfo({
					provider: 'weixin',
					//授权成功的回调
					success(res) {
						uni.showToast({
							title: '授权成功',
							icon: 'none'
						})
						console.info(res.data)
						//that.login(res.data);//授权成功调用自己的登录方法就可以了
					},
					//第一次进入小程序
					fail() {
						uni.showToast({
							title: '请点击授权进行登录',
							icon: 'none'
						});
					}
				});
			}
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
