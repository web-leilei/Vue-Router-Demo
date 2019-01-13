<template>
		<div>

			<div class="nav-three-box">
				<div class="nav-three">
					<ul>
						<li><router-link to="/product/phone/huawei">华为手机</router-link></li>
						<li><router-link to="/product/phone/apple">苹果手机</router-link></li>
						<li><router-link to="/product/phone/oppo">oppo手机</router-link></li>
					</ul>	
				</div>
				<div>
					<router-view></router-view>
				</div>
			</div>



		</div>
</template>

<script>
	export default{
		name: 'phone',
		data(){
			return {

			}
		}
	}
</script>

<style scoped>
.nav-three-box{display: flex;justify-content: space-between;align-items: center;padding: 0 10px;margin-top: 30px;}
.nav-three ul{background: #ccc;}
.nav-three ul li a{padding: 5px 10px;text-align: center;display: block;}
</style>