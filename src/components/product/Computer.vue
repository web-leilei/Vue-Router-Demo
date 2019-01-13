<template>
    <div>

      <div class="nav-three-box">
        <div class="nav-three">
          <ul>
            <li><router-link to="/product/computer/asus">华硕电脑</router-link></li>
            <li><router-link to="/product/computer/lenovo">联想电脑</router-link></li>
            <li><router-link to="/product/computer/acer">宏碁电脑</router-link></li>
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
    name: 'computer',
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