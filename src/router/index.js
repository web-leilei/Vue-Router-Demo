import Vue from "vue"
import VueRouter from "vue-router"
import Index from "@/components/Index";
import About from "@/components/About";
import Product from "@/components/Product";
import News from "@/components/News";
import Contact from "@/components/Contact";

import Introduce from "@/components/about/Introduce";
import Culture from "@/components/about/Culture";
import Honor from "@/components/about/Honor";


import Phone from "@/components/product/Phone";
import Computer from "@/components/product/Computer";
import Headset from "@/components/product/Headset";

// 手机
import Apple from "@/components/product/phone/Apple";
import Huawei from "@/components/product/phone/Huawei";
import OPPO from "@/components/product/phone/OPPO";

// 电脑
import Asus from "@/components/product/computer/Asus";
import Lenovo from "@/components/product/computer/Lenovo";
import Acer from "@/components/product/computer/Acer";

// 耳机
import Edifier from "@/components/product/headset/Edifier";
import Sennheiser from "@/components/product/headset/Sennheiser";
import Sony from "@/components/product/headset/Sony";

// 全局注册方式
// Vue.component('home',Home);
// Vue.component('about',About);
// 这样在全局组件使用<home></home><about></about>就可以使用
// 路由显示组件方式  
// 如果是用路由显示组件内容的那就先引入 import Home from './components/home';  import About from '@/components/About'; 
// 然后在路由配置的路径上写上刚刚引入的路由组件
// {
// 	path:"/",
// 	component:Home
// }


Vue.use(VueRouter)

// 把路由配置放到index.js中后 这里就不能用var router变量了
// var router = new VueRouter({
// 	// 注意这里是routes 不要写成routers
// 	routes:[
// 		{
// 			path:"/",
// 			component:Home
// 		}
// 	]
// })
 
 // 改写成
export default new VueRouter({
	// 设置路由高亮的全局calss名称
	linkActiveClass:"active",
	// 注意这里是routes 不要写成routers
	routes:[
		{
			path:"/",
			name:"index",  //针对传递数据的时候有用
			component:Index
		},
		{
			path:"/about",
			name:"about",
			component:About,
			//有子级路由页面的时候重定向  一进来就显示企业简介的内容
			redirect:"/about/introduce",
			// 嵌套路由开始
			children:[
				{	
					// 注意这个名称不要加路径,系统自动帮你补全路径 
					path:"introduce",  
					component:Introduce
				},
				{
					path:"culture",
					component:Culture
				},
				{
					path:"honor",
					component:Honor
				}
			]
			// 嵌套路由结束
		},
		{
			path:"/product",
			name:"product",
			component:Product,
			//有子级路由页面的时候重定向  一进来就显示手机的内容
			redirect:"/product/phone",
			// 手机品牌嵌套路由开始
			children:[
				{	
					// 注意这个名称不要加路径,系统自动帮你补全路径 
					path:"phone",  
					component:Phone,
					redirect:"/product/phone/huawei",
					children:[
						{	
							// 注意这个名称不要加路径,系统自动帮你补全路径 
							path:"apple",  
							component:Apple
						},
						{
							path:"huawei",
							component:Huawei
						},
						{
							path:"oppo",
							component:OPPO
						}
					]
				},
				{
					path:"computer",
					component:Computer	,
					redirect:"/product/computer/asus",
					// 电脑品牌嵌套路由开始
					children:[
						{	
							// 注意这个名称不要加路径,系统自动帮你补全路径 
							path:"asus",  
							component:Asus
						},
						{
							path:"lenovo",
							component:Lenovo
						},
						{
							path:"acer",
							component:Acer
						}
					]
				},
				{
					path:"headset",
					component:Headset,
					redirect:"/product/headset/edifier",
					// 耳机品牌嵌套路由开始
					children:[
						{	
							// 注意这个名称不要加路径,系统自动帮你补全路径 
							path:"edifier",  
							component:Edifier
						},
						{
							path:"sennheiser",
							component:Sennheiser
						},
						{
							path:"sony",
							component:Sony
						}
					]
				}
			]
			// 嵌套路由结束
		},
		{
			path:"/news",
			name:"news",
			component:News
		},
		{
			path:"/contact",
			name:"contact",
			component:Contact
		},
	]
})
 