<script>
	export default {
		globalData: {
			text: 'cc'
		},
		onLaunch: function() { // 初始化时触发 
			console.log('App onlaunch');
			uni.getStorage({
				key: 'list',
				success: function(res) {
					console.log(flag)
				}
			});

			// console.log(uni.getStorageSync('alist'))

		},
		// onShow: function(res) { // 后台进入前台
		//     console.log(res.shareTicket)
		// 	uni.getShareInfo({
		// 		shareTicket:res.shareTicket,
		// 		success(res) {
		// 			console.log(res)
		// 		}
		// 	})
		// 	// console.log('App Show');
		// },
		onHide: function() { // 前台进入后台
			// console.log('App Hide');
		},
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	* {
		padding: 0;
		margin: 0;
	}
</style>
