// 按需全局引入 vant组件
import Vue from 'vue'
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  Sticky,
  Popup
} from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(Sticky)
Vue.use(Popup)
Vue.use(Tabbar).use(TabbarItem)
