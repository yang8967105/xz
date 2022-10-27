<script>
import phonegif from "../assets/phone-qejs.gif"
import duckgif from "../assets/duck.gif"
export default{
  created(){
    let designList=[
      {
        id:'Phone',bgccolor:'#0ABF5B',tit:'移动端设计',English:'Phone Design',
        cardList:[
          {tit:'企鹅吉市',des:'高品质外卖消费券平台',img:'Frame773572.png',publish:true,status:false,ptext:'小程序'},
          {tit:'药问我',des:'健康服务助手',img:'Frame7734222.png',publish:true,status:false,ptext:'小程序'},
          {tit:'云管家',des:'聚合运力履约平台',img:'Frame7734221.png',publish:true,status:true,ptext:'app',stext:'改版'},

        ]
      },
      {
        id:'Web',bgccolor:'#3A7BFF',tit:'网页端设计',English:'Web Design',
        cardList:[
          {tit:'商有云店',des:'餐饮零售化电商运营平台',img:'Frame773422-0.png',publish:true,status:true,ptext:'Web',stext:'改版'},
          {tit:'供应链中台',des:'医药行业GSP精细化管理软件',img:'Frame773422-2.png',publish:true,status:true,ptext:'Web',stext:'改版'},
          {tit:'商有官网',des:'网站设计结合动效',img:'Frame1719.png',publish:true,status:false,ptext:'Web'},
        ]
        },
      {
        id:'Practice',bgccolor:'#FFA900',tit:'个人练习',English:'Personal Creation',
        cardList:[
          {tit:'3D设计',des:'IP形象、场景',img:'Framecai773422.png',publish:false,status:false,myself:true,mtext:'原创'},
          {tit:'动画设计',des:'MG动画',img:'Frameduck773422.png',publish:false,status:true,myself:true,mtext:'原创',stext:'练习'},
          {tit:'插画设计',des:'插画、图标',img:'Framechahua773422.png',publish:false,status:false,myself:true,mtext:'原创'},
        ]
      },
    ]
    designList=designList.map(item=>{
      let arr=Object.keys(item.cardList) || []
      return {...item,showIndexs:arr}
    })
    this.list=designList
    console.log(this.list)
  },
  data(){
    return {
      list:[]
    }
  },
  methods:{
    setBackground(img){
      return {
        background:'url('+require('@/assets/'+img)+')',
        backgroundSize:'100%'
      }
    },
    cgBackground(obj,index){
      document.getElementsByClassName('card-box')[index].style.height='30.5rem';
      let url=''
      if(obj.img=='Frame773572.png'){
         url=phonegif+'?'+Math.random()
      }else if(obj.img=='Frameduck773422.png'){
         url=duckgif+'?'+Math.random()
      }
      console.log(url)
      if(url){
        document.getElementById(obj.img).style.background='url('+url+')';
        document.getElementById(obj.img).style.backgroundSize='100%';
      }else{

      }

    },
    restore(obj){
      document.getElementById(obj.img).style.background='url('+require('@/assets/'+obj.img)+')';
      document.getElementById(obj.img).style.backgroundSize='100%';
    },
    switchPic(index,bearing){
      const newList=JSON.parse(JSON.stringify(this.list))
      console.log(newList,'old')
      let endnum=''
      if(bearing=='l'){

        if(newList[index].showIndexs.length<newList[index].cardList.length){
          endnum=newList[index].showIndexs[0]
          newList[index].showIndexs.unshift(endnum-1+'')
        }
      }else{
         if(newList[index].showIndexs.length>=4){
          newList[index].showIndexs.splice(0,1)
        }
      }
      console.log(newList,'new')
      this.list=newList
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
    <div class="bottom flex flex-sc">
      <div class="arrow-box arrow-l">
        <img class="arrow pointer" src="../assets/arrow-l.png" @click="switchPic(index,'l')" v-show="item.showIndexs && item.showIndexs[0]>0 && item.cardList && item.cardList.length>3"/>
      </div>
      <div class="flex flex-sc card-box">
        <div 
          :key="item2.tit" 
          v-for="(item2,index2) in item.cardList" 
          :class="['mrr30','flex', 'flex-y ','card']" 
          @mouseover="cgBackground(item2,index)" 
          @mouseleave="restore(item2)"
          v-show="item && item.showIndexs && item.showIndexs.includes(index2+'')"
        >
          <!-- <div class="bottom-img-box br20"><img class="bottom-img" :src="require('@/assets/'+item2.img)" :id="item.id+item2.img"/></div> -->
          <div class="bottom-img-box br20" :style="setBackground(item2.img)" :id="item2.img"></div>
          <div class="flex flex-sc flex-bt br20 card-b">
            <div>
              <div class="flex flex-x flex-sc">
                <span class="f20 fw500 color0D1018">{{item2.tit}}</span>
                <div v-if="item2.publish" :class="['mrl10','mtd','bgc07C160','flex','flex-sc','flex-mc', 'pdtb3','pdlr6']"><span class="colorfff f12 fw400">{{item2.ptext}}</span></div>
                <div v-if="item2.myself" :class="['mrl10','mtd','bgc3A7BFF','flex','flex-sc','flex-mc', 'pdtb3','pdlr6']"><span class="colorfff f12 fw400">{{item2.mtext}}</span></div>
                <div v-if="item2.status" :class="['mrl10','mtd','bgcFFA900','flex','flex-sc','flex-mc', 'pdtb3','pdlr6']"><span class="colorfff f12 fw400">{{item2.stext}}</span></div>
              </div>
              <div class="f14 fw400 color909399">{{item2.des}}</div>
            </div>
            <div class="go-right"><img style="width:.8125rem;height:.5rem" src="https://imagesize.hknet-inc.com/sp/files/7d16f98f-e524-4983-8234-7497dffdf349.png"/></div>
          </div>
        </div>
      </div>
      <div class="arrow-box arrow-r">
        <img class="arrow pointer " src="../assets/arrow-r.png" @click="switchPic(index,'r')" v-show="item.cardList && item.cardList.length>3 && item.showIndexs && item.showIndexs.length>3"/>
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
  padding: 5rem 2.125rem;
  .card-box{
    width: 75rem;
    // height: 27.625rem;
    overflow-x: scroll;
    // overflow-y: hidden;
  }
  .arrow-box,.arrow{
    width: .875rem;
    height: 1.5rem;
  }
  .arrow-l{
    margin-right: 1.625rem;
  }
  .arrow-r{
    margin-left: 1.625rem;
  }
  
}

.go-right{
  visibility: hidden;
}
.card:hover{
  transform: translateY(-1.875rem);
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
