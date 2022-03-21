<template>
    <div>
        <div class="top">
             <h3>最新MV</h3>
            <span>
                <ul>
                    <li
                     v-for="(item,index) in fenlei" :key="item.id"
                     :class="{active:index===listactive}"
                     @click="listactive=index">
                        <router-link
                         :to="{
                                name:'MvFenlei',
                                query:{
                                    id:`${item.id}`,
                                    type:`${item.name}`
                                    }
                         }">
                         {{item.name}}
                         </router-link>
                    </li>
                  
                </ul>
            </span>
        </div>
        <div class="zhanshi">
            <router-view></router-view>
        </div>
        <div class="rebo">
             <h3>热播MV</h3>
            <span>
                <ul>
                    <li v-for="item in ReboValue" :key="item.id">
                        <router-link :to="{path:'/videoPlay',query:{videoId:item.id,videoTitle:item.name}}">
                        <img :src="item.cover" alt="">
                        </router-link>
                        <router-link
                        to="/videoPlay"
                        class="Mvming">{{item.name}}
                        </router-link>
                        <br>
                    </li>
                  
                </ul>
            </span>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
         name:'ShiPingMv',
         data() {
             return {
                 listactive:0,
                 fenlei:[
                     {id:'001',name:'内地'},
                     {id:'002',name:'港台'},
                     {id:'003',name:'欧美'},
                     {id:'004',name:'日本'},
                     {id:'005',name:'韩国'}
                 ],
                 ReboValue:[]

             }
         },
          updated(){
       console.log(this.listactive);
   },
         methods:{
             active(){
             }
         },
         mounted() {
             axios.get(`https://autumnfish.cn/mv/exclusive/rcmd?limit=6`).then(
                    response=>{
                        this.ReboValue=response.data.data
                    }
                )
         },
    }
</script>

<style lang="less" scoped>
    
    .top{
        height: 70px;
        h3{
            margin-top: 30px;
            float: left;
            margin-left: 20px;
        }
        ul{
            margin: 0;
            padding: 0;
            float: right;
            margin-top: 30px;
            margin-right: 50px;
            :first-child{
                color:#337ab7;
                    font-size: 15px;
                    font-weight: 500;
            }
            .active{
                    background-color: rgb(5, 45, 87);
                    border-radius: 8px;
                }
            li{
                 float: left;
                list-style: none;
                
                margin-right: 10px;
                border-radius: 12px;
                
                a{
                    line-height: 30px;
                    margin: 16px;
                    margin-bottom: 0;
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
    .zhanshi{
        width: 100%;
        height: 520px;
        margin-top: 10px;
    }
    .rebo{
        height: 70px;
        h3{
            margin-top: 45px;
            margin-left: 20px;
        }
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
