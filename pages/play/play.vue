<template>
    <view class="">
    	<button @click="open">打开弹窗</button>
    	<uni-popup type="bottom" animation >
			<view class="pop_up">
				弹框
			</view>
		</uni-popup>
    </view>
</template>

<script>
	// import uniPopup from '@/components/uni-popup/uni-popup.vue'
	// import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	// import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		data() {
			return {

			}
		},

		methods: {
			open() {
				this.$refs.popup.open()
			}
		},


	}
</script>

<style>
	.pop_up{
		width: 100%;
		height: 760rpx;
		background-color:#FFFFFF ;
	}
</style>
