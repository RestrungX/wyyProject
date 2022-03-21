<template>
    <div class="yanzheng-box">
        <div class="input-box">
        <span>账号：</span><el-input class="usr" placeholder="请输入内容" v-model="user"  clearable></el-input><br>
        <span>密码：</span><el-input class="psw" placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <div class="button-box">
            <el-button @click="qqiushu">二维码登录</el-button>
            <el-button @click="chakan">查看登录二维码</el-button>
            <el-button @click="quereng">查看二维码登录状态</el-button>
            <p v-show="text">{{text}}</p>
            <img v-show="qrimg" :src="qrimg" alt="" style="width:200px;height:200px">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
    name:'',
    data() {
        return {
            user:'',
            password:'',
            shuju:[],
            unikey:'',
            qrimg:'',
            text:''
        }
    },
    methods:{
        qqiushu(){
            
        let date=new Date();
        axios.get(`https://autumnfish.cn/login/qr/key?${date.getTime()}`).then(
            response=>{
                // console.log(response.data.data.unikey);
                this.unikey=response.data.data.unikey
                console.log(this.unikey);

            },error=>{
                console.log(error.message);
            }
        )
        
        },

        // 查看登录二维码
        chakan(){
            console.log(this.unikey);
             let date=new Date();
            axios.get(`https://autumnfish.cn/login/qr/create?qrimg=true?key=${this.unikey}${date.getTime()}`).then(
            response=>{
                this.qrimg=response.data.data.qrimg
                console.log(this.qrimg);
                
            }
        )
        },
        //确认二维码状态
        quereng(){
            // console.log(123);
            axios.get(`https://autumnfish.cn/login/qr/check?key=${this.unikey}`).then(
            response=>{
                console.log(response.data);
                if(response.data.code===801)return this.text=response.data.message

            },error=>{
                console.log(error.message);
            }
        )
        }
    },
    mounted(){
         

    }
    
    }
</script>

<style scoped lang="less">
    .yanzheng-box{
        .input-box{
            margin: 0 auto;
            height: 100%;
             width: 100%;
             margin-left: 300px;
            .usr{
                margin-top: 100px;
                width: 300px;
            }
            .psw{
                margin-top: 30px;
                width: 300px;
                margin-left: auto;

            }        
        }
        .button-box{
            button{
                margin-left: 200px;
                margin-top: 50px;
            }
            img{
                position: relative;
                left: 420px;

                    }
        }
    }
   
</style>
