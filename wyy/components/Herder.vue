<template>
<div class="herder" >
    <div class="icon">
        <div class="butt">
            <el-button type="primary" @click="$router.go(-1)">上一页</el-button>
            <el-button type="primary" @click="$router.go(1)">下一页</el-button>
        </div>
    </div>
    
    <div class="serch">
        <el-input
            placeholder="请输入搜索内容"
            prefix-icon="el-icon-search"
            v-model.trim="inputValue2"
            @focus="animateWidth('focus')"
            @blur="animateWidth('blur')"
            >
        </el-input>
        <el-button type="primary" @click="ss">搜索</el-button>

    </div>
    <div class="login">
        <el-button type="primary" @click="login">登录</el-button>
         <div class="login-box">
                <router-view name="login"></router-view>
        </div>
    </div>
    <div class="serch-valueBox" v-if="show">
        <div class="historySerch">
            <h4>
                <i class="el-icon-pie-chart">
                </i>搜索历史
                <el-tooltip class="item" effect="dark" content="删除历史记录" placement="top">
                    <a href="" @click.prevent="deletes">
                         <i class="el-icon-delete"></i>
                    </a>
                </el-tooltip>
                
            </h4>
            <ul>
                <p v-show="!searchArr[0]">暂无搜索内容</p>
               <li v-for="(item,index) in searchArr" :key="index"><a href="#"  @click.prevent="sosuo">{{item}}</a></li>
            </ul> 
        </div>
        <ul  v-show="inputValue2">
            <h4><i class="el-icon-headset"></i>单曲</h4>
            <li v-for="item in serchValue" :key="item.id">
                <a @click="alianjie(item.name,item.id,item.artists[0].name,event)">{{item.name}}</a>-
                <a @click="alianjie" class="songger">{{item.artists[0].name}}</a>
            </li>
        </ul>
        <h4 v-show="inputValue2"><i class="el-icon-s-custom"></i>歌手</h4>
       
        <ul  v-show="inputValue2" class="geshou">
               <li>
                    <router-link
                        :to="{path:'/GeShouXq',
                              query:{
                                  SongsId:songsId,
                                  SongsValue:songsName
                                        }
                            }"> 
                    {{songsName}}
                </router-link>
                </li>
        </ul>
    </div>
</div>
</template>

<script>
        import axios from 'axios'
          export default {
        name:'Herder',
           data() {
              return {
                inputValue2:'',
                show:false,
                serchValue:[],
                searchArr:[],
                songsName:'',
                visible:false,
                songsId:''
            }
        }, 
        methods:{
            //点击搜索失去焦点，获取搜索历史值
            ss(){
                    this.show=false
                    if (!this.inputValue2) return;
                     if (!localStorage.getItem("searchList")) {
                        //没有,就设置数组，但是字符串类型
                        localStorage.setItem("searchList", "[]");
                    } else {
                        //之前有存储，就获取
                        this.searchArr = JSON.parse(localStorage.getItem("searchList"));
                    }
                    //不管之前有没有，都要给数组增加数据
                    this.searchArr.unshift(this.inputValue2);
                     //ES6去重
                    let newArr = new Set(this.searchArr);
                    localStorage.setItem("searchList", JSON.stringify(Array.from(newArr)));

            },
            //判断输入框是否获取焦点
            animateWidth(value){
                if(value==='focus'){
                    this.show=true
                }else{
                    // this.show=false
                }

            },
            //点击路由跳转
            login(){
                this.$router.replace('./Login')
            },
            
            //点击a链接获取详细搜索内容
            alianjie(musicname,musicId,songsname,e){
                this.inputValue2=e.target.innerText
                console.log(musicname,musicId,songsname);
            },
            sosuo(e){
                this.inputValue2=e.target.innerText

            },
            //删除历史记录
            deletes(){
                    //删除本地存储
                    localStorage.removeItem("searchList");
                    //渲染层的数组数据清空
                    this.searchArr = [];

            }

        },
       mounted(){
          this.searchArr=JSON.parse(localStorage.getItem('searchList'))||[]
       },
        watch:{
           inputValue2:{
               handler(){
                   //初始化时清空原有值
                    this.serchValue =''
                   if (this.inputValue2) {
                        axios.get(`https://autumnfish.cn/search?keywords=${this.inputValue2}`).then(
                            response=>{
                                const a =response.data.result.songs.splice(0,4)
                                this.serchValue=a
                                console.log(a);
                                this.songsName=a[0].artists[0].name
                                this.songsId=a[0].artists[0].id
                               

                         },)
                   }
                   //结束时清空原有值
                    this.serchValue =''

            }
           } 
        }
        }
       
        
</script>

<style lang="less" scoped>
.herder{
    ::-webkit-scrollbar {

                width: 3px !important;

                height: 5px !important;

                }

                ::-webkit-scrollbar-thumb {

                border-radius: 10px;

                width: 3px;

                background: rgba(0, 0,0, 0.5);

                }

                ::-webkit-scrollbar-track {

                box-shadow: inset 0 0 5px rgba(35, 68, 83, 0.2);

                border-radius: 10px;

                background: rgba(57, 177, 255, 0.16);

                }
    .icon{
        font-size: 32px;
        float: left;
        margin-top:17px;
        .butt{
            margin-left: 20px;
            margin-top: -6px;
        }
        a{
            :hover{
                font-size: 35px;

            }
      
        }
        i{
            margin-left: 30px;
        }
    }
    .serch{
        float: right;
        display: flex;
        font-size: 32px;
        margin-top:20px;
        margin-right: 160px;
        input{
            border: 1px solid black;
            border-radius: 23px !important;
            display: block;
            margin-right: 20px !important;
        }
        button{
            margin:0 23px;
        }
        input:focus{
            border:2px solid black  !important;
        }
        i{
            margin-left: 30px;
        }
        
    }
    .serch-valueBox{
            position:relative;
            width: 300px;
            height: 400px;
            background-color: white;
            transform: translateX(880px);
            right: 140px;
            top: -30px;
            z-index: 999999;
            border-radius:12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
            overflow: auto;
                
            .historySerch{
                margin:0 auto;
                width: 280px;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: -10px;
                    p{
                        margin: 2px auto;
                    }
                    li{
                        float: left;
                        margin-left: 5px;
                        border: 1px solid #b1b0b0;
                        border-radius: 24px;
                        margin-top: 5px;
                        width: auto;
                        height: 25px;
                        a{
                            display: block;
                            margin-right:10px;
                            margin-left:10px;
                            text-decoration: none;
                        }
                    }
                }
            }
            ul{
                margin: 0;
                padding: 0;
                margin-top: 21px;
                li{
                    list-style: none;
                    font-size: 16px;
                    margin-left: 32px;
                    line-height: 23px;
                    margin-top: 5px;
                    height: 20px;
                    width: 200px;
                    overflow: hidden;
                    :first-child{
                        color: black;
                        font-weight: 300;
                        
                    }
                    .songger{
                        color: #507daf;
                        overflow: hidden;
                    }

                }
            }
            .geshou{
                margin-left: -10px;
                a{
                    font-size: 18px;
                    color: black;
                    text-decoration: none;
                }
            }
        }
    .login{
        width: 100px;
        position: relative;
        left: 1150px;
        top: -40px;
    }
}

</style>
