<template>
		<div>
			<ul class="nav_list">
				<li><router-link exact to="/">网站首页</router-link></li>
				<li><router-link to="/about">关于我们</router-link></li>
				<li><router-link to="/product">产品中心</router-link></li>
				<li><router-link to="/news">新闻资讯</router-link></li>
				<li><router-link to="/contact">联系我们</router-link></li>
			</ul>
		</div>
</template>

<script>
	export default{
		name:"navlist",
		data(){
			return {
				
			}
		}
	}
</script>

<style type="text/css" scoped>
	.nav_list a{display: block;}
	.nav_list{width: 100%;background:#f1f1f1;height: 50px;}
	.nav_list li{width: 20%;float: left;line-height: 50px;text-align: center;}
</style>