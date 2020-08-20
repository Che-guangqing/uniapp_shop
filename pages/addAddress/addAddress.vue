<template>
	<view class="wrapper">
		<view class="box">
			<view class="address_info">
				地址信息
			</view>

			<input class="inp" placeholder="收货人姓名(请使用真实姓名)" v-model="name" />
			<!-- <input class="inp" placeholder="手机号码" v-model="tel" /> -->
			 <input class="weui-input" placeholder="手机号码" auto-fill="address_info.phone" v-model="tel"  />

			<!-- 自定义的地区组件 -->
			<!-- <pickerAddress class="inp" @change="change">{{txt}}</pickerAddress>   -->

			<!-- 小程序内置地区组件 -->
			<!-- <view  > -->
				<picker class=".inp" mode = "region" @change="bindPickerChange" >
					<view>{{txt}}</view>
				</picker>
			<!-- </view> -->


			<input class="inp" placeholder="街道,小区门牌灯详细地址" v-model="address" />

			<navigator url="../addressList/addressList" open-type="reLaunch">
				<button class="submitBtn" type="warn" @click="addAddress">保存</button>
			</navigator>

		</view>
	</view>
</template>
<script>
	import pickerAddress from '../../pickerAddress/pickerAddress.vue'
	export default {
		data() {
			return {
				name: '',
				tel: '',
				// address: '',
				flag: false,

				txt: '所在地区',
				title: 'Hello',
				temp: '',

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
				console.log('picker发送选择改变，携带值为', e.target.value)
			    // this.txt = e.target.value
			},

			// 添加信息
			addAddress() {
				const obj = {
					name: this.name,
					tel: this.tel,
					address: this.address,
					flag: this.flag
				}
				this.$store.state.addressList.push(obj)

				// 存入vuex时也存到缓存中
				// uni.setStorage({
				// 	key: 'alist',
				// 	data: this.$store.state.addressList,
				// 	success: function() {
				// 		console.log('success');
				// 	}
				// });
			}
		},
		computed: {
			address(val) {
				console.log(val)
				// return this.txt 
			},
			address: {
				set(val) {
					this.temp = val
				},
				get() {
					// return this.txt + this.temp
					// this.txt this.temp
				},
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

	.inp {
		padding-left: 30rpx;
		height: 88rpx;
		border-bottom: 2rpx solid #ededed;
		color: #999999;
		
		line-height: 88rpx;
		font-size: 29rpx;
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
