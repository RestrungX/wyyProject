<template>
<div>
    <ul>
        <li v-for="item in PHBlist" :key="item.id">
            <div class="top">
                <div class="rm">
                    <div class="top50">
                        
                        <img :src="item.coverImgUrl" alt="">
                    </div>
                </div>
                <!-- <ol>
                    <li v-for="item in musicValue10" :key="item.id">
                        <a href="">{{item.name}}<a v-show="item.alia[0]">（{{item.alia[0]}}）</a></a>
                        <a href="">
                                <el-tooltip class="item" effect="dark" content="收藏" placement="top-start">
                                    <i class="el-icon-star-off" ></i>
                                </el-tooltip>
                        </a>
                </ol> -->
            </div>
        </li>
    </ul>
    
</div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'PaihangBang',
        data() {
            return {
                PHBlist:[]
            }
        },
        mounted(){
            axios.get("https://autumnfish.cn/toplist").then(
           response=>{
             this.PHBlist=response.data.list.splice(0,4)
             console.log(this.PHBlist);

           },
         )
         axios.get("https://github.com/toplist/detail").then(
           response=>{
             console.log(response.data);
           },
         )
        }
    }
</script>

<style lang="less" scoped>
ul{
    margin: 0;
    padding: 0;
    li{
        list-style: none;
            .top{
    width: 100%;
    display: flex;
      .rm{
            width:20%;
            .top50{
                background-color: #47494e;
                border-radius: 8px;
                margin-top: 50px;
                margin-left: 20px;
                float: left;
                width: 300px;
                height: 300px;
                text-align: center;
                img{
                    width: 300px;
                    height: 300px;
                    border-radius: 8px;

                }
               
            }
               
       
         p{
                    margin-top: 34px;
                }    
        }
         ol{
                    float: right;
                    margin: 0;
                    padding: 0;
                    width: 80%;
                    margin-left: 60px;
                    :hover{
                            background-color:#f0f1f2;
                        }
                    .show40{
                        width: 700px;
                        height: 40px;
                        :hover{
                                color: rgb(131, 131, 131);
                            }
                        a{
                            display: block;
                            float: right;
                            font-size: 13px;
                            width: 100px;
                            height: 100%;
                            color: #9b9b9b;
                            text-decoration: none;
                            
                        }
                        
                    }
                    li{
                        margin-right: 40px;
                        width: 700px;
                        height: 40px;
                        margin-top: 14px;
                        
                        a{
                            font-size: 18px;
                            color: black;
                            text-decoration: none;
                            line-height: 40px;
                            a{
                                color: #9b9b9b;
                                margin-left: 3px;
                            }
                        }
                        i{
                            float: right;
                            margin-right: 0px;
                            font-size: 23px;
                            line-height: 41px;
                            
                        }
                    }
                }
}
    }
}

</style>
