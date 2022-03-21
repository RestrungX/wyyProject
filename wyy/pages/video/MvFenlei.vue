<template>
    <div>
        <ul>
            <div v-if="!MvValue">
                <i class="el-icon-loading"></i>
            </div>
            <li v-for="item in MvValue" :key="item.id">
                <router-link :to="{path:'/videoPlay',query:{videoId:item.id,videoTitle:item.name}}">
                <img :src="item.cover" alt="">
                </router-link>
                 <router-link
                   to="/videoPlay"
                   class="Mvming">{{item.name}}
                 </router-link>
                 <br>
                 <router-link
                    to="/videoPlay" 
                    class="MvZUO" v-for="items in item.artists" :key="items.id">{{items.name}}
                 </router-link>
                 <br>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'MvFenlei',
        data() {
            return {
                MvValue:[],
            }
        },
        watch: { 
        // 监听路由变化，路由变化的时候请求页面数据
        '$route':{
                immediate:true,
                handler() {
                        axios.get(`https://autumnfish.cn/mv/first?area=${this.$route.query.type}`).then(
                                response=>{
                                    let value=response.data.data
                                    this.MvValue=value.slice(0,6)
                                }
                            )
                    }
        } 
     },
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
                font-size: 18px;
                margin-top: 10px;
                margin-left: 10px;
                display: block;
                :hover{
                        font-weight:600;
                }
            }
            .MvZUO{
                position: relative;
                top: -17px;
                left: 10px;
                color: #676767;
                
            }
        }
    }
</style>
