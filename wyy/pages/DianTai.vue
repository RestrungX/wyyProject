<template>
<div>
         <div class="banner">
        <el-carousel height="200px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="(item,index) in bannerValue" :key="index">
                <a :href="item.url">
                    <img :src="item.pic" alt="">
                </a>
            </el-carousel-item>
        </el-carousel>

    </div>
        <div class="second">
           <div class="tuijiangedan">
             <ul>
               <li v-for="item in djRadios" :key="item.id">
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
</div>
   
</template>

<script>
import axios from 'axios'
    export default {
        name:'DianTai',
        data() {
            return {
                bannerValue:[],
                djRadios:[]
            }
        },
        mounted(){
             axios.get("https://autumnfish.cn/dj/banner").then(
            response=>{
                console.log(response.data.data);
                this.bannerValue=response.data.data
           },
         ),
         axios.get("https://autumnfish.cn/dj/hot?limit=5").then(
            response=>{
                console.log(response.data.djRadios);
                this.djRadios=response.data.djRadios
           },
         )
        }
    }
</script>

<style lang="less" scoped>
.banner{
    width: 500px;
    margin-left:20px;
    img{
        width: 100%;
        height: 100%;
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
}

.second{
   a{
     color: black;
     font-size: 18px;
     text-decoration: none;
   }
    margin-top: 10px;
     h3{
      text-align: center;
      margin-top: -140px;
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
      }
        }
     
  }
  
</style>
