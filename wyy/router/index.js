// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import GeShou from '../pages/songs/GeShou'
import ShiPing from '../pages/video/ShiPing'
import DianTai from '../pages/DianTai'
import ShoucanggeQu from '../pages/ShoucanggeQu'
import PaihangBang from '../pages/PaihangBang'
import FaxianYy from '../pages/FaxianYy'
import Login from '../pages/login'
import ShiPingAll from '../pages/video/ShiPingAll'
import videoPlay from '../pages/video/videoPlay'
import ShiPingMv from '../pages/video/ShiPingMv'
import MvFenlei from '../pages/video/MvFenlei'
import SongsFenlei from '../pages/songs/SongsFenlei'
import GeShouXq from '../pages/songs/GeShouXq'
import GeDanxq from '../pages/GeDanxq'
import GeShouDq from '../pages/songs/GeShouDq'
import GeShouJs from '../pages/songs/GeShouJs'
import GeshouMv from '../pages/songs/GeShouMv'
import meiriTJ from '../pages/meiriTJ'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			//主页默认显示路由
			path: '*',
			redirect: '/FaxianYy'
		},
		{
			path:'/GeShou',
			component:GeShou,
			redirect:{
				path:'/GeShou/SongsFenlei',
				query:{area:-1,types:-1}
			},

			children:[
				{
					name:'SongsFenlei',
					path:'SongsFenlei',
					component:SongsFenlei
				}
			]
		},
        {
			path:'/ShiPing',
			component:ShiPing,
			redirect:'/ShiPing/ShiPingMv',
			children:[
				{
					path:'ShiPingAll',
					component:ShiPingAll,

				},
				{
					path:'ShiPingMv',
					component:ShiPingMv,
					redirect:{
						path:'/ShiPing/ShiPingMv/MvFenlei',
						query:{id:'001',type:'内地'}
					},
					
					children:[
						{
							name:'MvFenlei',
							path:'MvFenlei',
							component:MvFenlei
						}
					]
				}
				
			]
		},
		{
			path:'/Login',
			name:'name',
			component:Login
		},
        {
			path:'/DianTai',
			component:DianTai
		},
        {
			path:'/ShoucanggeQu',
			component:ShoucanggeQu
		},
        {
			path:'/PaihangBang',
			component:PaihangBang
		},
		{
			path:'/FaxianYy',
			component:FaxianYy
		},
		{
			path:'/videoPlay',
			component:videoPlay
		},
		{
			path:'/GeShouXq',
			component:GeShouXq,
			redirect:'/GeShouXq/GeShouDq',
			children:[
				{
					path:'GeShouDq',
					component:GeShouDq,
				},
				{
					path:'GeShouJs',
					component:GeShouJs,
				},
				{
					path:'GeshouMv',
					component:GeshouMv
				}
			]

			
		},
		{
			path:'/GeDanxq',
			component:GeDanxq
		},
		{
			path:'/meiriTJ',
			component:meiriTJ
		}

		
	]
})
