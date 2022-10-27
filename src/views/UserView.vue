<script>
import { ElButton,ElIcon } from 'element-plus'
import CompanyView from './CompanyView.vue';
import DesignInfo from './DesignInfo.vue';
import ThanksView from './ThanksView.vue'
export default{
  components: { ElButton,ElIcon,CompanyView,DesignInfo,ThanksView },
  created(){
    // document.addEventListener('scroll',this.handleScroll,true)
  },
  data(){
    return {
      headerList:['Home','Phone','Web','Practice','About'],
      showHeader:true,

    }
  },
  methods:{
    handleScroll(){
      let that=this
      that.showHeader=false
      let scrollH=document.documentElement.scrollTop
      let timer=null
      clearTimeout(timer)
      timer=setTimeout(()=>{
        if(document.documentElement.scrollTop==scrollH){
          // that.showHeader=true
        }
      },1000)
      console.log(this.showHeader)
    }
  }
}
</script>

<template>
<header class="flex bgc0D1018 h72 hd" v-show="showHeader">
      <div class="flex-1 flex flex-bt flex-sc pdlr360">
        <div class="f24 color07C160 fw800"><span>Designer</span><span class="colorfff f20">ZHOU</span></div>
        <div class="flex flex-sc">
          <div v-for="(item,index) in headerList" :key="index" class="mrr40 pointer hg colorfff mtd" @click="()=>jump(item)"><span class="fw600 f16">{{item}}</span></div>
          <el-button round color="#0D1018" style="border:1px solid #fff;font-size:1rem;font-weight:500;">Let's Chat</el-button>
        </div>
      </div>
  </header>
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
 header {
    /* line-height: 1.5; */
    /* position: sticky;
    top: 0;
    z-index: 2; */
    width: 100%;
  }
  .pdlr360{
    padding:0 22.5rem;
  }
  .border-b{
    border-bottom: 1px solid rgba(255,255,255,0.3);
  }
  .hg:hover{
    color: #07C160;
  }
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
