	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import yonghu from '@/views/yonghu/list'
	import discusslvyougonglve from '@/views/discusslvyougonglve/list'
	import jingdianleixing from '@/views/jingdianleixing/list'
	import lvyougonglve from '@/views/lvyougonglve/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '旅游资讯',
			component: news
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discusslvyougonglve',
			name: '旅游攻略评论',
			component: discusslvyougonglve
		}
		,{
			path: '/jingdianleixing',
			name: '景点类型',
			component: jingdianleixing
		}
		,{
			path: '/lvyougonglve',
			name: '旅游攻略',
			component: lvyougonglve
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
