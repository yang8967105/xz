<template>
<div class="design-info">

  <header class="flex flex-bt flex-sc">
    <div class="flex flex-sc flex-bt">
      <div><span class="colorfff f24 fw900 mrr120">{{data.tit}}</span></div>
      <div><span class="f16 colorfff fw500 mrr40" :key="item.tit" v-for="(item,index) in data.cardList">{{item.tit}}</span></div>
    </div>
    <div class="flex flex-sc flex-mc">
      <el-icon color="#FF4646 "><CircleCloseFilled /></el-icon>
      <span class="fw500 f16 colorfff mrl10">Back</span>
    </div>
  </header>
  <main>
    <img :src="require('@/assets/imgs/Frame773554.png')" style="width:107.5rem;height:56.25rem;"/>
  </main>
</div>
</template>
<script setup>
import {ElIcon} from "element-plus"
import {useStore} from "vuex"
const store=useStore()
const data=store.state.currentDesignInfo

</script>
<style lang="less" scoped>
.design-info{
  padding:0 6.25rem;
  header{
    padding: 1.25rem 0;
    margin-bottom: 4.125rem;
  }
}
</style>