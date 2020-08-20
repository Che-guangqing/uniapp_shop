import Vue from 'vue'
import App from './App'
import store from './store'
import Iconfont from './static/iconfont.css'
Vue.config.productionTip = false

// console.log(store.state.name)

Vue.prototype.$store=store


App.mpType = 'app'

const app = new Vue({
	...App	
})
app.$mount()
