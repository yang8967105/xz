<script>
import phonegif from "../assets/phone-qejs.gif"
export default{
 props: ['list'],
  created(){
  },
  data(){
  },
  methods:{
    setBackground(img){
      return {
        background:'url('+require('@/assets/'+img)+')',
        backgroundSize:'100%'
      }
    },
    cgBackground(obj){
      const url=phonegif+'?'+Math.random()
      document.getElementById(obj.img).style.background='url('+url+')';
      document.getElementById(obj.img).style.backgroundSize='100%';
    },
    restore(obj){
      document.getElementById(obj.img).style.background='url('+require('@/assets/'+obj.img)+')';
      document.getElementById(obj.img).style.backgroundSize='100%';
    }

  }
}
</script>

<template>
  <div class="design-info" :key="item.id" v-for="(item,index) in list" :style="{backgroundColor:item.bgccolor}" :id="item.id">
  <div class="top flex flex-bt">
    <div class="top-left flex flex-bt flex-sc">
      <div class="t-left">
        <div :key="index1" v-for="(item1,index1) in list">
          <div  :class="[item.id==item1.id?'no-circle':'circle', 'mrb14']"></div>
        </div>
      </div>
      <div class="t-right">
        <div class="f48 fw800 colorfff lh58">{{item.tit}}</div>
        <div class="f32 fw800 color50 mtd">{{item.English}}</div>
      </div>
    </div>
    <div class="top-right">
      <span class="f48 fw800 colorfff">{{'0'+(index+1)}}</span>
      <!-- <span class="f48 fw800 color50">/12</span> -->
    </div>
  </div>
    <div class="bottom flex flex-x flex-sc">
      <div :key="item2.tit" v-for="(item2,index2) in item.cardList" class="mrr30 flex flex-y card" @mouseover="cgBackground(item2)"  @mouseleave="restore(item2)">
        <!-- <div class="bottom-img-box br20"><img class="bottom-img" :src="require('@/assets/'+item2.img)" :id="item.id+item2.img"/></div> -->
        <div class="bottom-img-box br20" :style="setBackground(item2.img)" :id="item2.img"></div>
        <div class="flex flex-sc flex-bt br20 card-b">
          <div>
            <div class="flex flex-x flex-sc">
              <span class="f20 fw500 color0D1018">{{item2.tit}}</span>
              <div :class="['mrl10',item2.publish?'bgc07C160':'','flex','flex-sc','flex-mc','w40','h24']"><span class="colorfff f12 fw400">上线</span></div>
              <div :class="['mrl10',item2.status?'bgcFFA900':'','flex','flex-sc','flex-mc','w40','h24']"><span class="colorfff f12 fw400">改版</span></div>
              <div :class="['mrl10',item2.status?'bgc3A7BFF':'','flex','flex-sc','flex-mc','w40','h24']"><span class="colorfff f12 fw400">原创</span></div>
            </div>
            <div class="f14 fw400 color909399">{{item2.des}}</div>
          </div>
          <div class="go-right"><img style="width:.8125rem;height:.5rem" src="https://imagesize.hknet-inc.com/sp/files/7d16f98f-e524-4983-8234-7497dffdf349.png"/></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.design-info{
  // padding: 7.4375rem 15rem 0 15rem;
  padding: 6.875rem 17.5rem 0 17.5rem;
}
.color50{
  color: rgba(250,250,250,0.5);
}
.circle{
  width:.75rem;
  height: .75rem;
  background-color: rgba(250,250,250,0.4);
  border-radius: 50%;
}
.no-circle{
  width: .75rem;
  height: 2rem;
  background-color: #fff;
  border-radius: 2.4375rem;
}
.t-left{
  margin-right: 6.75rem;
}
.bottom{
  // width: 90rem;
  // height: 41.1875rem;
  width: 85rem;
  height: 35.75rem;
  background-color: #f4f4f4;
  border-top-left-radius: 3.75rem;
  border-top-right-radius: 3.75rem;
  margin-top: 3.75rem;
  // padding: 10rem 0 7.5rem 7.5rem;
  padding: 5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  
}
.go-right{
  visibility: hidden;
}
.card:hover{
  transform: translateY(-2.5rem);
  transition: all .2s;
  .bottom-img{
    transform: scale(1.3);
    transition: all .2s;
  }
  .go-right{
    visibility:visible
  }
  
}
.card-b{
  padding: 1.5rem;
  background-color: #fff;
}
.bottom-img-box{
  width: 23.75rem;
  height: 20rem;
  // width: 22.5rem;
  // height: 17.3125rem;
  overflow: hidden;
  .bottom-img{
    width: 23.75rem;
    height: 20rem;
  }
}
.bgcFFA900{
background-color: #FFA900;
border-radius: .25rem;
}
.bgc07C160{
  background-color: #07C160;
border-radius: .25rem;
}
.bgc3A7BFF{
  background-color: #3A7BFF;
border-radius: .25rem;

}
</style>
