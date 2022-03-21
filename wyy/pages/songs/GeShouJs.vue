<template>
    <div>
        <div>
            <div class="jinajie">
                <h3>{{$route.query.SongsValue}}简介</h3>
                <p>{{jieshaoValue}}</p>
            </div>
            <div class="cont">
                <ul>
                    <li v-for="(item,index) in introduction" :key="index">
                        <h3>{{item.ti}}</h3>
                        <p>{{item.txt}}</p>
                    </li>
                </ul>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'GeShouJs',
        data() {
            return {
                jieshaoValue:'',
                introduction:[]
            }
        },
        methods:{
            
        },
        mounted() {
             axios.get(`https://autumnfish.cn/artist/desc?id=${this.$route.query.SongsId}`).then(
                 response=>{
                     this.jieshaoValue=response.data.briefDesc
                     this.introduction=response.data.introduction

                 }
             )
        },
    }
</script>

<style lang="less" scoped>
    .jinajie{
        height: auto;
        h3{
            margin-left: 25px;
            font-weight: 600;
            
        }
        p{
            margin: 10px 40px;
            font-size: 21px;
            height: auto;
            line-height: 42px;
            color: #676767;
            text-indent: 2em;

            }
    }
    .cont{
        ul{
            margin: 0;
            padding: 0;
            li{
                margin-top: 50px;
                h3{
            margin-left: 25px;
            font-weight: 600;
            
        }
        p{
            margin: 10px 40px;
            font-size: 21px;
            height: auto;
            line-height: 42px;
            color: #676767;
            white-space: pre-wrap
            }
            }
        }
    }
</style>
