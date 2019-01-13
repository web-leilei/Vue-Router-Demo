<template>
  <div>
  		这是product页面
      <div class="product">
          <ul>
            <li><router-link to="/product/phone">手机</router-link></li>
            <li><router-link to="/product/computer">电脑</router-link></li>
            <li><router-link to="/product/headset">耳机</router-link></li>
            <div class="clearfix"></div>
          </ul>
      </div>
      <div class="product-content">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>


  export default {
    name: 'product',
    data(){
      return{

      }
    },

  }
</script>
<style scoped>
.product a{display: block;}
.clearfix{clear: both;}
.product{margin-top: 20px;}
.product ul{background: #ccc;}
.product ul li{float: left;width: 33.3%;height: 35px;line-height: 35px;text-align: center;}
</style>