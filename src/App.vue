<template>
  <div id="app">
   <!--  <keep-alive> -->
    <transition name="fade">
      <navigation>
        <router-view></router-view>
      </navigation>
    </transition>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
      // bind event
      this.$navigation.on('forward', (to, from) => {
        console.log('forward to', to, 'from ', from)
      })
      this.$navigation.on('back', (to, from) => {
        console.log('back to', to, 'from ', from)
      })
      this.$navigation.on('replace', (to, from) => {
        console.log('replace to', to, 'from ', from)
      })
      this.$navigation.on('refresh', (to, from) => {
        console.log('refresh to', to, 'from ', from)
      })
      this.$navigation.on('reset', () => {
        console.log('reset')
      })
      // and use [once, off] methods
      this.$navigation.once('forward', () => {
        console.log('appear once')
      })
      const off = () => {
        console.log('will not appear')
      }
      this.$navigation.on('forward', off)
      this.$navigation.off('forward', off)
    }
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
    height: 0.78rem !important;
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
