<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
body{
  margin: 0px;
}
#app a{
  text-decoration: none;
}

.el-input__inner {
    height: 0.78rem;
    font-size: 0.3rem;
}
.el-input__icon+.el-input__inner{
    padding-left: 0.86rem;
}
.el-input__icon{
  left:0px;
  width: 0.86rem;
}
.mint-header .el-input input {
    border: none;
}
.mint-header.is-fixed,.mint-tabbar.is-fixed {
  z-index: 99;
}

</style>
