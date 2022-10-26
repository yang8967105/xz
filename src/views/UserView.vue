<script>
import { ElButton,ElIcon } from 'element-plus'
import CompanyView from './CompanyView.vue';
import DesignInfo from './DesignInfo.vue';
import ThanksView from './ThanksView.vue'
export default{
  components: { ElButton,ElIcon,CompanyView,DesignInfo,ThanksView },
  setup(){

  },
  data(){
    return {
      
    }
  }
}
</script>

<template>
  <main>
    <div class="flex flex-sc flex-bt" id="Home">
      <div>
        <div class="flex flex-sc ">
          <span class="colorfff fw800 mrr35 f48">HELLO!</span>
          <el-button type="primary" round color="#3477FF" style="width:7.5rem;height:3.125rem;font-size:1.5rem;font-family:'mt'">UX/UI</el-button>
        </div>
        <div><span class="colorfff f96 fw800">我是周莹</span></div>
        <div class="mwth"><span class="color80 f24 fw500 mtd">I have more than 4 years of experience in UX/UI design</span></div>
        <div class="flex flex-sc mrb164">
          <span class="color07C160 f24 fw600 mrr17">Show More</span>
          <el-icon color="#07C160" size="10"><BottomRight /></el-icon>
        </div>
        <div class="flex flex-sc">
          <img src="../assets/Group6.png" class="pointer w58 h58 mrr20"/>
          <img src="../assets/Group7.png" class="pointer w58 h58 mrr20"/>
          <img src="../assets/Group8.png" class="pointer w58 h58 mrr20"/>
        </div>
      </div>
      <div>
        <img src="../assets/untitled11.png" class="pic"/>
      </div>
    </div>
  </main>
    <CompanyView  />
    <DesignInfo />
    <ThanksView id="About"/>
</template>
<style scoped>
main {
  width: 120rem;
  /* height: 60rem; */
  /* background-image: url("../assets/Frame1.png"); */
  /* background:url("../assets/Frame1.png");
  background-size:120rem 60rem; */
  background:url("../assets/Frame773570.png");
  background-size: 120rem 60rem;
  background-repeat:no-repeat;
  padding-left: 22.5rem;
  padding-right: 12.5rem;
  padding-top: 5.875rem;
  /* padding-left:22.5rem; */
  /* padding-top: 10.375rem; */
  /* padding-right: 12.5rem; */
  /* padding-right: 6.0875rem; */
}
.pic{
  /* width: 64.9375rem;
  height: 64.9375rem; */
  width: 52.5rem;
  height: 49.625rem;
}
.color80{
  color:rgba(255,255,255,0.8)
}
.mwth{
  max-width: 33.25rem;
  margin-top: 2rem;
  margin-bottom: 3.75rem;
}

</style>
