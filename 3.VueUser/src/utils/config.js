const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '旅游资讯',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'旅游资讯',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '旅游攻略',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'旅游攻略',
							url:'/index/lvyougonglveList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "旅游攻略平台"
        } 
    }
}
export default config
