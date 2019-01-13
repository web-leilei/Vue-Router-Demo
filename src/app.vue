<template>
		<div>
			<NavList />
			<br>
			<router-view></router-view>
		</div>
</template>

<script>
	import NavList from "./components/NavList"
	export default{
		data(){
			return {

			}
		},
		components:{
			NavList
		}
	}
</script>

<style type="text/css">
body,h1,h2,h3,h4,h5,h6,p,div,ul,li,img,a,span,i,strong,b,em,dl,dt,dd,input,button,label{ margin:0; padding:0;}
li{ list-style:none;}
body{font-family:"微软雅黑" ; -webkit-tap-highlight-color:rgba(0,0,0,0);font-size: 14px;}
a{ text-decoration:none; color:#000;}
img{ border:0 none; vertical-align:top;max-width: 100%;}
.clearfix{ *zoom:1;}
.clearfix:after{ content:"."; display:block; height:0; visibility:hidden; clear:both;}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color: #cfcfcf;}
input:-moz-placeholder, textarea:-moz-placeholder {color:#cfcfcf;}
input::-moz-placeholder, textarea::-moz-placeholder {color:#cfcfcf;}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:#cfcfcf;}
input, textarea, button {outline: 0;border:0;  vertical-align: middle;}
label {font-weight: normal; }
.active{display: block;color: #fff;background: red;}
</style>