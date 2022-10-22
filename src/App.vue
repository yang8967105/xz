<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <header class="flex bgc0D1018 h104 hd">
      <div class="flex-1 flex flex-bt flex-sc pdlr360 border-b">
        <div class="f24 color07C160 fw800"><span>Designer</span><span class="colorfff f20">ZHOU</span></div>
        <div class="flex flex-sc">
          <div v-for="(item,index) in headerList" :key="index" class="mrr40 pointer"><span class="colorfff fw600 f20">{{item}}</span></div>
          <el-button round color="#0D1018" style="border:1px solid #fff;font-size:1rem;font-weight:500;">Let's Chat</el-button>
        </div>
      </div>
  </header>
  <router-view/>
</template>
<script>


export default {
  setup() {
    const baseSize = 16
    // 设置 rem 函数
    function setRem () {
      // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
      const scale = document.documentElement.clientWidth / 1920
      console.log(scale,'scale')
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
    }
    // 初始化
    setRem()
    // 改变窗口大小时重新设置 rem
    window.onresize = function () {
      setRem()
    }
  },
  data(){
    return {
      headerList:['Home','Phone','Web','Practice','About']
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  header {
  /* line-height: 1.5; */
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;;
}
.pdlr360{
  padding:0 22.5rem;
}
.border-b{
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
