<script>
import { ElImage } from 'element-plus'

export default{
  components: { ElImage },
  setup(){

  },
  data(){
    return {
      list:[
        {date:'20221.04 - 2022.08',name:'上海商有网络（UX/UI设计师）',img:"../../public/Frame.png"},
        {date:'20221.04 - 2022.08',name:'杭州中宝科技（UX/UI设计师）'},
        {date:'20221.04 - 2022.08',name:'杭州老铁帮网络（UI设计师）'},
      ]
    }
  }

}
</script>

<template>
  <div class="company flex flex-ar flex-sc">
    <div :key="item.name" v-for="(item,index) in list">
      <div class="img">
         <img v-if="item.img" src="../../public/Frame.png" class="img"/>
      </div>
      <div class="mrt24 mrb16 colorfff fw500 f20">{{item.date}}</div>
      <div class="colorfff f24 fw400">{{item.name}}</div>
    </div>
  </div>
</template>
<style scoped>
.company {
  width: 120rem;
  height: 19.625rem;
  /* background-image: url("../../public/Frame2.png"); */
  background:url("../../public/Frame2.png");
  background-size:120rem 19.625rem;
  background-repeat:no-repeat;
}
.img{
  width: 5.6875rem;
  height: 2.3125rem;
}

</style>
