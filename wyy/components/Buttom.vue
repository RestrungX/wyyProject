<template>
    <div class="qb">  
        <div class="gequxq">
            <span class="img-box">
                <span>
                    
                </span>
            </span>
            <div class="geming-box">
                 <span class="geming">{{musicName}}</span>
                 <span class="geshou">{{songsname}}</span>
            </div>
        </div>
        <div class="jdt-box">
            <div>
                
                <audio
                
                 ref="bofangtiao" :src='musicUrl' controls='controls' loop='loop' autoplay='autoplay'>亲 您的浏览器不支持html5的audio标签</audio>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
       name:'',
       data() {
           return {
               musicUrl:'1',
               songsname:' ',
               musicName:'',
               musicId:'',
               
           }
       },
       watch:{
           musicId(news){
                axios.get(`https://autumnfish.cn/lyric?id=${news}`).then(
                response=>{
                     console.log(response.data);
                },
         )
           }
       },
      mounted(){
          this.$bus.$on('getMusicId',(data,name,musicName,musicId)=>{
                this.musicUrl=data
                this.songsname=name
                this.musicName=musicName
                this.musicId=musicId
			})
            console.log(this.$refs.bofangtiao.currentTime);
      }
       
    }
</script>

<style lang="less" scoped>
    .qb{
        width: 100%;
        height: 100%;
        ul{
            text-decoration: none;
        }
    }
    .gequxq{
        width: 300px;
        height: 100%;
        float: left;
        .img-box{
            width:70px;
            height:70px;
            float: left;
            margin-top: 18px;
            margin-left: 12px;
        }
        .geming-box{
            top: 20px;
            left: 90px;            
            position: absolute;
            span{
                margin: 10px;
                font-size:17px;
            }
            .geshou{
                position: relative;
                top: 40px;
                right: 80px;
            }
        }
    }
    .jdt-box{
        width: 960px;
        height: 100%;
        position: absolute;
        left:300px;
        .icon-box{
            font-size: 32px;
            margin-left:90px;
            margin-top: 10px;
            a{
                color: #333333;
                :hover{
                    color: #66b1ff;
                }
            }
            i{
                margin-left: 150px;
            }
        }
        audio{
            width: 800px;
            margin-top: 25px;
        }

    }
</style>
