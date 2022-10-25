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
      designList:[
        {
          id:'Phone',bgccolor:'#0ABF5B',tit:'移动端设计',English:'Phone Design',
          cardList:[
            {tit:'企鹅吉市',des:'领券平台小程序',img:'Frame773422.png',publish:true,status:false},
            {tit:'云管家app',des:'医疗健康小程序',img:'Frame7734221.png',publish:true,status:true},
            {tit:'药问我健康平台',des:'医疗健康小程序',img:'Frame7734222.png',publish:true,status:false},
            {tit:'药问我健康平台',des:'医疗健康小程序',img:'Frame7734222.png',publish:true,status:false},
          ]
        },
        {
          id:'Web',bgccolor:'#3A7BFF',tit:'网页端设计',English:'Web Design',
          cardList:[
            {tit:'商有云店',des:'餐饮运营一站式服务',img:'Frame773422-0.png',publish:true,status:true},
            {tit:'医药流向系统',des:'药品流向查询系统',img:'Frame773422-1.png',publish:false,status:true},
            {tit:'供应链中台',des:'医药行业进销存管理软件',img:'Frame773422-2.png',publish:true,status:true},
          ]
          },
        {
          id:'Practice',bgccolor:'#FFA900',tit:'个人练习',English:'Practice',
          cardList:[
            {tit:'3D设计',des:'头像、个人形象设计',img:'Frame773422-0.png',publish:false,status:false,myself:true},
            {tit:'动效设计',des:'MG动画',img:'Frame773422-1.png',publish:false,status:false,myself:true},
            {tit:'概念设计',des:'数据大屏、营销活动',img:'Frame773422-2.png',publish:false,status:false,myself:true},
          ]
          },
      ]
    }
  }
}
</script>

<template>
  <main>
    <div class="flex flex-sc flex-mc" id="Home">
      <div>
        <div class="flex flex-sc ">
          <span class="colorfff fw800 mrr35 f48">HELLO!</span>
          <el-button type="primary" round color="#3477FF" style="width:7.5rem;height:3.125rem;">UX/UI</el-button>
        </div>
        <div><span class="colorfff f96 fw800">我是周莹</span></div>
        <div class="mwth"><span class="color80 f24 fw500 ">I have more than 4 years of experience in UX/UI design</span></div>
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
    <DesignInfo :list="designList"/>
    <ThanksView id="About"/>
</template>
<style scoped>
main {
  width: 120rem;
  /* height: 67.5rem; */
  /* background-image: url("../assets/Frame1.png"); */
  background:url("../assets/Frame1.png");
  background-size:120rem 67.5rem;
  background-repeat:no-repeat;
  padding-left:22.5rem;
  /* padding-right: 6.0875rem; */
}
.pic{
  width: 64.9375rem;
  height: 64.9375rem;
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
