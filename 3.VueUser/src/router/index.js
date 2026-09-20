import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import jingdianleixingList from '@/views/pages/jingdianleixing/list'
import jingdianleixingDetail from '@/views/pages/jingdianleixing/formModel'
import jingdianleixingAdd from '@/views/pages/jingdianleixing/formAdd'
import lvyougonglveList from '@/views/pages/lvyougonglve/list'
import lvyougonglveDetail from '@/views/pages/lvyougonglve/formModel'
import lvyougonglveAdd from '@/views/pages/lvyougonglve/formAdd'
import storeupList from '@/views/pages/storeup/list'
import newsList from '@/views/pages/news/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'jingdianleixingList',
			component: jingdianleixingList
		}, {
			path: 'jingdianleixingDetail',
			component: jingdianleixingDetail
		}, {
			path: 'jingdianleixingAdd',
			component: jingdianleixingAdd
		}
		, {
			path: 'lvyougonglveList',
			component: lvyougonglveList
		}, {
			path: 'lvyougonglveDetail',
			component: lvyougonglveDetail
		}, {
			path: 'lvyougonglveAdd',
			component: lvyougonglveAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'newsList',
			component: newsList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
