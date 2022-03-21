<template>
   <div class="zhuye">
     <div class="zhuye-top">
          <Herder/>
     </div>
      <div class="zhuye-bottom">
        <div class="zhuye-left">
          <!-- //左侧按钮 -->
          <ul>
            <li 
              v-for="(item,index) in title" :key="item.id"
              :class="{active:index===typeactive}"
              @click="typeactive=index"
              >
                <router-link  :to="item.router">{{item.name}}</router-link>
            </li>
          </ul>
      </div>
      <div class="zhuye-right"
      ref="zhanshi"
      v-loading="loading">
                <router-view></router-view>
      </div>
      </div>
       <el-button  @click="show">{{show2==true ? '隐藏' : '展开'}}</el-button>
       <div ref="divjiedian" class="zhuye-bofang">
         <transition name="el-zoom-in-bottom">
          <div  v-show="show2" class="transition-box">
            <div class="zhuye-bofang-box">
            <Buttom/>
            </div>
          </div>
      </transition>
       </div>
      
   </div>
    
  
</template>

<script>
  import Herder from '/components/Herder'
  import Buttom from '/components/Buttom'


export default {
    name:'App',
    components:{Herder,Buttom},
    data() {
      return {
        loading:true,
        show2:false,
        // 定义一个初始active值
        typeactive:0,
        //左侧标题列表
        title:[
          {id:'01',name:'发现音乐',router:'/FaxianYy'},
          {id:'02',name:'歌手',router:'/GeShou'},
          {id:'03',name:'视频',router:'/ShiPing'},
          {id:'04',name:'电台',router:'/DianTai'},
          {id:'05',name:'排行榜',router:'/PaihangBang'},
          {id:'06',name:'收藏的音乐',router:'/ShoucanggeQu'}
        ]
      }
    },
    methods:{
      //=控制底部播放展示与隐藏
      show(){
          console.log(this.typeactive);

        this.show2 =! this.show2
         if(!this.show2){
         this.$refs.divjiedian.style.display="none"
          }else{
         this.$refs.divjiedian.style.display="block"
          }
      }
    },
    watch:{
      typeactive:{
         immediate:true,
         handler(){
        setTimeout(()=>{
          this.loading=false
        }, 800);
         }

      }
    }
}
</script>

<style lang="less" scoped>
// 全局定义一个滚动条
 ::-webkit-scrollbar {

  width: 7px !important;

  height: 5px !important;

}

::-webkit-scrollbar-thumb {

  border-radius: 10px;

  width: 7px;

  background: rgba(0, 0,0, 0.5);

}

::-webkit-scrollbar-track {

  box-shadow: inset 0 0 5px rgba(35, 68, 83, 0.2);

  border-radius: 10px;

  background: rgba(57, 177, 255, 0.16);

}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.zhuye-top{
  height: 9%;
background-color: #f5f5f5;
}
.zhuye-bottom{
  display: flex;
  height: 91%;
  width: 100%;
}

.zhuye{
  width: 1277px;
  height: 900px;
  margin: 0 auto;
  border-bottom: none;
   box-shadow:6px 6px 10px 6px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.zhuye-left{
  width: 200px;
  height:100%;
  border-left: none;
  border-bottom: none;
  border-right: 1px solid #c4c4c4;

  ul{
      margin: 0;
      padding: 0;
      height:100%;
      width: 200px;
    .active{
      background-color:#f1f3f4 ;
      font-size: 26px;
      font-weight: 600;
    }
    li{
      width: 190px;
      height: 50px;
      font-size: 23px;
      font-weight: 400;
      margin-top: 32px;
      text-align: center;
      margin-left: 7px;
      &:hover{
					background-color: #f1f3f4;
				}
      a{
            color: #3c4042;
            display: block;
            width:100%;
            height: 100%;
            text-align: left;
            line-height: 50px;
        }
    }
  }
  
}
.zhuye-right{
  // height: 100%;
  overflow: auto;
  width: 1077px;
  margin-bottom: 10px;
 
  
}
.zhuye-bofang{
  width: 1278px;
  height: 100px;
  position: relative;
  bottom: 140px;
  display: none;
  .zhuye-bofang-box{
  width: 1277px;
  height: 100px;
  background-color: whitesmoke;
  border-bottom: 1px solid #e0e0e0;
}
}

</style>
