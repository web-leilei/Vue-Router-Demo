<template>
		<div>
			这是about页面
			<div class="nav-two-box">
				<div class="nav-two">
					<ul>
						<li><router-link to="/about/introduce">公司简介</router-link></li>
						<li><router-link to="/about/culture">企业文化</router-link></li>
						<li><router-link to="/about/honor">荣誉资质</router-link></li>
					</ul>	
				</div>
				<div class="about-content">
					<router-view></router-view>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name: 'about',
		data(){
			return {

			}
		}
	}
</script>

<style scoped>
	.nav-two a{display: block;padding: 0 10px;}
	.nav-two{margin-top: 20px;}
	.nav-two-box{display: flex;justify-content: space-between;align-items: center;padding: 0 10px;}
	.nav-two ul{background: #ccc;}
	.nav-two ul li{width: 100%;text-align:center;line-height: 30px;}
</style>