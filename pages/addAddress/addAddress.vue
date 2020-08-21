<template>
	<view class="wrapper">
		<view class="box">
			<view class="address_info">
				地址信息
			</view>

			<input class="inp" placeholder="收货人姓名(请使用真实姓名)" v-model="name" />
			<input  class="weui-input inp" placeholder="手机号码" auto-fill="address_info.phone" v-model="tel" />
            <text class="telFlag" v-show="!addressFlag">请输入正确的电话号码</text>
			<!-- 自定义的地区组件 -->
			<!-- <pickerAddress class="inp" @change="change">{{txt}}</pickerAddress>   -->

			<!-- 小程序内置地区组件 -->
			<!-- <view  > -->
			<picker class="inp" mode="region" @change="bindPickerChange">
				<view>{{txt}}</view>
			</picker>
			<!-- </view> -->

			<input class="inp" placeholder="街道,小区门牌灯详细地址" v-model="address"  />
			<text class="addressFlag" v-show="!addressFlag">请输入有效地址</text>
			<button class="submitBtn" type="warn" @click="addAddress">保存</button>
		</view>
	</view>
</template>
<script>
	var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
	import pickerAddress from '../../pickerAddress/pickerAddress.vue'
	export default {
		data() {
			return {
				name: '',
				tel: '',
				address: '',
				flag: false,

				txt: '所在地区',

				addressFlag: true,
				telFlag:true,

			}
		},
		methods: {
			// 自定义 地区选择组件
			change(data) {
				this.txt = data.data.join('')
				console.log(data.data.join(''))
			},

			// 小程序内置 地区选择组件
			bindPickerChange: function(e) {
				this.txt = e.target.value.join('');
				console.log('picker发送选择改变，携带值为',this.txt)
			},
			

			// 添加信息
			addAddress() {
				// 判断电话号码
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel))){
					this.telFlag = false
				        console.log('手机号码有误，请重填'); 
				} 
				
				// 检查地址是否有效
				var that = this;
				var qqmapsdk = new QQMapWX({
					key: 'UXEBZ-KBZ35-RQ5IJ-QCPL4-SJWMF-NJBWG'
				});
				
				//  通过输入的地址获取经纬度
				qqmapsdk.geocoder({
					address: this.address + this.txt,
					success: res => {
						//成功回调
						if(res.result.reliability >= 7 ) {
							console.log('地址可信',res.result.reliability)
							// 提交信息
							const obj = {
								name: this.name,
								tel: this.tel,
								txt: this.txt,
								address: this.address,
								flag: this.flag
							}
							this.$store.state.addressList.push(obj)
							// 跳转地址列表页
							uni.navigateTo({
								url: '../addressList/addressList'
							})
						}else{
							console.log('地址不可信')
							this.addressFlag = false
						}

					},
					fail: info => {
						//失败回调
						this.addressFlag = false
						console.log('地址无效',info)
					}
				});
				// 存入vuex时也存到缓存中
				// uni.setStorage({
				// 	key: 'alist',
				// 	data: this.$store.state.addressList,
				// 	success: function() {
				// 		console.log('success');
				// 	}
				// });
			},
		},
		computed: {
			alladdress() {
				return this.txt + this.address
			}
		},
		components: {
			pickerAddress
		},
	}
</script>

<style>
	.wrapper {
		width: 100%;
		height: 1155rpx;
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

	.inp {
		padding-left: 30rpx;
		height: 88rpx;
		border-bottom: 2rpx solid #ededed;
		color: #999999;

		line-height: 88rpx;
		font-size: 29rpx;
		color: #999999;
	}

	.addressFlag {
		color: red;
		padding-left: 30rpx;
	}
	.telFlag{
		color: red;
		padding-left: 30rpx;
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
