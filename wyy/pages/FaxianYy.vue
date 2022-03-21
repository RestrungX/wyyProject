<template>
      <div class="fxyybox">
        <div>
          <h3><i class="el-icon-headset"></i>个性推荐</h3>
         <div class="banner">
              <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="(item,index) in imgValues" :key="index">
                    <img :src="item.imageUrl">
                  </el-carousel-item>
              </el-carousel>
         </div>
        </div>
         
         <div class="second">
           <h3><i class="el-icon-postcard"></i>歌单推荐</h3>
           <div class="tuijiangedan">
             <ul>
               <li class="tuijan" @click="meirituijian">
                 <div class="icon-box">
                   <i class="el-icon-thumb"></i>
                  </div>
                  <div>
                   <router-link to="/meiriTJ">每日推荐歌曲</router-link>
                 </div>
               </li>
               <li v-for="item in geDanValues" :key="item.id">
                 <div class="img-box">
                   <router-link
                    :to="{
                      path:'/GeDanxq',
                     
                    }">
                        <img :src="item.picUrl" alt="">
                   </router-link>
                   <i class="el-icon-video-play"></i>
                  </div>
                 <div class="text-box">
                   <a href="#">{{item.name}}</a>
                 </div>
               </li>
             </ul>
           </div>
         </div>

         <div class="first2">
           <h3><i class="el-icon-help"></i>电台推荐</h3>
           <div>
             <ul>
            <div v-if="!DianTaiValue">
                <i class="el-icon-loading"></i><span>加载中...</span>
            </div>
            <li v-for="item in DianTaiValue" :key="item.id">
                    <img :src="item.picUrl" alt="">
                <a href="">{{item.name}}</a>
            </li>
        </ul>
           </div>
         </div>
         
         <div class="first3">
           <div v-if="!ReboValue">
                <i class="el-icon-loading"></i>
            </div>
           <h3><i class="el-icon-s-help"></i>MV推荐</h3>
           <div>
             <ul>
                    <li v-for="item in ReboValue" :key="item.id">
                        <router-link :to="{path:'/videoPlay',query:{videoId:item.id,videoTitle:item.name}}">
                        <img :src="item.picUrl" alt="">
                        </router-link>
                        <router-link
                        to="/videoPlay"
                        class="Mvming">{{item.name}}
                        </router-link>
                        <br>
                    </li>
                  
                </ul>
           </div>
         </div>
      </div>
   
</template>

<script>
import axios from 'axios'
export default {
    name:'FaxianYy',
    data() {
      return {
        count: 11,
      //轮播图数据
        imgValues: [],
      //推荐歌单数据
        geDanValues:[],

        DianTaiValue:[],
        ReboValue:[],

        scrollTime : null
      }
    },
    mounted() {
      //轮播图
         axios.get("https://autumnfish.cn/banner").then(
           response=>{
            this.imgValues=response.data.banners
           },
         ),
         //推荐歌单
         axios.get(`https://autumnfish.cn/personalized?limit=${this.count}`).then(
           response=>{
            this.geDanValues=response.data.result  
           },
         ),
         //热门电台
         axios.get(`https://autumnfish.cn/dj/hot?limit=10`).then(
           response=>{
            // console.log(response.data.djRadios);
            this.DianTaiValue=response.data.djRadios
           },
         ),
         //推荐MV
         axios.get(`https://autumnfish.cn/personalized/mv`).then(
                    response=>{
                        this.ReboValue=response.data.result.splice(0,3)
                        console.log(response.data);
                    }
                )

    },
    methods:{
      //每日推荐列表跳转
      meirituijian(){
        this.$router.replace('/meiriTJ')
      }
    }
    
}
</script>

<style lang="less" scoped>
 .banner{
    width: 1000px;
    height: 388px;
    margin: 20px auto 0;
    
    img{
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  h3{
      text-align: center;
  }
  .second{
    margin-top: 10px;
     h3{
      text-align: center;
      margin-top: -140px;
     }
  }
  .tuijiangedan{
    margin-top: 15px;
    
    .tuijan{
        overflow: hidden;
        cursor:pointer;
      .icon-box{
        width: 200px;
        height: 200px;
        background-color: rgba(64, 158, 255,0.4);
        border-radius: 12px;
        :hover{
        font-size: 75px;
        font-weight: 400;
          } 

      }

      i{
        width: 200px;
        height: 20px;
        text-align: center;
        font-size: 64px;
        position: relative;
        top:70px;
        color: white;
        

      }
      a{
        position: relative;
        top: 10px;
        font-size: 18px;
        font-weight: 200;
        color: black;
        font-weight: 300;
        text-decoration: none;

      }
      
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      li{
        margin: 10px;

        list-style: none;
        width: 200px;
        height: 250px;
           
        .img-box{
          width: 200px;
          height: 200px;
          :hover{
              font-size: 30px;
            }
          img{
            width: 200px;
            height: 200px;
            border-radius: 12px;
            
          }
          i{
            position: relative;
            font-size: 25px;
            top: -190px;
            left: 160px;
            color: white;

          }

          }
        .text-box{
            position: relative;
            top: 12px;
            width: 200px;
            height: 30px;
            overflow: hidden;
            a{
              text-decoration: none;
              color: black;
              font-size: 18px;
              font-weight: 300;
              text-overflow:ellipsis;
            }
          }
             
      }
      
    }

  }
  .first2{
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      li{
        margin:25px 8px;
        list-style: none;
        width: 175px;
        height: 240px;
        
         :hover{
               font-weight: 400;
            }
        img{
            width: 175px;
            height: 175px;
            border-radius:6px;
        }
        a{
            display:block;
            color:black ;
            font-size: 15px;
            margin-top: 10px;
            text-decoration: none;
               font-weight: 300;
           
        }
      }
    }
  }
  .first3{
      ul{
        padding:0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       
        li{
            list-style: none;
            width: 300px;
            height: 200px;
            margin-top: 45px;
            img{
                border-radius: 6px;
                width: 300px;
                height: 170px;
            }
            a{
                color:black;
                text-decoration: none;
            }
            .Mvming{
                width: 300px;
                font-size: 18px;
                margin-top: 10px;
                margin-left: 10px;
                display: block;
                text-overflow:ellipsis;
                :hover{
                        font-size: 20px;
                        font-weight: 500;
                }
            }
            
        }
    }
  }
</style>
