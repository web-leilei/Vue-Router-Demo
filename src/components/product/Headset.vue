<template>
    <div>

      <div class="nav-three-box">
        <div class="nav-three">
          <ul>
            <li><router-link to="/product/headset/edifier">漫步者耳机</router-link></li>
            <li><router-link to="/product/headset/sennheiser">森海塞尔耳机</router-link></li>
            <li><router-link to="/product/headset/sony">索尼耳机</router-link></li>
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
    name: 'headset',
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