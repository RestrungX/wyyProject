<template>
 <div>
     <h3>全部视频</h3>
     <ul>
         <li v-for="item in viedoimgValue" :key="item.id">
             <router-link :to="{path:'/videoPlay',query:{videoId:item.id,videoTitle:item.name}}"  href="" class="imgbox"><img :src="item.cover" alt=""></router-link>
             <div class="geshouxq">
                 <router-link to="/videoPlay" class="title">{{item.name}}</router-link><br>
                 <router-link to="/videoPlay" class="title">{{item.artistName}}</router-link><br>
                <router-link to="/videoPlay" class="title">{{item.briefDesc}}</router-link>
             </div>
         </li>
     </ul>
 </div>
</template>

<script>
        import axios from 'axios'
        export default {
            name:'ShiPingAll',
            data() {
                return {
                    viedoimgValue:[]
                }
            },
            mounted() {
                axios.post(`https://autumnfish.cn/mv/all`).then(
                    response=>{
                        this.viedoimgValue=response.data.data
                        console.log(response.data.data);
                    }
                )
            },
        }
</script>

<style lang="less" scoped>
    div{
        width: 100%;
            h3{
                line-height: 80px;
            }
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            li{
                list-style: none;
                width: 300px;
                height: 250px;
                margin: 20px;
                :last-child{
                    display: block;
                }
                .imgbox{
                        img{
                        width: 300px;
                        height: 180px;
                        border-radius: 10PX;
                        border: 1px #e0e0e0 solid;
                    }
                }
                .geshouxq{
                    margin-top: 10px;
                    
                    
                    a{
                        color: black;
                        text-decoration: none;
                        :hover{
                            font-size: 13px;
                        }
                    }
                }
                .title{
                    line-height: 21px;
                }

            }
        }
    }
</style>
