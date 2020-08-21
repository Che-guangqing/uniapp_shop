import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		txt:'',
		name: 'cc',
		tel: null,
		address: '',
		flag:true,
		addressList: [
			{
				name: '马玉娇',
				tel: '17682927656',
				txt:'陕西省',
				address: '陕西省西安市雁塔区科技路',
				flag: true
			},
			{
				name: '马玉',
				tel: '17682927656',
				txt:'陕西省',
				address: '陕西省西安市雁塔区科技路',
				flag: false
			}
		]
	},
	mutations: {
		onsure(state, place) {
			const address = state.addressList.find((item, index) => index === place);
			address && (address.flag = !address.flag);
			if(address.flag) {
				state.addressList = state.addressList.map(item => {
					if(item.name !== address.name) {
						item.flag = false;
					}
					return item;
				})
			}
		}
	},
	actions: {

	},

})
