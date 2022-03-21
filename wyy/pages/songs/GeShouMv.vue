<template>
<div>
     <ul>
                    <li v-for="item in ReboValue" :key="item.id">
                        <router-link :to="{path:'/videoPlay',query:{videoId:item.id,videoTitle:item.name}}">
                        <img :src="item.imgurl" alt="">
                        </router-link>
                        <router-link
                        to="/videoPlay"
                        class="Mvming">{{item.name}}
                        </router-link>
                        <br>
                    </li>
                  
     </ul>
</div>
</template>

<script>
import axios from 'axios';
    export default {
         name:'GeShouMv',
         data() {
             return {
                 ReboValue:[]
             }
         },
        mounted(){
                    //  console.log(this.$route.query.SongsId);

             axios.get(`https://autumnfish.cn/artist/mv?id=${this.$route.query.SongsId}`).then(
                 response=>{
                    //  console.log(response.data.mvs);
                     this.ReboValue=response.data.mvs.splice(0,9)
                 }
             )
        }
    }
</script>

<style lang="less" scoped>
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
</style>
