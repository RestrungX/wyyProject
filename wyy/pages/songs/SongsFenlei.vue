<template>
    <div>
        <ul>
            <div v-if="!GeshouValue">
                <i class="el-icon-loading"></i><span>加载中...</span>
            </div>
            <li v-for="item in GeshouValue" :key="item.id">
                <router-link
                class="active"
                 :to="{path:'/GeShouXq',
                         query:{SongsId:item.id,
                                SongsLastName:item.alias[0]
                                }}"> 

                    <img :src="item.picUrl" alt="">
                </router-link>
                <a href="">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'SongsFenlei',
        props:['geshouValue'],
        data() {
            return {
                GeshouValue:[],
                SongsId:'',
                SongsType:{types:this.$route.query.types,area:this.$route.query.area}
            }
        },
        
        watch: { 
        // 监听路由变化，路由变化的时候请求页面数据
        '$route.query':{
                immediate:true,
                handler(news) { 
                    // console.log(news,old);
                      axios.get(`https://autumnfish.cn/artist/list?type=${news.types}&area=${news.area}`).then(
                                response=>{
                                    this.GeshouValue=response.data.artists
                                }
                            )

        } 
     },
        }
    }
    
</script>

<style lang="less" scoped>
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
</style>
